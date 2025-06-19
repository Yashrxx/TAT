const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { DrsM, Top, Bottom } = require('../models/drsM.js');
const User = require('../models/userSchema.js');

const JWT_SECRET = process.env.JWT_SECRET;

// === Middleware to extract user from token ===
const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).json({ error: 'Access Denied: No Token' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.user.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });

    req.user = user; // Attach full user object to request
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Invalid Token' });
  }
};

// === Create User ===
router.post('/createuser', async (req, res) => {
  console.log("Incoming body:", req.body);
  const { name, email, phone, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ success: false, error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    user = await User.create({
      name,
      email,
      phone,
      password: secPass,
    });

    const data = { id: user._id };
    const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

    res.json({ success: true, authToken });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, error: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    const authToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });

    res.json({ success: true, authToken });

  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).send("Server Error");
  }
});

// === Add Dress Measurement (requires auth) ===
router.post('/dress', fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const entry = new DrsM({
      ...req.body,
      name: user.name,
      email: user.email,
      phone: user.phone
    })
    await entry.save();
    res.status(201).json({ message: 'Measurement saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save measurement' });
  }
});

router.get('/dress', fetchUser, async (req, res) => {
  try {
    const data = await DrsM.find({ user: req.user.id });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user-specific data' });
  }
});

router.get('/admin/data', fetchUser, async (req, res) => {
  if (req.user.email !== 'aditisushillunkad30@gmail.com') {
    return res.status(403).json({ error: 'Access denied' });
  }

  try {
    const [dressData, topData, bottomData] = await Promise.all([
      DrsM.find().populate('user', 'name email'),
      Top.find().populate('user', 'name email'),
      Bottom.find().populate('user', 'name email')
    ]);

    res.status(200).json({
      dress: dressData,
      top: topData,
      bottom: bottomData
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch all user data' });
  }
});


// router.post('/tx', async (req, res) => {
//   try {
//     const measurement = new Top(req.body);
//     await measurement.save();
//     res.status(201).json({ message: 'Top measurement saved successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to save top measurement' });
//   }
// });

router.post('/tx', fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const entry = new Top({
      ...req.body,
      name: user.name,
      email: user.email,
      phone: user.phone
    });

    await entry.save();
    res.json({ success: true, entry });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.get('/tx', async (req, res) => {
  try {
    const data = await Top.find({ user: req.user.id });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tops data' });
  }
});

router.post('/btx', fetchUser ,async (req, res) => {
  const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
  try {
    const entry = new Bottom({
      ...req.body,
      name: user.name,
      email: user.email,
      phone: user.phone
    })
    await entry.save();
    res.status(201).json({ message: 'Bottom measurement saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save bottom measurement' });
  }
});

router.get('/btx', async (req, res) => {
  try {
    const data = await Bottom.find({ user: req.user.id });
    res.status(200).json(data);
    
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bottoms data' });
  }
});

module.exports = router;
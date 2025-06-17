const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { DrsM, Top, Bottom } = require('../models/drsM.js');
const User = require('../models/userSchema.js');

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/createuser', async (req, res) => {
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
      password: secPass
    });

    const data = { id: user._id };
    const authToken = jwt.sign(data, JWT_SECRET);

    res.json({ success: true, authToken });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post('/dress', async (req, res) => {
  try {
    const measurement = new DrsM(req.body);
    await measurement.save();
    res.status(201).json({ message: 'Measurement saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save measurement' });
  }
});

router.get('/dress', async (req, res) => {
  try {
    const data = await DrsM.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});


router.post('/tx', async (req, res) => {
  try {
    const measurement = new Top(req.body);
    await measurement.save();
    res.status(201).json({ message: 'Top measurement saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save top measurement' });
  }
});

router.get('/tx', async (req, res) => {
  try {
    const data = await Top.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tops data' });
  }
});

router.post('/btx', async (req,res) =>{
  try {
    const measurement = new Bottom (req.body);
    await measurement.save();
    res.status(201).json({message: 'Bottom measurement saved successfully! '})
  } catch (error) {
    console.error(error)
    res.status(500).json({error: 'Failed to save bottom measurement'})
  }
})

router.get('/btx', async (req, res) => {
  try {
    const data = await Bottom.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bottoms data' });
  }
});

module.exports = router;
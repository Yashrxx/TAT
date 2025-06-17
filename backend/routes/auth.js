const express=require('express')
const router=express.Router()
const { DrsM, Top, Bottom } = require('../models/drsM.js');

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
    const data = await DrsM.find();
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
    const data = await DrsM.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bottoms data' });
  }
});

module.exports = router;
const express=require('express')
const router=express.Router()
const DressMeasurement=require('../models/drsM.js')

router.post('/dress', async (req, res) => {
  try {
    const measurement = new DressMeasurement(req.body);
    await measurement.save();
    res.status(201).json({ message: 'Measurement saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save measurement' });
  }
});

module.exports = router;
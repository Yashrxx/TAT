const mongoose = require('mongoose');

const drsMSchema = new mongoose.Schema({
  shoulderShoulder: { type: Number },
  shoulderApex: { type: Number },
  shoulderUnderBurst: { type: Number },
  apexApex: { type: Number },
  chestCircumference: { type: Number },
  waistCircumference: { type: Number },
  waistLength: { type: Number },
  hipLength: { type: Number },
  hipRound: { type: Number },
  armHole: { type: Number },
  neckDeepFront: { type: Number },
  neckDeepBack: { type: Number },
  shoulderNavel: { type: Number },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('drsM', drsMSchema);
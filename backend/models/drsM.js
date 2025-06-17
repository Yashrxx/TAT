const mongoose = require('mongoose');

const drsMSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
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

const topSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shoulderShoulder: { type: Number },
  shoulderApex: { type: Number },
  shoulderUnderBurst: { type: Number },
  apexApex: { type: Number },
  chestCircumference: { type: Number },
  waistCircumference: { type: Number },
  waistLength: { type: Number },
  armHole: { type: Number },
  neckDeepFront: { type: Number },
  neckDeepBack: { type: Number },
  shoulderNavel: { type: Number },

  createdAt: { type: Date, default: Date.now }
});

const bottomSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullLength: { type: Number},
  hipLength: { type: Number },
  hipRound: { type: Number },
  bottomRound: { type: Number},

  createdAt: { type: Date, default: Date.now }
});

module.exports = {
  DrsM: mongoose.model('DrsM', drsMSchema),
  Top: mongoose.model('Top', topSchema),
  Bottom: mongoose.model('Bottom', bottomSchema)
};
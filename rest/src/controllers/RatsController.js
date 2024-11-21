const express = require('express');
const router = express.Router();
const Rat = require('../models/Rat');
const Mission = require('../models/Mission');

router.get('/', async (req, res) => {
  try {
    const rats = await Rat.find();
    res.json(rats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

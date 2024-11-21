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

router.get('/:id/missions', async (req, res) => {
  try {
    const missions = await Mission.find({ ratId: req.params.id })
      .populate({ path: 'location', select: 'country zone -_id' })
    res.json(missions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
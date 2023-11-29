const Plant = require('../models/Plants');

// Get all plants from db
const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.findAll();
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const findOnePlant = async (req, res) => {

}

module.exports = { getAllPlants, findOnePlant };

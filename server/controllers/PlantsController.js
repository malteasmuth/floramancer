const Plant = require('../models/Plants');

// Get all plants
const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.findAll();
    console.log('Success!');
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get one plant
const findOnePlant = async (req, res) => {
  const { id } = req.params;

  try {
    const plant = await Plant.findByPk(id);

    if (!plant) {
      return res.status(404).json({ error: 'Plant not found' });
    }
    res.status(200).json(plant);
  } catch {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Post a new plant
const newPlant = async (req, res) => {
  const { name, species, age, location } = req.body;

  try {
    const newPlant = await Plant.create({
      name,
      species,
      age,
      location,
    });
    console.log(newPlant.toJSON());
    if (!newPlant) {
      return res.status(404).json({ error: 'Could not be saved' });
    }
    console.log('New plant created!');
    res.status(200).end();
  } catch {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllPlants, findOnePlant, newPlant };

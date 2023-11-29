const express = require('express');
const app = express();
const port = 5000;
const db = require('./server/config/postgres-config');

const Plant = require('./server/models/Plants');
const PlantsController = require('./server/controllers/PlantsController');

app.use(express.json()); // Allow JSON queries

// Define routes and middleware

// const newPlant = async () => {
//   const jane = await Plant.create({ name: "Jane", species: "Plant", age: 21, location: "Working area" });
//   console.log(jane.toJSON());
// }

// // newPlant();

app.get('/', (req, res) => {
  res.send('Hello world');
});

// get all plants
app.get('/api/plants', PlantsController.getAllPlants);

// get one plant
app.get('/api/plants/:id', PlantsController.findOnePlant);

// create a new plant
app.post('/api/plants', PlantsController.newPlant);

// update a plant
app.patch('/api/plants/:id', (req, res) => {
  const { id } = req.params;
  const { name, species } = req.body;

  db.pool.query(
    'UPDATE plants SET name = $1, species = $2 WHERE id = $3',
    [name, species, id],
    (error, result) => {
      if (error) throw error;
      res.status(200).send('Plant updated!');
    }
  );
});

// delete a plant
app.delete('/api/plants/:id', (req, res) => {
  const { id } = req.params;

  db.pool.query('DELETE FROM plants WHERE id=$1', [id], (error, result) => {
    if (error) throw error;
    res.status(200).send(`Plant with id ${id} deleted successfully`);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});

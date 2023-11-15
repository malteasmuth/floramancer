const express = require('express');
const app = express();
const port = 5000; // Wähle einen Port deiner Wahl
const db = require('./postgres-config');

app.use(express.json()); // Erlaube JSON-Anfragen

// Definiere Routen und Middleware hier

app.get('/', (req,res) =>{
  res.send("Hello world");
});

// get all plants
app.get('/api/plants', (req, res) => {

  db.pool.query('SELECT * FROM plants;', (error, result) => {
    if(error) {
      throw error;
    }

    res.status(201).send(result.rows);
  });
});

// get one plant
app.get('/api/plants/:id', (req, res) =>{

  const { id } = req.params;

  db.pool.query('SELECT * FROM plants WHERE id=$1', [id], (error, result) =>{
    if(error) {
      throw error;
    }

    res.status(200).send(result.rows[0]);
  });
})

// create a new plant
app.post('/api/plants', (req, res) =>{

  const { name, species } = req.body;

  db.pool.query('INSERT INTO plants (name, species) VALUES ($1, $2)', [name, species], (error, result) =>{
    if(error) {
      throw error;
    }
    res.status(200).send("Plant created successfully!");
  });
});


app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

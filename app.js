const express = require('express');
const app = express();
const port = 5000; // Wähle einen Port deiner Wahl
const db = require('./postgres-config');

app.use(express.json()); // Erlaube JSON-Anfragen

// Definiere Routen und Middleware hier


app.get('/', (req,res) =>{
  res.send("Hello world");
});

app.get('/api/plants', (req, res) => {

  db.pool.query('SELECT * FROM plants;', (error, result) => {
    if(error) {
      throw error;
    }

    res.status(201).send(result.rows);
  });
});


app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

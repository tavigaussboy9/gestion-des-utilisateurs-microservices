const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Microservice d'authentification actif !');
});

app.listen(port, () => {
  console.log(`Microservice d'authentification à l'écoute sur le port ${port}`);
});

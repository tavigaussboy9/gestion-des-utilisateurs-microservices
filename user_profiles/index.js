const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Microservice de gestion des profils actif !');
});

app.listen(port, () => {
  console.log(`Microservice de gestion des profils à l'écoute sur le port ${port}`);
});

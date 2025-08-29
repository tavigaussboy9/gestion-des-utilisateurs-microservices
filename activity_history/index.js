const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3002;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Microservice d'historique des activités actif !');
});

app.listen(port, () => {
  console.log(`Microservice d'historique des activités à l'écoute sur le port ${port}`);
});

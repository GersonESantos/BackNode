const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('App rodando na porta 3000');dir
});
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Reauete OK');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Request Success !' });
  next();
});

app.use((req, res, next) => {
  console.log('Everything is ok');
});

module.exports = app;
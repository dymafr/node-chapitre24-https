const express = require('express');
const app = express();


app.get('/{*splat}', (req, res) => {
  res.json('hello world');
});

module.exports = app;
/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const { encrypt, decrypt } = require('./utils/security');

app.get('/', async (req, res) => {
  res.json({
    isError: false,
  });
});

app.post('/', async (req, res) => {
  res.json({
    isError: false,
  });
});


app.listen(port, () => console.log(`Server started on ${port}`));

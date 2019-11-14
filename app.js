/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const validUrl = require('valid-url');

const app = express();
const port = process.env.PORT || 4040;

const { encrypt, decrypt } = require('./utils/security');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get('/:hashId', async (req, res) => {
  const { hashId } = req.params;
  try {
    const url = await decrypt(hashId);
    if (url !== null) {
      res.redirect(url);
    } else {
      throw new Error('Invalid or expired URL');
    }
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});

app.post('/', async (req, res) => {
  const { url } = req.body;
  try {
    if (validUrl.isUri(url)) {
      const hash = await encrypt(url);
      res.send(`${req.hostname}/${hash}`);
    } else {
      throw new Error('Invalid URL');
    }
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});

app.get('/', async (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});


app.listen(port, () => console.log(`Server started on localhost:${port}`));

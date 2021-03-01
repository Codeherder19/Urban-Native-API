/* eslint-disable max-len */
const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const cors = require('cors');

app.use(cors());

app.locals.title = 'Urban Native';

app.get('/', (request, response) => {
  response.send('This is Urban Native');
});

app.listen(process.env.PORT)

app.get(`/api/v1/crops`, async (req, res) => {
  try {
  const crops = await database('crops').select();

  res.status(200).json(crops);
  } catch(error) {
  res.status(500).json({ error });
  }
});

app.get(`/api/v1/users/:id`, async (req, res) => {
  try {
    const users = await database('users').select();
    const id = parseInt(req.params.id);
    const currentUser = users.find(user => user.id == id)

    res.status(200).json(currentUser);
  } catch(error) {
      res.status(500).json({ error });
  }
});

app.post(`/api/v1/crops`, async (req, res) => {
  try {
    const db

  }
})

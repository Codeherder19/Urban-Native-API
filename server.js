/* eslint-disable max-len */
const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());

app.listen(process.env.PORT || 3001);

app.locals.title = 'Urban Native';

app.get('/', (request, response) => {
  response.send('This is Urban Native');
});

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

app.put(`/api/v1/users/:id`, async (req, res) => {
  try {
    const parsedId = parseInt(req.params.id);
    return await database('users')
    .where({ id: parsedId })
    .update({
      my_garden: (req.body.my_garden)
    }).then(() => {
      res.status(200).send('Successful PUT request');
    })
  } catch(error) {
    res.status(500).json({ error });
  }
})
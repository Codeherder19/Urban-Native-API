/* eslint-disable max-len */
const { response } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const knex = require('knex')('development');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const db = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'me',
    password: '',
    database: 'knextest'
  }
});
const cors = require('cors');

app.use(cors());

app.set('db', db);


app.set('port', process.env.port || 3001);
app.locals.title = 'Urban Native';

app.get('/', (request, response) => {
  response.send('This is Urban Native');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on
    http://localhost:${app.get('port')}`);
});

app.get(`/api/v1/crops`, async (req, res) => {
  try {
  const crops = await database('crops').select();

  res.status(200).json(crops);
  } catch(error) {
  res.status(500).json({ error });
  }
})



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
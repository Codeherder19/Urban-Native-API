const express = require('express');
const app = express()

app.set('port', process.env.port || 3000);
app.locals.title = 'Urban Native';

app.get('/', (request, response) => {
  response.send('This is Urban Native');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on
    http://localhost:${app.get('port')}`);
});

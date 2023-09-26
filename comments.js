// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser to parse JSON data
app.use(bodyParser.json());

// Use body-parser to parse URL encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Use static files in public folder
app.use(express.static('public'));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Use routes in routes folder
const routes = require('./routes');
app.use('/', routes);

// Listen to port 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
require('dotenv').config();
require('express-async-errors');
// express
const express = require('express');
const app = express();
const path = require('path');

// database
const connectDB = require('./db/connect');

// middlewre
const notFound = require('./middleware/not-found.js');
const errorHandler = require('./middleware/error-handler.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', (_req, res) => res.render('index'));

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listenning on port ${port}`));
  } catch (error) {
    console.log(error.message);
  }
};

start();

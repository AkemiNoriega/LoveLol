const express = require ('express');
const app = express();

app.use(express.json());

//Import Routes
const products = require('./routes/product');
app.use('/api/v1', products);


const errorMiddleware = require('./middlewares/error');
app.use(express.json());

//Import Routes
const products = require('./routes/product');
app.use('/api/v1', products);

//Middleware to handle errors
app.use(errorMiddleware);
module.exports = app
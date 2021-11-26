const express = require('express');
const app =  express();
const postsRoute  = require('./routes/posts');
const alternatePostsRoute = require('./routes/alternateposts');
const bodyParser = require('body-parser');
//const router = require('./routes/posts');
const mongoose = require('mongoose');
require('dotenv/config');


app.use(bodyParser.json());

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('This is the home screen.!!!!!');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to MongoDB');
});


app.listen(5050);
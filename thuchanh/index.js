const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const songController = require('./controllers/songController');

const app = express();
const port = 3000;

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/', songController);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

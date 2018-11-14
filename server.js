const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api');

const app = express();

app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//connecting to mongo
mongoose.connect(db)
    .then(() => console.log('mongoDB connected...'))
    .catch(err => console.log(err));

//use routes
app.use('/routes/api', items);

//use port 3000 if not there use the available port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server started on ${port}`);
})
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api');

const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// DB config
//const db = require('mongodb://localhost:27017/mern_app', { useNewUrlParser: true });

//connecting to mongo
mongoose.connect('mongodb://localhost:27017/mern_app', { useNewUrlParser: true })
    .then(() => console.log('mongoDB connected...'))
    .catch(err => console.log(err));

//use routes
app.use('/routes/api', items);

//use port 5000 if not there use the available port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server started on ${port}`);
})

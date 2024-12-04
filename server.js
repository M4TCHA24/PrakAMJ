const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const temperatureRoutes = require('./routes/DHT11');
const ledRoutes = require('./routes/led');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api/temperature', temperatureRoutes);
app.use('/api/led', ledRoutes);

mongoose.connect(
    "mongodb://localhost:27017/pryekAMJ", 
    () => {
        console.log("DB Connected")
    },
    e => console.error(e)
)

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost/NJsVersion'));
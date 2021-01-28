const express = require('express')
const app = express()
const authRoute = require('./routes/auth');
const dataRoute = require('./routes/data');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const path = require('path');


async function dbConnect() {
    try {
        await mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });
      } catch (error) {
        console.log(error);
      }
}

dotenv.config()
dbConnect();
// add post recieval functionallity
app.use(express.json());
app.use(cors())

// routes
app.use('/api/user', authRoute);
app.use('/api/data', dataRoute);

// serve
app.use(express.static(__dirname + '/client/build'));
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const express = require('express')
const app = express()
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

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

app.listen(9000, () => console.log('UP!'));

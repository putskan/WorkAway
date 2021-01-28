const express = require('express')
const app = express()
const authRoute = require('./routes/auth');
const dataRoute = require('./routes/data');
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
app.use('/api/data', dataRoute);

// for production
app.use(express.static(__dirname + '/client/build'));
// const path = require('path');
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

const PORT = app.get('port') //|| 9000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

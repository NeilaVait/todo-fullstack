const express = require('express');
const app = express();

const cors = require('cors');

const mongoose = require('mongoose');
const { mongoDbString } = require('./config/config');

const PORT = 3002;

app.use(cors());
// middle ware - to get req.body in json
app.use(express.json());

const todoApi = require('./api/todoApi');

app.use('/', todoApi);

// prisijungimas prie duomenu bazes
mongoose
  .connect(process.env.REACT_APP_MONGO_CONNECT || mongoDbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Conneced to Mongo ooooooooose');
    app.listen(PORT, console.log(`backEnd ondline on port ${PORT}`));
  })
  .catch((err) => console.error(err.message));

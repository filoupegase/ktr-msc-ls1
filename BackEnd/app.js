const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
require('dotenv').config({ path: process.cwd() + '/.env' });

// Authorise right access to request content - same as body-parser
app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

mongoose.connect(`mongodb+srv://${ process.env.MONGOOSE_ADMIN }:${ process.env.MONGOOSE_PASSWORD }@ktr-msc-ls1.mjjv5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => console.log('MongoDB is connected !'))
    .catch((error) => console.log(`MongoDB Error : ${ error }`));


app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
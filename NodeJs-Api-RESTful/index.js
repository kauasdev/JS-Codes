// Imports
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRouters = require('./routers/apiRouters.js');

const app = express();
//Config JSON
app.use(cors());
app.use(express.json());
app.use('/user', apiRouters);

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to my API RESTful'});
});

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const PORT = process.env.PORT || 3030;

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@apicluster.vi0ql.mongodb.net/api-bd?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Mongo connected');
        app.listen(PORT, () => console.log(`API running on port ${PORT}`));
    })
    .catch(err => console.log(`Erro: ${err}`));
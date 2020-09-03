const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

require('./config/config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;

    console.log(('Base de datos online'));
});

app.listen(process.env.PORT, () => {
    console.log('Escuchandoo puerto 3000');
});
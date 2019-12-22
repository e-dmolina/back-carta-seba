const express = require('express');
const cors = require('cors');
const app = express();
// const AuthToken = require('./middlewares/AuthToken');

//Settings
app.set('port',process.env.PORT || 4000);

//Middlewares
// app.use(AuthToken);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Routes
app.use('/api/login', require('./routes/auth'))
app.use('/api/productos', require('./routes/productos'));
app.use('/api/usuarios', require('./routes/usuarios'));

module.exports = app;
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const dashboardRoutes = require('./routes/dashboard');
const boardNameRoutes = require('./routes/boardName');
const { use } = require('./routes/auth');
const keys = require('./config/keys')
const app = express();

mongoose.connect(keys.mongoURI)
    .then(()=> console.log("MongoDB connected"))
    .catch((err)=> console.log(err))

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/dashboard', dashboardRoutes)
app.use('/api/boardName', boardNameRoutes)


module.exports = app
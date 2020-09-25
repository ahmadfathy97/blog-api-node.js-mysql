const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const db = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json())
let connection = db.connection;

app.use('/api/articles', require('./routes/article'));


app.listen(PORT, ()=>{console.log(`app is listening to port ${PORT}`);})

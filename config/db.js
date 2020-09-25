const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

let connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB
})
connection.connect((err)=>{
  if (err) console.log(err);
  console.log("Connected!");
})
module.exports = {connection}

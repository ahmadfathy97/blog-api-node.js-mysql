const express = require('express');
const router = express.Router();
const db = require('../config/db');
let connection = db.connection;
let articleControler = {}
articleControler.getAllArticles = (req, res)=>{
  let query = 'SELECT * FROM articles ORDER BY date DESC';
  connection.query(query, (err, rows, fields) => {
    if (err) console.log(err);
    res.json(rows)
  })
  // connection.end();
};

articleControler.NewArticle = (req, res)=>{
  const {title, author, body} = req.body;
  let query = `INSERT INTO articles (title, author, body) VALUES("${title}", "${author}", "${body}")`;
  connection.query(query, (err, rows, fields) => {
    if (err) console.log(err);
    res.json({msg: 'article created successfully'})
  })
  // connection.end();
};

articleControler.GetAnSpecificArticle = (req, res)=>{
  let query = `SELECT * FROM articles WHERE id = ${req.params.id} LIMIT 1`;
  connection.query(query, (err, rows, fields)=>{
    if(err) console.log(err);
    res.json(rows);
  })
  // connection.end();
};

articleControler.DeleteAnSpecificArticle = (req, res)=>{
  let query = `DELETE FROM articles WHERE id = ${req.params.id}`;
  connection.query(query, (err, rows, fields)=>{
    if(err) console.log(err);
    res.json({msg: 'article deleted successfully'});
  })
  // connection.end();
};

articleControler.UpdateAnSpecificArticle = (req, res)=>{
  const {title, author, body} = req.body;
  let query = `UPDATE articles SET
    title = "${title}",
    body = "${body}",
    author = "${author}"
    WHERE id = ${req.params.id}`;
  connection.query(query, (err, rows, fields)=>{
    if(err) console.log(err);
    res.json({msg: 'article updated successfully'});
  })
  // connection.end();
};

module.exports = articleControler;

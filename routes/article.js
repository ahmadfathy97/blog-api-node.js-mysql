const express = require('express');
const router = express.Router();

const articleControler = require('../controlers/article');
router.get('/', (req, res)=>{articleControler.getAllArticles(req, res)});

router.post('/', (req, res)=>{articleControler.NewArticle(req, res)});

router.get('/:id', (req, res)=>{articleControler.GetAnSpecificArticle(req, res)})

router.delete('/:id', (req, res)=>{articleControler.DeleteAnSpecificArticle(req, res)})

router.put('/:id', (req, res)=>{articleControler.UpdateAnSpecificArticle(req, res)})

module.exports = router;

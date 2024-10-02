const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

let articles = [
    {
        id: '1',
        title: 'First Article',
        content: 'Content of the first article.',
        author: 'Author One'
    }
];

// GET all articles
router.get('/', (req, res) => {
    res.json(articles);
});

// GET article by ID
router.get('/:articleId', (req, res) => {
    const article = articles.find(a => a.id === req.params.articleId);
    if (article) {
        res.json(article);
    } else {
        res.status(404).send('Article not found');
    }
});

// POST new article
router.post('/', (req, res) => {
    const newArticle = {
        id: uuidv4(),
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    articles.push(newArticle);
    res.status(201).json(newArticle);
});

module.exports = router;

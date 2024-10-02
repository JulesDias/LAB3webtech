const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

let comments = [
    {
        id: '1',
        content: 'First comment',
        articleId: '1'
    }
];

// GET comments for an article
router.get('/:articleId', (req, res) => {
    const articleComments = comments.filter(c => c.articleId === req.params.articleId);
    res.json(articleComments);
});

// POST new comment for an article
router.post('/:articleId', (req, res) => {
    const newComment = {
        id: uuidv4(),
        content: req.body.content,
        articleId: req.params.articleId
    };
    comments.push(newComment);
    res.status(201).json(newComment);
});

module.exports = router;

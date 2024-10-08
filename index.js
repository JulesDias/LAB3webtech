const express = require('express');
const app = express();

// Use middleware to parse JSON request bodies
app.use(express.json());

// Import routes
const articlesRouter = require('./routes/articles');
const commentsRouter = require('./routes/comments');

// Use routers
app.use('/articles', articlesRouter);
app.use('/articles/:articleId/comments', commentsRouter);

app.set('port', 8080);

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});

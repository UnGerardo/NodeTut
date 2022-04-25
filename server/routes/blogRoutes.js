
const express = require('express');
const blogController = require('../controllers/blogController');
// mini-app, needs to be attached to main app
const router = express.Router();


router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create);

router.get('/blogs/create', blogController.blog_create_view);

router.get('/blogs/:id', blogController.blog_get);

router.delete('/blogs/:id', blogController.blog_delete);


module.exports = router;
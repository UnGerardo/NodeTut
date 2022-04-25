
const Blog = require('../models/blog');

const blog_index = (req, res) => {
  Blog.find().sort({ createedAt: -1 })
      .then(blogs => {
        res.render('blogs/index', { blogs });
      })
      .catch(err => {
        console.log(err);
      });
};

const blog_create = (req, res) => {
  const newBlog = new Blog(req.body);

  newBlog.save()
          .then(() => {
            res.redirect('/');
          })
          .catch((err) => {
            console.log(err);
          });
};

const blog_create_view = (req, res) => {
  res.render('blogs/create');
};

const blog_get = (req, res) => {
  const id = req.params.id;
  const blog = Blog.findById(id)
                    .then(result => {
                      res.render('blogs/details', { blog: result });
                    })
                    .catch(err => {
                      console.log(err);
                      res.status(404).render('blogs/404');
                    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.deleteOne({ _id: id })
      .then(() => {
        res.json({ redirect: '/' });
      })
      .catch(err => {
        console.log(err);
      });
};

module.exports = {
  blog_index,
  blog_create,
  blog_create_view,
  blog_get,
  blog_delete,
}
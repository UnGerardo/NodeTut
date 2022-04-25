const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();

const app = express();
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nodetut.vjra1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(dbURI)
        .then(result => {
          console.log('connected to db');
          app.listen(3000, () => {
            console.log('Listening at 3000');
          });
        })
        .catch(err => {
          console.log(err);
        });

// register view engine | .set() allows us to change app settings
app.set('view engine', 'ejs');
app.set('views', 'ejsViews');

// middleware & static files
app.use(express.static('public'));
// parses info encoded in the url into a usable object; req.body; for accepting form data
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('New Request Made:');
  console.log(`host: ${req.hostname}`);
  console.log(`path: ${req.path}`);
  console.log(`method: ${req.method}`);
  next();
});

app.use('/', blogRoutes);

app.get('/about', (req, res) => {
  res.render('about');
});

// 404
// .use() always runs for every request, however it is only reached if no other route above is reached
app.use((req, res) => {
  res.status(404).render('404');
});





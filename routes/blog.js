const express = require('express');
const path = require('path');
const blogs = require('../data/blogs');

const router = express.Router();

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/index.html'));
    res.render('home');
});

router.get('/blog', (req, res) => {
    // blogs.forEach(i => {
    //     console.log(i.title);
    // });
    // res.sendFile(path.join(__dirname, '../views/blogHome.html'));
    res.render('blogHome', {
        blogs: blogs
    });
});

router.get('/blogpost/:slug', (req, res) => {
    // console.log(req.params.slug);
    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug;
    })
    // console.log(myBlog);
    // res.sendFile(path.join(__dirname, '../views/blogPage.html'));
    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    });
});


module.exports = router;
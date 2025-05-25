const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// var exphbs = require('express-handlebars');
const { engine } = require('express-handlebars'); 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

app.listen(PORT, () => {
    console.log(`Blog App is listening at http://localhost:${PORT}`);
}); 
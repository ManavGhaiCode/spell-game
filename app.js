const express = require("express");

const { getRandSpellings } = require("./utils/getRandSpellings");
const dictionary = require("./dictionary.json");
const DB = require("./DB.json");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', { words: getRandSpellings(dictionary) });
})

app.listen(3000, () => {
    console.log('Server servering at port 3000');
})
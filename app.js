const express = require("express");

const { getRandSpellings } = require("./utils/getRandSpellings");
const dictionary = require("./dictionary.json");
const DB = require("./DB.json");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.render('home', { words: getRandSpellings(dictionary) });
})

app.post('/save-score', (req, res) => {
    console.log(req.body);
    res.send('done');
})

app.listen(3000, () => {
    console.log('Server servering at port 3000');
})
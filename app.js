const express = require("express");
const fs = require('fs');
const path = require('path');

const { getRandSpellings } = require("./utils/getRandSpellings");
const dictionary = require("./dictionary.json");
const DB = require('./DB.json');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.render('home', { words: getRandSpellings(dictionary) });
})

app.post('/save-score', (req, res) => {
    DB[`${Date.now()}`] = { score: req.body.points, scorePersentage: req.body.pointsPercentage }
    console.log(DB);
 
    fs.writeFileSync(path.resolve(__dirname, './DB.json'), JSON.stringify(req.body));

    res.send('done');
})

app.listen(3000, () => {
    console.log('Server servering at port 3000');
})
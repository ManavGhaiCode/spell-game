const express = require("express");
const app = express();

app.use('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('Sever servering at port 3000');
})
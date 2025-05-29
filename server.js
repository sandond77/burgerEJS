const express = require('express');
const app = express();
const port = 3000;
const menu = require('./data/menu.json');

const burgers = menu['burgers'];
const fries = menu['fries'];
const drinks = menu['drinks'];
const secret = menu['secretMenu'];

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('./menu.ejs', { ...menu });
});

app.get('/menu', (req, res) => {
	res.json(menu);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

const express = require('express');
const app = express();
const port = 3000;
const menu = require('./data/menu.json');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('./menu.ejs', { ...menu });
});

app.get('/secret', (req, res) => {
	res.render('./secret.ejs', { ...menu });
});

app.get(/^\/(.*)/, (req, res) => {
	res.redirect('/');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const menu = require('./data/menu.json');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('menu', { ...menu });
});

app.get('/secret', (req, res) => {
	res.render('secret', { ...menu });
});

app.get(/^\/(.*)/, (req, res) => {
	res.redirect('/');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

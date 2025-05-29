const express = require('express');
const app = express();
const port = 3000;
const menu = require('./data/menu.json');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	res.render('./menu.ejs');
});

app.get('/menu', (req, res) => {
	res.json(menu);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

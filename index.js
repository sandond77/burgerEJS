const express = require('express');
const app = express();
const port = 3000;
const menu = require('./data/menu.json');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Welcome to Not In-n-Out Burger Menu');
});

app.get('/menu', (req, res) => {
	res.json(menu);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

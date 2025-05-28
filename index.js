const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Welcome to Not In-n-Out Burger Menu');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

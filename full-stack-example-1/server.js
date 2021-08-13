const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/names', (req, res) => {
	setTimeout(() => {
		res.send(['Shaun', 'Shawn', 'Sean']);
	}, 2000);
});

app.listen(8080, () => {
	console.log('Server is running on port 8080');
});
const express = require('express');
const cors = require('cors');
const chalk = require('chalk');

const app = express();

app.use(cors());
app.use(express.json());

const todos = [{
	text: 'Go to the grocery store',
	isCompleted: true,
}];

app.get('/todos', (req, res) => {
	res.json(todos);
});

app.post('/todos', (req, res) => {
	const newTodoData = req.body;

	todos.push({
		text: newTodoData.text,
		isCompleted: false,
	});

	res.json(todos);
});

app.listen(8080, () => {
	console.log(chalk.magenta('Server is listening on port ') + chalk.green('8080'));
});
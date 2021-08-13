// 1 1 2 3 5 8 13 21

function generateFibonacci(howMany) {
	let sequence = [1, 1];

	for (let _ of Array(howMany - 2).fill()) {
		let x = sequence[sequence.length - 1];
		let y = sequence[sequence.length - 2];

		let nextNumber = x + y;

		sequence.push(nextNumber);
	}

	return sequence;
}

module.exports = generateFibonacci;
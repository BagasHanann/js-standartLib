function myFunction(arr) {
	let result = [];

	function functionInput(input) {
		for (let i = 0; i < input.length; i++) {
			if (Array.isArray(input[i])) {
				functionInput(input[i]);
			} else {
				result.push(input[i]);
			}
		}
	}

	functionInput(arr);
	return result;
}

const nested = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
console.log(myFunction(nested));

// Queue
const queue = [];
console.log(queue.push('John'));
console.log(queue.push('Jane'));
console.log(queue);
console.log(queue.shift());

// Stack
const stack = [];
console.log(stack.push('John'));
console.log(stack.push('Jane'));
console.log(stack);
console.log(stack.pop());

// Search in array
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(arr.find((item) => item > 4));
console.log(arr.findIndex((item) => item > 4));
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.includes(7));

// filter array
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr2.filter((item) => item % 2 === 1));
console.log(arr2.filter((item) => item % 2 === 0));

function findGenap(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) result += arr[i];
	}
	return result;
}

function findGanjil(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 1) result += arr[i];
	}
	return result;
}

let angka1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findGenap(angka1));
console.log(findGanjil(angka1));

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 2, 'Feb');
// Inserts at index 1
console.log(months);

let angka = 4 % 3
console.log(angka)
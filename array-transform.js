const names = 'John Doe Oke'.split(' ');
console.log(names.map((nama) => nama.toUpperCase()));

function findGenap(arr) {
	return arr.reduce((result, value) => {
		if (value % 2 === 0) result.push(value);
		return result;
	}, []);
}

function findGanjil(arr) {
	return arr.reduce((result, value) => {
		if (value % 2 === 1) result.push(value);
		return result;
	}, []);
}

console.log(findGenap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findGanjil([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

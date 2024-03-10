const person = {
	name: 'John',
	age: 30,
};

const job = {
	title: 'Software Engineer',
};

// Object.freeze(person);
// Object.seal(person);
console.log(Object.values(person));
console.log(Object.getOwnPropertyNames(person));

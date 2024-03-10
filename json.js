const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
	hobbies: ['reading', 'traveling', 'cooking'],
};

person.address.country = 'Canada';
person.hobbies.push('music');
const str = JSON.stringify(person);
const parse = JSON.parse(str);

console.log(str);
console.log(parse);

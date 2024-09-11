const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const { name, age } = person;

console.log(name); // John
console.log(age); // 30

const fruits = ['apple', 'banana', 'cherry', 'date'];

const [, second, , fourth] = fruits;

console.log(second); // banana
console.log(fourth); // date

const { address: { city, country } } = person;

console.log(city); // New York
console.log(country); // USA
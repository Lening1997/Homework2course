//Задание 1

/*const numbs = [1, 5, 4, 10, 0, 3];

let i = 0;

while (i < numbs.length) {
	if (i === 10) {
		break
	}
console.log(numbs[i]);
i++
}*/


//Задание 2

/*let numbs = [1, 5, 4, 10, 0, 3];

console.log(numbs.indexOf(4)+1);*/

//Задание 3

/*let numbs = [1, 3, 5, 10, 20];

numbs = numbs.join(" ");

console.log (numbs);*/

//Задание 4

/*let chair = [];
for (let i = 0; i < 3; i++) {
	chair[i] = [];
	for (let a = 0; a < 3; a++) {
		chair[i][a] = 1;
	};
};
console.log(chair);*/

//Задание 5

/*let numbers = [1, 1, 1];

numbers.push(2,2,2);

console.log(numbers);*/

//Задание 6

/*const numbers = [9, 8, 7, 'a', 6, 5];

numbers.sort();

console.log(numbers.pop());

console.log(numbers);*/

//Задание 7

/*const numbers = [9, 8, 7, 6, 5];

let answer = Number(prompt(`Введите число`));
if (numbers.includes(answer)) {
	alert(`Угадал`);
} else {
	alert(`Не угадал`);
};*/

//Задание 8

/*let letter = 'abcdef';

letter = letter.split('');
console.log(letter);

letter = letter.reverse();
console.log(letter);

letter = letter.join('');
console.log(letter);*/


//Задание 9

/*let numbers = [
	[1, 2, 3,],
	[4, 5, 6]
];
let resultNumbers = numbers[0].concat(numbers[1]);
console.log(resultNumbers);*/

//Задание 10

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = (a, b) => {
	let result = a + b;
	return result;
};

const lenghtNumbers = numbers.length;
for (let i = 0; i < lenghtNumbers - 1; i++)
{
	console.log(sum(...numbers));
	numbers.shift();
};*/

//Задание 11

/*const numbers = [5, 10 , 20];

let result = numbers.map(item => (item**2));

console.log(result);*/

//Задание 12

/*const words = ['слово', 'пароль', 'аккредитация'];
const getLengthWords = function(words) {
	let lengthWords = words.map(el => el.length);
	return lengthWords;
};

console.log (getLengthWords(words));*/

//Задание 13

/*function filterPositive(array) {
	let negativeArr =[];
	for (const value of array) {
		if (value < 0)
	negativeArr.push(value);
	};
	return negativeArr;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));*/
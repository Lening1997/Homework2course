//Задание 1
/*let str = 'Строка';
str = str.toUpperCase();
console.log(str);*/

//Задание 2
/*const names = ['Кошка Царапа', 'Собака Нора', 'Петух Кузя', 'Собака Ари', 'Кошка Бусинка', 'Петух Кукарику', 'Кошка Барселона'];
const cat = 'Кошка';

names.forEach((name) => {
    if (name.toLowerCase().startsWith(cat.toLowerCase())) {
		console.log(name);
	}
});*/

//Задание 3
/*const number = 32.58884;

console.log(Math.floor(number));

console.log(Math.ceil(number));

console.log(Math.round(number));*/

//Задание 4
/*const numbers = [52, 53, 49, 77, 21, 32];

Math.min(numbers);
console.log(numbers);

Math.max(numbers);
console.log(numbers);*/

//Задание 5
/*function numbers(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
    }
    
    console.log(numbers(1, 10));*/

//Задание 6
/*const num = +prompt('Введите число');
let arr = [];
for (let i = 0; i < Math.floor(num / 2); i++) {
    arr.push(Math.round(Math.random() * num));
};
console.log(arr);*/

//Задание 7
/*const numMin = +prompt('Введите число');
const numMax = +prompt('Введите число');

console.log(Math.round(Math.random() * (numMax - numMin)) + numMin);*/

//Задание 8
/*let currentDate = new Date();
console.log(currentDate);*/

//Задание 9
/*let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate.toDateString());*/

//Задание 10

/*const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const ruDate = (currentDate) => {
    let date = currentDate.getDate();
    if (date < 10) (date = '0' + date);

    let months = [currentDate.getMonth() - 1];

    let day = days[currentDate.getDay()];

    let hours = currentDate.getHours();
    if (hours < 10) {hours = '0' + hours};

    let mins = currentDate.getMinutes();
    if (mins < 10) {mins = '0' + mins};

    let secs = cerrentDate.getSeconds();
    if (secs < 10) {secs = '0' + secs};

    console.log (Дата : ${date} ${month} ${currentDate.getFullYear()} - это ${day}.);
    console.log(Время : ${hours} : ${mins} : ${secs});
 };

 ruDate(cerrentDate = newDate());*/



//Задание 1
/*function num(a , b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

console.log(num(8,4));
console.log(num(6,6));*/

//Задание 2 
/*function num(a) {
    if (a % 2 == 0) {
        return(`Число четное`);
    } else {
        return(`Число нечетное`);
    }
}
console.log(num(6));*/

//Задание 3
/*function square(a) {
}
let a = 5;
let result = a * a;

console.log (`${result}`);*/

//Задание 4 
/*let age = prompt("Сколько Вам лет?");

if (age <= 12) {
    function printMessage () {
        console.log("Привет, друг");
    }
} else {
    function printMessage () {
        console.log("Добро пожаловать!");
    }
}
if (age < 0) {

    function printMessage () {
        console.log("Вы ввели неправильное значение!");
}
}

printMessage();*/

//Задание 5
/*function check(a , b) {
    if (isNaN(a) || isNaN(b)) {
        return(`Одно или оба значения не являются числом`);
    } else {
        return a * b;
    }
}
console.log(check(8 , 5));
console.log(check(8 , `k`));*/

//Задание 6
/*let num = prompt("Ведите число");

if (isNaN(num)) {
    let cube = num * num * num;
    return(`num в кубе равняется ${cube}`);
} else {
    return(`Переданный параметр не является числом`);
}*/

//Задание 7
/*function getRectangleArea() {
    return this.radius * this.radius * 3.14;
  }
  function getRectanglePerimeter() {
    return this.radius * 2 * 3.14;
  }

const circle1 = {
    radius: 10,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}
const circle2 = {
    radius: 25,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());*/

//Задание 8
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    /*case '1' : 
    console.log('зима');
    break;
    case '2' :
    console.log('зима');
    break;
    case '3' : 
    console.log('весна');
    break;
    case '4' : 
    console.log('весна');
    break;
    case '5' : 
    console.log('весна');
    break;
    case '6' : 
    console.log('лето');
    break;
    case '7' : 
    console.log('лето');
    break;
    case '8' : 
    console.log('лето');
    break;
    case '9' : 
    console.log('осень');
    break;
    case '10' : 
    console.log('осень');
    break;
    case '11' : 
    console.log('осень');
    break;
    case '12' : 
    console.log('зима');
    break;
    default: console.log('ввел что-то не то');
    break;
}*/

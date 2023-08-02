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
        return `Число четное`;
    } else {
        return `Число нечетное`;
    }
}
console.log(num(6));*/

//Задание 3.1
/*function square(a) {
    a**2;
console.log (square(5));
}
square(a);*/

//Задание 3.2
/*function square(a) {
    return a**2;
}

console.log (square(5));*/

//Задание 4 
/*function printHello () {

    const age = prompt("Сколько вам лет?"); 

    if (age <= 12) {
        alert (`Привет, друг`);
    } else {
        alert (`Добро пожаловать!`);
    }
    if (age < 0) {
        alert (`Вы ввели неправильное значение!`);
    }
}

printHello();*/

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
/*function number () {

    const num = prompt("Ведите число");
 
    if (isNaN(num)) {
        return(`Переданный параметр не является числом`);
    } else {
        return(`num в кубе равняется ${num**3}`);
    }
}
number ();/*
/*let num = prompt("Ведите число");

if (isNaN(num)) {
    return(`Переданный параметр не является числом`);
} else {
    let cube = num * num * num;
    return(`num в кубе равняется ${cube}`);*/

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
/*function season() {
    let monthNumber = prompt(`Введите номер месяца`);

    if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
        console.log (`Зима`);
        }
    else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
        console.log (`Весна`);
        }
    else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {
        console.log (`Лето`);
        }
    else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
        console.log (`Осень`);
        }
    else {
        console.log (`Вы ввели неверное значение`);
        }
    }*/
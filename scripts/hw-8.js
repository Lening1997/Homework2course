// Задача 1
/*const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people.sort((a,b) => a.age > b.age ? 1 : -1);
 console.log(people.sort());*/

 // Задача 2

 /*function isPositive(el) {
    if (el > 0) {
        return el;
    }
    };

    function isMale(el) {
    if (el.gender === 'male'){
        return el;
    }
    };

    function filter(arr, reluFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (reluFunction(arr[i]))
        output.push ((reluFunction(arr[i])));
    }
    return output;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]*/

    //Задача 3

    /*let time = setInterval (() => {console.log(new Date());}, 3000);
    setTimeout(() => { clearInterval(time); console.log('30 секунд прошло');}, 1000*30 );*/

    //Задача 4 

    /*function delayForSecond(callback) {
        setTimeout(callback, 1000);
   }
   
   delayForSecond(function () {
      console.log('Привет, Глеб!');
   })*/

   // Задача 5

   // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
/*function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond((cb) => sayHi('Глеб'));*/

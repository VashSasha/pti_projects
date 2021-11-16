// Создать функции lastIndexOf, shift, getMatrixSum из файла js/functions_part_1 используя цикл for

var lastIndexOf = function(arr, value) {
    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }

    return -1;
};



var shift = function(arr) {
    var result = [];
    for (let i = 1; i < arr.length; i++) {
        result[result.length] = arr[i];
    }

    return result;
};

var getMatrixSum = function(arr) {
    var sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }

    return sum;
};

// Перепиши вызовы функций ниже используя call или apply:
// [1,3,5,7].includes(3);
// [1,3,5,7].indexOf(5);
// [1,3,5,7].join('/');




// Создать функцию sumOfAllArguments которая принимает произвольное количество чисел и возвращает их сумму.
// Пример работы:
// sumOfAllArguments(2, 2, 3)
// => 7
// sumOfAllArguments(2, 2, 3, 3, 10);
// => 20

var sumOfAllArguments = function() {
    var sum = 0;
    console.log(arguments)
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
};

// Познакомиться с работой следующих встроенных свойств, функций и методов
// Math: abs, ceil, floor, max, min, pow, random, round, sqrt, trunc
// JSON: stringify, parse

// Привести примеры использования ниже

function absFunc(a, b) {
    return Math.abs(a - b);
}

console.log(absFunc(2, 8));

console.log(Math.ceil(1.2));

console.log(Math.floor(1.2));

console.log(Math.max(1, 33, 100, 22))

console.log(Math.min(1, 33, 100, 22))

console.log(Math.pow(3, 2));

console.log(Math.random() * 4);

console.log(Math.round(2.5));

console.log(Math.sqrt(9));

console.log(Math.trunc(22.123))



var obj = {
    x: 'sasah',
    age: 25
}

var o = '{"name": "sasha", "age": 23 }'

JSON.stringify(obj);

o2 = JSON.parse(o);
console.log(o2)
// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать объект со свойствами: x, getX, changeX. Где значение свойства "x" это число,
// а getX и changeX это методы которые манипулируют значением этого свойства "x".
// getX возвращает значение свойства "x", а changeX принимает в качестве аргумента число
// и результатом работы этого метода является присваивание этого числа свойству "x" объекта.

var obj = {
    x: 2,
    getX: function() {
        return this.x;
    },
    changeX: function(num) {
        return this.x = num
    }
}


// Создать функцию-конструктор Circle которая принимает 3 параметра:
// координаты центра окружности (x, y) и ее радиус (radius).
// Возвращает объект с собственными тремя свойствами (x, y, radius) и унаследованными тремя методами.
// 1. Метод getDiameter возвращает диаметр откружности. Формула расчета диаметра: diameter = 2 * radius
// 2. Метод getPerimeter возвращает длину откружности. Формула расчета длины окружности: perimeter = 3.14 * diameter
// 3. Метод getSquare возвращает площадь откружности. Формула расчета площади окружности: square = 3.14 * (radius в квадрате)
// Пример работы:
// var circle = new Circle(5, 5, 5);
// circle.getDiameter();
// => 10
// circle.getPerimeter();
// => 31.41592653589793
// circle.getSquare();
// => 78.53981633974483
//
var Circle = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

Circle.prototype.getDiameter = function () {
    return this.radius * 2;
};

Circle.prototype.getPerimeter = function () {
    return 3.14 * this.radius * 2;
};

Circle.prototype.getSquare = function () {
    return 3.14 * this.radius * this.radius
};

var newCircle = new Circle(5, 5, 5);

newCircle.getDiameter();
newCircle.getPerimeter();
newCircle.getSquare();

// Создать функции size, last, getPositiveNumbers, without, min, sum, как методы массивов
// Примеры работы:
// [7, 2, 8].size();
// => 3
// [5, 4, 3, 2, 1].last();
// => 1
// [10, -5, 100, -2, 1000].getPositiveNumbers();
// => [10, 100, 1000]
// [3, 6, 7, 'rere'].without(6);
// => [3, 7, 'rere']
// [10, 5, 100, 2, 1000].min();
// => 2
// [2, 2, 3].sum();
// => 7

Array.prototype.size = function() {
    return this.length;
};

Array.prototype.last = function() {
    return this[this.length - 1];
};

Array.prototype.getPositiveNumbers = function() {
    var result = [];

    for (var i = 0; i < this.length; i++) {
        if (this[i] >= 0) {
            result[result.length] = this[i];
        }
    }

    return result;
};

Array.prototype.without = function(element) {
    var result = [];

    for (var i = 0; i < this.length; i++) {
        if (this[i] !== element) {
            result[result.length] = this[i];
        }
    }

    return result;
};

Array.prototype.min = function() {
    var result = this[0];

    for (var i = 0; i < this.length; i++) {
        result = result < this[i] ? result : this[i];
    }

    return result;
};

Array.prototype.sum = function() {
    var sum = 0;

    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }

    return sum;
};


// Создать функции keys, values, pairs, isEmpty, extend, как методы объектов


var user = {
    name: 'Sasha',
    age: 25
}

Object.prototype.keys = function() {
    var keys = [];
    var key;

    for (key in this) {
        keys[keys.length] = key;
    }

    return keys;
}

Object.prototype.values = function () {
    var valuesList = [];
    var value;

    for (value in this) {
        valuesList[valuesList.length] = this[value];
    }

    return valuesList;
};

Object.prototype.pairs = function() {
    var result = [];
    var key;

    for (key in this) {
        result[result.length] = [key, this[key]];
    }


    return result;

};

Object.prototype.extend = function(source) {
    for (var key in source) {
        this[key] = source[key];
    }

    return this;
};

Object.prototype.isEmpty = function() {
    for (var key in this ) {
        return false
    }
    return true;
};


// Создать функцию charAt которая принимает строку и индекс и возвращает указанный символ из строки.
// Пример работы:
// charAt('March', 0);
// => 'M'

var charAt = function(string, index) {
    return string[index];
};

// Создать функцию trim которая удаляет пробельные символы с начала и конца строки.
// Пример работы:
// trim('   Hello world!   ');
// => 'Hello world!'

var trim = function(str) {
    var result = '';
    var doneTrimming = false;

    for(var i = 0; i < str.length; i++) {
        if(str[i] !== ' '){
            doneTrimming = true
        }
        if(doneTrimming){
            result += str[i]
        }
    }
    return result
}

// Создать функцию join которая принимает массив и возвращает строку состоящую из его элементов разделенных запятой (по-умолчанию) или любым другим разделителем (строкой) указанным во втором аргументе вызываемой функции.
// Пример работы:
// join([1, 'lol', 5, 'dro']);
// => "1,lol,5,dro"
// join([1, 'lol', 5, 'dro'], '+');
// => "1+lol+5+dro"

var join = function(array, separator = ',') {
    var result = '';

    for (let i = 0; i < array.length; i++) {
        result += array[i] + separator;
    }

    return result
};

// Познакомиться с возможностями базовых (встроенных) классов
// Number
//     Number.prototype: toFixed
// String
//     String.prototype: charAt, concat, includes, indexOf, lastIndexOf, repeat, replace, slice, split,
//         substr, substring, toLowerCase, toUpperCase, trim
// Array
//     Array.prototype: concat, forEach, includes, indexOf, join, lastIndexOf, pop, push, reverse,
//         shift, slice, splice, unshift, length, sort, map, filter, every, some, reduce, reduceRight
// Object: keys, values, create, assign, entries
//     Object.prototype: hasOwnProperty
// Function
//     Function.prototype: apply, call, bind

// Привести примеры использования ниже

//Number:
var num = 12345.12345;
num.toFixed(1);

//String:

var testingString1 = 'Vash';
var testingString2 = 'Sasha';
var testingArray = [1, 2, 3, 4, 5];
var testingSentence = 'Hello, my, name, is';

testingString1.charAt(3);
testingString1.concat(testingString2);
testingString1.includes('sh');
testingString1.indexOf('a');

testingArray.join('-');
testingString2.lastIndexOf('a');
testingString1.repeat(4);
testingString1.slice(0, 2);
testingSentence.split(',');
testingSentence.substr(0, 7);
testingSentence.substring(0, 2);
testingSentence.toLowerCase();
testingSentence.toUpperCase();
testingSentence.trim();

//Array

var arr1 = ['a', 'b', 'c', 'a'];
var arr2 = [43, 2, 23];

var arr3 = arr1.concat(arr2);
arr2.forEach(function(element) {return element + 2});
arr1.includes('a');
arr1.indexOf('a');
arr1.join('+');
arr1.lastIndexOf('a');
arr1.pop();
arr1.push('newItem');
arr1.reverse();
arr1.shift();
arr1.slice(2);
arr1.splice(1, 0, 'newItem');
arr1.length;
arr2.sort();

arr2.map(function (element) {
    return element * 2;
});
arr2.filter(function (element) {
    return element > 10;
});

arr2.every(function (element) {
    return element >= 5;
});

arr2.some(function (element) {
    return element >= 2;
});

arr2.some(function (element) {
    return element % 2 === 0;
});

arr1.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
})

arr2.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

arr2.reduceRight(function (acumulator, currentValue, index, array) {
    return acumulator + currentValue;
});

//Object
// Object: keys, values, create, assign, entries
//     Object.prototype: hasOwnProperty

var object1 = {
    a: 'some text',
    b: true,
    c: 2
};

var object2 = {
    c: 'new text',
    d: false,
    e: 22
};
Object.keys(object1);
Object.values((object1));
var newObject = Object.create(object1);
var reternedObject = Object.assign(object1, object2);
object1.hasOwnProperty('a');
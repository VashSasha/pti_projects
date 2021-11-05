// ВНИМАНИЕ! Соблюдайте форматирование кода (отступы, переносы)

// 1. Создать 10 литералов представлюящих числа (5 целых и 5 дробных)

1;
2;
3;
4;
5;
1.1;
1.2;
1.3;
1.4;
1.5;


// 2. Создать 10 строковых литералов

var name = 'Sasha';
var lastName = 'Vash';
var city = 'Kyiv';
var country = 'Ukraine';
var color = 'red';
var state = 'open';
var job = 'unemploed';
var titel = 'Some text';
var message = 'Hello, world';
var address = '25 Bokova St.';


// 3. Создать 10 объектов представляющих объекты реального мира. В каждом объекте должно быть не меньше 4 свойств.

var students = {
    name: 'Sasha',
    age: 25
};
var client = {
    name: 'Natalya',
    orderNumber: 10021
};
var car = {
    model: 'Toyota',
    year: 2020
};
var toDoList = {
    title: 'Buy milk',
    status: true
};
var city = {city:'Kyiv', population: '44M', country: 'Ukraine', capital: 'Kyiv'};
var date = {year: 2020, month: 'july', date: 14, weekday: 'Friday'};
var computer = {brand: 'Apple', year: 2020, display: '13in', memory: 512 };
var weather = {location: 'Odessa', temp: 22, wind: 22, rain: false, maxTemp: 25};
var company = {name: 'Playtech', location: 'Kyiv', ceo: 'Vash Sasha', established: 1996};
var listItem = {title: 'buy milk', status: true, date: '10.04.2021', comment: 'get it ASAP'};

// 4. Создать 10 массивов представляющих массивы некоторых значений из реальной жизни. В каждом массиве должно быть не меньше 4 элементов.

var colors = ['red', 'orange', 'blue', 'white'];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var month = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
var brands = ['adidas', 'Nike', 'Puma', 'DC', 'Calvin Klein'];
var names = ['Sasha', 'Natasha', 'Katya', 'Dima', 'Misha'];
var fruits = ['apple', 'orange', 'lemon', 'grapes', 'raspberry'];
var cars = ['Volvo', 'BMW', 'Mercedes', 'Toyota', 'Audi'];
var years = [1992, 1993, 1994, 1995, 1996];
var phones = ['iphone', 'samsung', 'LG', 'HTC', 'OPPO'];
var animals = ['dog', 'cat', 'cow', 'horse', 'fish'];

// 5. Объявить 5 переменных с произвольным именем.

var name, age = 8;
var city;
var country;
var date;

// 6. Объявить еще 5 переменных и в момент объявления присвоить им значения произвольных типов данных.

var state = false;
var count = 2;
var status = 'single';
var seat = '27A';
var flightNumber = 'AB2243';


// 7. Создать массив из элементов, значения которых представлены всеми изученными типами данных в JavaScript.

var arr = [1, 'one', true, [1, 2, 3], undefined, null, {name: 'Sasha', age: 25}, function(a, b) {return a + b;}];


// 8. Создать объект из четырех свойств. Три свойства должны иметь значения простых типов данных. Два остальных свойства должны иметь значения составного (объектного) типа данных.
// TODO



// 9. Написать выражения использующие все изученные арифметические операторы

var x = 10 + 10;
var y = 20 - 10;
var c = 5 * 5;
var n = 20 / 2;
var z = 5 % 2;

var q = 3;
++q;
var t = 4;
t--;


// 10. Написать выражения использующие все изученные операторы сравнения

5 === 5;
4 !== 5;
6 < 4;
4 <= 5;
4 > 2;
2 >= 2;

// 11. Написать выражения использующие все изученные логические операторы

true || true;
true && true;
!true;


// 12. Написать выражение использующее тернарный условный оператор

x < 4 ? 5 : 6;

// 13. Написать выражения использующие все изученные операторы присваивания

var x, y = 4;
x = y;
x += y;
x -= y;
x *= y;
x /= y;
x %= y;

// 14. Создать массив из 10 элементов (чисел) и написать выражения возвращающие значение первого, третьего, пятого и восьмого элемента

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr[0];
arr[2];
arr[4];
arr[7];


// 15. Создать массив и написать 3 выражения меняющие значения его элементов

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// TODO

// 16. Создать объект из 5 свойств и написать 3 выражения возвращающие значения произвольных свойств

var obj = {
    name: 'Sasha',
    age: '25',
    city: 'Kyiv',
    country: 'Ukraine',
    status: 'single'
};

obj.name;
obj.age;
obj.country;

// 17. Создать объект и написать 3 выражения меняющие значения его свойств

obj.name = 'Natasha';
obj.age = 23;
obj.city = "Radomyshl";

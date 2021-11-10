// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать функцию keys которая возвращает массив имен всех свойств(ключей) принимаемого объекта.
// Пример работы:
// keys({one: 1, two: 2, three: 3});
// => ["one", "two", "three"]
var keys = function (obj) {
    var list = [];

    for (var prop in obj) {
        list[list.length] = prop;
    }

    return list;
};

// Создать функцию values которая возвращает массив значений всех свойств принимаемого объекта.
// Пример работы:
// values({one: 1, two: 2, three: 3});
// => [1, 2, 3]

var values = function (obj) {
    var list = [];

    for (var prop in obj) {
        list[list.length] = obj[prop];
    }

    return list;
};

// Создать функцию pairs которая возвращает список пар [свойство, значение] входящего объекта.
// Пример работы:
// pairs({one: 1, two: 2, three: 3});
// => [["one", 1], ["two", 2], ["three", 3]]

var pairs = function (obj) {
    var list = [];

    for (var i in obj) {
        list[list.length] = [i, obj[i]]
    }

    return list;
};


// Создать функцию invert которая возвращает копию входящего объекта где свойства - значения, а значения - свойства.
// Чтобы это заработало, нужно, чтобы все значения свойств объекта могли быть уникально преобразованы в строки.
// Пример работы:
// invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
// => {Moses: "Moe", Louis: "Larry", Jerome: "Curly"}

var invert = function (obj) {
    var result = {};

    for (var prop in obj) {
        result[obj[prop]] = prop;
    }

    return result
};

// Создать функцию omit которая возвращает копию объекта без указанного свойства.
// Пример работы:
// omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
// => {name: 'moe', age: 50}

var omit = function (obj, value) {
    var result = {};
    for (var key in obj) {
        if(key !== value) {
            result[key] = obj[key];
        }
    }
    return result;
};


// Создать функцию has которая проверяет, содержит ли объект указанный ключ (свойство). Если да, то возвращает true иначе false.
// Пример работы:
// has({a: 1, b: 2, c: 3}, 'b');
// => true

var has = function (obj, value) {
    return value in obj;
};


// Создать функцию isMatch которая проверяет, содержатся ли ключ-значене в объекте. Если да, то возвращает true иначе false.
// Пример работы:
// isMatch({name: 'moe', age: 32}, {age: 32});
// => true

var isMatch = function (obj, value) {
    var result = false;
    for (var key in obj){
        // console.log(value[key])
        if(obj[key] === value[key]) {
        }
    }
    // console.log(result)
};

isMatch({name: 'moe', age: 32}, {sex: 32});

// Создать функцию isEmpty которая вернёт true если коллекция (объект или массив) не содержит ни одного значения, в противном случае вернет false.
// Пример работы:
// isEmpty([]);
// => true
// isEmpty([1, 2, 3]);
// => false
// isEmpty({});
// => true
// isEmpty({x: 4});
// => false

var isEmpty = function (obj) {
    var result = [];
    for (i in obj) {
        result[i] = obj[i];
    }
    if(result.length === 0) return true
    return Object.keys(obj).length === 0

};


// Создать функцию extend с двумя входными параметрами (объект destination и объект source). Скопирует все свойства из объекта source в объект destination. Если объект source имеет одноименные свойства с объектом destination, то значения destination будут затёрты значениями из source.
// Пример работы:
// extend({name: 'moe'}, {age: 50});
// => {name: 'moe', age: 50}

var extend = function (obj1, obj2) {
    var result = {};

    for (var i in obj1) {
        result[i] = obj1[i];
    }
    for (var j in obj2) {
        result[j] = obj2[j];
    }
    return result
};
// console.log(extend({name: 'moe'}, {age: 50}))


// Создать функцию defaults с двумя входными параметрами (объект object и объект default). Функция defaults проинициализирует неопределённые (undefined) свойства объета значениями одноимённых свойств из default. Если же какие-то свойства объекта уже определены, то они не будут изменены.
// Пример работы:
// defaults({flavor: "chocolate"}, {flavor: "vanilla", sprinkles: "lots"});
// => {flavor: "chocolate", sprinkles: "lots"}
var defaults = function (obj1, obj2) {
    var result = {};

    for (var i in obj1){
        result[i] = obj1[i];
    }

    for( var j in obj2){
        result[j] =  obj2[j];
    }
    // console.log(result)
    return result;
};

defaults({flavor: "chocolate"}, {flavor: "vanilla", sprinkles: "lots"})

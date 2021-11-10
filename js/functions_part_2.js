// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать функцию keys которая возвращает массив имен всех свойств(ключей) принимаемого объекта.
// Пример работы:
// keys({one: 1, two: 2, three: 3});
// => ["one", "two", "three"]
var keys = function(obj) {
    var result = [];

    for (var prop in obj) {
        result[result.length] = prop;
    }

    return result;
};

// Создать функцию values которая возвращает массив значений всех свойств принимаемого объекта.
// Пример работы:
// values({one: 1, two: 2, three: 3});
// => [1, 2, 3]

var values = function(obj) {
    var result = [];

    for (var prop in obj) {
        result[result.length] = obj[prop];
    }

    return result;
};

// Создать функцию pairs которая возвращает список пар [свойство, значение] входящего объекта.
// Пример работы:
// pairs({one: 1, two: 2, three: 3});
// => [["one", 1], ["two", 2], ["three", 3]]

var pairs = function(obj) {
    var result = [];

    for (var prop in obj) {
        result[result.length] = [prop, obj[prop]];
    }

    return result;
};


// Создать функцию invert которая возвращает копию входящего объекта где свойства - значения, а значения - свойства.
// Чтобы это заработало, нужно, чтобы все значения свойств объекта могли быть уникально преобразованы в строки.
// Пример работы:
// invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
// => {Moses: "Moe", Louis: "Larry", Jerome: "Curly"}

var invert = function(obj) {
    var result = {};

    for (var prop in obj) {
        result[obj[prop]] = prop;
    }

    return result;
};

// Создать функцию omit которая возвращает копию объекта без указанного свойства.
// Пример работы:
// omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
// => {name: 'moe', age: 50}

var omit = function(obj, prop) {
    var result = {};
    for (var key in obj) {
        if(key !== prop) {
            result[key] = obj[key];
        }
    }
    return result;
};


// Создать функцию has которая проверяет, содержит ли объект указанный ключ (свойство). Если да, то возвращает true иначе false.
// Пример работы:
// has({a: 1, b: 2, c: 3}, 'b');
// => true

var has = function (obj, key) {
    // return key in obj;

    for (var prop in obj) {
        if (prop === key) {
            return true;
        }
    }

    return false;
};

// Создать функцию isMatch которая проверяет, содержатся ли ключ-значене в объекте. Если да, то возвращает true иначе false.
// Пример работы:
// isMatch({name: 'moe', age: 32}, {age: 32});
// => true

var isMatch = function(obj, obj2) {
    for (var key in obj2) {
        return obj2[key] === obj[key];
    }
};

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

var isEmpty = function(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
};


// Создать функцию extend с двумя входными параметрами (объект destination и объект source). Скопирует все свойства из объекта source в объект destination. Если объект source имеет одноименные свойства с объектом destination, то значения destination будут затёрты значениями из source.
// Пример работы:
// extend({name: 'moe'}, {age: 50});
// => {name: 'moe', age: 50}

var extend = function(destination, source) {
    for (var key in source) {
        destination[key] = source[key];
    }

    return destination;
};


// Создать функцию defaults с двумя входными параметрами (объект object и объект default). Функция defaults проинициализирует неопределённые (undefined) свойства объета значениями одноимённых свойств из default. Если же какие-то свойства объекта уже определены, то они не будут изменены.
// Пример работы:
// defaults({flavor: "chocolate"}, {flavor: "vanilla", sprinkles: "lots"});
// => {flavor: "chocolate", sprinkles: "lots"}
var defaults = function (obj, def) {
    for (var key in def) {
        if (obj[key] === undefined) {
            obj[key] = def[key];
        }
    }

    return obj;
};

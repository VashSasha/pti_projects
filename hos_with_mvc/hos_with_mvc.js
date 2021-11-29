var whoresCollection = {
    models: [],

    init: function() {
        // Забрать данные из localStorage и сохранить их в this.models
    },

    add: function(whore) {
        // Добавить модель в коллекцию
        // Cинхронизировать коллекцию с localStorage
    },

    getWhoreById: function(whoreId) {
        // Вернуть модель из коллекции по ее ID
    },

    removeWhoreById: function(whoreId) {
        // Удалить модель из коллекции
        // Cинхронизировать коллекцию с localStorage
    },

    updateWhore: function(updatedWhore) {
        // Найти модель в коллекции и обновить ее
        // Cинхронизировать коллекцию с localStorage
    },

    updateStorage: function() {
        // Cинхронизировать коллекцию с localStorage
    }
};

whoresCollection.init();

var listView = {
    tmplFn: null,

    render: function() {
        // Отрисовать элементы компонента
        // Подписаться на события
    },

    subscribe: function() {
        // Подписаться на события:
        // 1. Клик по шлюхе
        // 2. Клик по кнопке Добавить
    }
};

listView.render();

var addFormView = {
    tmplFn: null,

    render: function() {
        // Отрисовать элементы компонента
        // Подписаться на события
    },

    subscribe: function() {
        // Подписаться на события:
        // 1. Клик по кнопке Сохранить
    },

    getFormData: function() {
        // Собрать данные из формы и вернуть их в виде объекта
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    remove: function() {
        // Удалить компонент с экрана
    }
};

var editFormView = {
    tmplFn: null,

    render: function(whore) {
        // Отрисовать элементы компонента
        // Подписаться на события
    },

    subscribe: function() {
        // Подписаться на события:
        // 1. Клик по кнопке Обновить
        // 2. Клик по кнопке Удалить
    },

    getFormData: function() {
        // Собрать данные из формы и вернуть их в виде объекта
    },

    remove: function() {
        // Удалить компонент с экрана
    }
};
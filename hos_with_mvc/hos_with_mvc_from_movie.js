var whores = {
    models: [],

    add: function(whore) {
        // Добавить модель в коллекцию
        // Cинхронизировать коллекцию с localStorage
    },

    update: function(updatedWhore) {
        // Найти модель в коллекции и обновить ее
        // Cинхронизировать коллекцию с localStorage
    },

    remove: function(whoreId) {
        // Удалить модель из коллекции по ее ID
        // Cинхронизировать коллекцию с localStorage
    },

    get: function(whoreId) {
        // Вернуть модель из коллекции по ее ID
    },

    setModelsToStorage: function() {
        // Cинхронизировать модели с localStorage
    },

    getModelsFromStorage: function() {
        // Забрать модели с localStorage
    },

    init: function() {
        // Забрать данные из localStorage и сохранить их в this.models
    }
};

whores.init();

var listView = {
    // шаблон списка
    tmplFn: null,

    // коллекция моделей
    collection: whores,

    subscribe: function() {
        // Подписаться на события:
        // 1. Клик по шлюхе
        // 2. Клик по кнопке Добавить
    },

    render: function() {
        // Отрисовать элементы компонента
    },

    init: function() {
        // Отрисовать элементы компонента
        // Подписаться на события
    }
};

listView.init();

var formView = {
    // поля формы
    $fields: null,

    // коллекция моделей
    collection: whores,

    showAddForm: function() {
        // показать форму добавления
    },

    showEditRemoveForm: function() {
        // показать форму редактирования/удаления
    },

    getFormData: function() {
        // cобрать данные из формы и вернуть их в виде объекта
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    isFormDataValid: function() {
        // проверить что данные валидны
    },

    highlightFields: function() {
        // подсветить невалидные и валидные поля формы
    },

    resetForm: function() {
        // очистить поля формы
    },

    subscribe: function() {
        // Подписаться на события:
        // 1. Клик по кнопке Сохранить
        // 2. Клик по кнопке Обновить
        // 3. Клик по кнопке Удалить
    },

    init: function() {
        //
    }
};

formView.init();

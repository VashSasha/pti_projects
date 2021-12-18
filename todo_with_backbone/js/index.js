var AppModel = Backbone.Model.extend({
    defaults: {
        filter: 'all',
        titleFilter: ''
    }
});

var appModel = new AppModel;

var Task = Backbone.Model.extend({
    defaults: {
        completed: false,
        important: false,
        title: '',
    }
});

var Tasks = Backbone.Collection.extend({
    initialize: function() {
        this.reset(this.getTasksFromStorage());
        this.setTasksToStorage();

        this.on('all', this.setTasksToStorage);
    },

    model: Task,

    setTasksToStorage: function() {
        localStorage.setItem('tasks', JSON.stringify(this.toJSON()));
    },

    getTasksFromStorage: function() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    },

    getCompleteTasksCount: function() {
        return this.where({completed: true}).length;
    },

    getIncompleteTasksCount: function() {
        return this.where({completed: false}).length;
    }
});

var tasks = new Tasks;

var ItemsListView = Backbone.View.extend({

    tmplFn: doT.template($('#tasks-template').html()),

    el: '#tasks',

    events: {
        "dblclick .item .title": "toggleComplete",
        "click .item .delete": "removeTask",
        "click .item .important": "toggleImportant",
    },

    initialize: function() {
        this.render();

        this.listenTo(this.collection, 'all', this.render);
        this.listenTo(this.model, 'all', this.render);
    },

    render: function() {
        var models = this.getFilteredModels(this.getSearchedModels(this.collection.toJSON()));
        this.$el.html(this.tmplFn(models));
    },

    getFilteredModels: function(models) {
        var filter = this.model.get('filter');

        return models.filter(function (model) {
            if (filter === 'incompleted') {
                return model.completed === false;
            }

            if (filter === 'completed') {
                return model.completed === true;
            }

            if (filter === 'all') {
                return true;
            }
        });
    },

    getSearchedModels: function(models) {
        var searchText = this.model.get('titleFilter');

        return models.filter(function(model) {
            return model.title.toLowerCase().includes(searchText.toLowerCase());
        });
    },

    toggleComplete: function(e) {
        var taskId = e.target.parentNode.dataset.id;
        var updatedTask = this.collection.get(taskId).toJSON();
        updatedTask.completed = !updatedTask.completed ;
        this.collection.add(updatedTask, {merge: true});
    },

    toggleImportant: function(e) {
        var taskId = e.target.parentNode.dataset.id;
        var updatedTask = this.collection.get(taskId).toJSON();
        updatedTask.important = !updatedTask.important;
        this.collection.add(updatedTask, {merge: true});
    },

    removeTask: function(e) {
        var taskId = e.target.parentNode.dataset.id;
        this.collection.remove(taskId);
    },
});

var itemsList = new ItemsListView({
    collection: tasks,
    model: appModel
});

var AppView = Backbone.View.extend({

    el: '.app',

    events: {
        'click .actions button': 'handleActions',
        'keyup .title': 'handleAdd',
        'input #needle': 'handleSearch',
    },

    initialize: function() {
        this.updateStats();
        this.listenTo(this.collection, 'all', this.updateStats);
    },

    handleActions: function(e) {
        var button = e.target;
        $('.actions button').removeClass('active');
        $(button).addClass('active');
        this.model.set('filter', button.dataset.filter) ;
    },

    handleSearch: function (e) {
        this.model.set('titleFilter', e.target.value);
    },

    handleAdd: function(e) {
        if(e.keyCode === 13) {
            if (e.target.value !== '') {
                var task = {
                    id: this.getUniqId(),
                    title: e.target.value
                };
                this.collection.add(task);

                e.target.value = '';
            }
        }
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    updateStats: function() {
        $('.item-incompleted').text(this.collection.getIncompleteTasksCount());
        $('.item-completed').text(this.collection.getCompleteTasksCount());
    }
});

var appView = new AppView({
    collection: tasks,
    model: appModel
});

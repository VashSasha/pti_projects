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

        this.on('all', function() {
            this.setTasksToStorage();
        });
    },

    model: Task,

    setTasksToStorage: function() {
        localStorage.setItem('tasks', JSON.stringify(this.toJSON()));
    },

    getTasksFromStorage: function() {
        return JSON.parse(localStorage.getItem('tasks',)) || [];
    }
});

var tasks = new Tasks;



var ItemsListView = Backbone.View.extend({

    tmplFn: doT.template($('#tasks-template').html()),

    collection: tasks,

    el: '#tasks',

    events: {
        "dblclick .item": "completeTask",
        "click .delete": "remove",
        "click .item .important": "clickOnImportant",
    },

    initialize: function() {
        this.render()
        this.listenTo(this.collection, 'all', function () {
            this.render();
        });

        this.listenTo(appModel, 'all', function () {
            this.render();
        });

        this.listenTo(appModel.titleFilter, 'all', function () {
            console.log('title changed')
            this.render()
        })
        this.render()

    },

    render: function() {
        console.log('render');
        var models = this.getFilteredModels(this.getSearchedModels(this.collection.toJSON()));
        this.$el.html(this.tmplFn(models));
    },

    getFilteredModels: function(models) {
        var filter = appModel.get('filter');
        if (filter === 'all') {
            return models;
        } else {
            return models.filter(function (model) {
                if (filter === 'incompleted') {
                    return model.completed === false;
                }
                if (filter === 'completed') {
                    return model.completed === true;
                }
            });
        }
    },

    getSearchedModels: function(models) {
        var input = appModel.get('titleFilter');
        if (input === '') {
            return models;
        } else {
            return models.filter(function (model) {
                return model.title.includes(input)
            });
        }
    },

    completeTask: function(e) {
        var taskId = e.target.dataset.id;
        var updatedTask = this.collection.get(taskId).toJSON();
        updatedTask.completed = !updatedTask.completed ;
        this.collection.add(updatedTask, {merge: true});
    },

    clickOnImportant: function(e) {
        var taskId = e.target.parentNode.dataset.id;
        var updatedTask = this.collection.get(taskId).toJSON();
        updatedTask.important = !updatedTask.important;
        this.collection.add(updatedTask, {merge: true});
    },

    remove: function(e) {
        var taskId = e.target.parentNode.dataset.id;
        this.collection.remove(taskId);
    },
});

var itemsList = new ItemsListView({
    collection: tasks
});

var FormView = Backbone.View.extend({

    el: '.app',

    events: {
        'click .actions button': 'handleActions',
        'keyup .title': 'handleAdd',
        'input #needle': 'handleSearch',
    },

    initialize: function() {
        this.tasksCount();
        this.listenTo(this.collection, 'all', function() {
            this.tasksCount();
        });
    },

    collection: tasks,

    handleActions: function(e) {
        var button = e.target;
        $('.actions .active').removeClass('active');
        button.classList.add('active');
        appModel.set('filter', button.dataset.filter) ;
    },

    handleSearch: function (e) {
        var inputValue = e.target.value;
        appModel.set('titleFilter', inputValue);
    },

    handleAdd: function(e) {
        if(e.keyCode === 13) {
            if (this.isFormDataValid()) {
                var task = {
                    id: this.getUniqId(),
                    title: $('.title').val()
                };
                this.collection.add(task);

                this.clearInput();
            }
        }
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    isFormDataValid: function() {
        return $('.title').val() !== '';
    },

    clearInput: function() {
        $('.title').val('');
    },

    tasksCount: function() {
        this.getCompleteTasksCount();
        this.getIncompleteTasksCount();
        $('.item-incompleted').text(this.getIncompleteTasksCount())
        $('.item-completed').text(this.getCompleteTasksCount());
    },

    getCompleteTasksCount: function() {
        return this.collection.where({completed: true}).length;
    },

    getIncompleteTasksCount: function() {
        return this.collection.where({completed: false}).length;
    },
});

var formView = new FormView({
    collection: tasks
});

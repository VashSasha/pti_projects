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
        this.$el.html(this.tmplFn(this.getSearchedModels()));
    },

    getFilteredModels: function() {
        var filter = appModel.get('filter');
        if (filter === 'all') {
            return this.collection.toJSON();
        } else {
            return this.collection.toJSON().filter(function (model) {
                if (filter === 'incompleted') {
                    return model.completed === false;
                }
                if (filter === 'completed') {
                    return model.completed === true;
                }
            });
        }
    },

    getSearchedModels: function() {
        var input = appModel.get('titleFilter');
        if (input === '') {
            return this.collection.toJSON();
        } else {
            return this.collection.toJSON().filter(function (model) {
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
        // this.sortTaskLIst(button.dataset.filter)
    },

    handleSearch: function (e) {
      console.log()
        var inputValue = e.target.value;
        appModel.set('titleFilter', inputValue);
        console.log(appModel.attributes.titleFilter)
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


// var Whores = Backbone.Collection.extend({
//     initialize: function() {
//         this.reset(this.getModelsFromStorage());
//         this.setModelsToStorage();
//
//         this.on('all', function() {
//             this.setModelsToStorage();
//         });
//     },
//
//     // model: Backbone.Model,
//
//     setModelsToStorage: function() {
//         localStorage.setItem('whores', JSON.stringify(this.toJSON()));
//     },
//
//     getModelsFromStorage: function() {
//         return JSON.parse(localStorage.getItem('whores')) || [];
//     }
// });
//
// var whores = new Whores;
//
// var ListView = Backbone.View.extend({
//     tmplFn: doT.template($('#whore-template').html()),
//
//     el: '#display-whores',
//
//     initialize: function() {
//         this.listenTo(this.collection, 'all', function() {
//             this.renderWhores();
//         });
//
//         this.renderWhores();
//     },
//
//     events: {
//         'click #add-whore-btn': 'handleClickOnAddBtn',
//         'click .whore': 'handleClickOnWhore'
//     },
//
//     handleClickOnAddBtn: function() {
//         formView.render();
//     },
//
//     handleClickOnWhore: function(e) {
//         var whoreId = e.target.dataset.whoreId;
//         var whore = this.collection.get(whoreId);
//         formView.render(whore.toJSON());
//     },
//
//     renderWhores: function() {
//         this.$('#whore-list').html(this.tmplFn(this.collection.toJSON()));
//     },
// });
//
// var listView = new ListView({
//     collection: whores
// });
//
// var FormView = Backbone.View.extend({
//     el: '#whore-form-container',
//
//     tmplFn: doT.template($('#edit-whore-template').html()),
//
//     whore: undefined,
//
//     render: function(whore) {
//         this.whore = whore;
//         this.$el.html(this.tmplFn(this.whore));
//         this.showForm();
//     },
//
//     events: {
//         'click .save': 'handleSave',
//         'click .remove': 'handleRemove',
//         'click .update': 'handleUpdate',
//     },
//
//     handleSave: function() {
//         if (this.isFormDataValid()) {
//             var whore = this.getFormData();
//             this.collection.add(whore);
//             this.hideForm();
//         } else {
//             this.highlightFields();
//         }
//     },
//
//     handleRemove: function() {
//         var whoreId = this.whore.id;
//         this.collection.remove(whoreId);
//         this.hideForm();
//     },
//
//     handleUpdate: function() {
//         if (this.isFormDataValid()) {
//             var updatedWhore = this.getFormData();
//             this.collection.add(updatedWhore, {merge: true});
//             this.hideForm();
//         } else {
//             this.highlightFields();
//         }
//     },
//
//     getFormData: function() {
//         var whore = {};
//
//         whore.id = this.whore ? this.whore.id : this.getUniqId();
//         this.$('input').each(function(idx, input) {
//             whore[input.name] = input.value;
//         });
//
//         return whore;
//     },
//
//     getUniqId: function() {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },
//
//     showForm: function() {
//         this.$el.css('display', 'block');
//     },
//
//     hideForm: function() {
//         this.$el.css('display', 'none');
//         this.resetFields();
//     },
//
//     resetFields: function() {
//         this.$('input').val('');
//     },
//
//     isFormDataValid: function() {
//         return this.$('input').toArray().every(function(input) {
//             return input.value !== '';
//         });
//     },
//
//     highlightFields: function() {
//         this.$('input').each(function(index, input) {
//             if (input.value === '') {
//                 input.style.border = '3px solid red';
//             } else {
//                 input.style.border = '1px solid #000';
//             }
//         });
//     }
// });
//
// var formView = new FormView({
//     collection: whores
// });

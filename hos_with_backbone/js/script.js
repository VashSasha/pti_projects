var Whores = Backbone.Collection.extend({
    initialize: function() {
        this.reset(this.getModelsFromStorage());
        this.setModelsToStorage();

        this.on('all', function () {
            this.setModelsToStorage();
        });
    },
    // model: Backbone.Model,

    setModelsToStorage: function() {
        localStorage.setItem('whores', JSON.stringify(this.toJSON()));
    },

    getModelsFromStorage: function() {
        return JSON.parse(localStorage.getItem('whores')) || [];
    }
});

var whores = new Whores;

var ListView = Backbone.View.extend({
    tmplFn: doT.template($('#whore-template').html()),

    el: '#display-whores',

    initialize: function() {
        this.listenTo(this.collection, 'all', function() {
            this.renderWhores();
        })

        this.renderWhores();
    },

    events: {
        'click #add-whore-btn': 'handleClickOnAddBtn',
        'click .whore': 'handleClickOnWhore'
    },

    handleClickOnAddBtn: function(e) {
        formView.render();
    },

    handleClickOnWhore: function(e) {
        var whoreId = e.target.dataset.whoreid;
        var whore = this.collection.get(whoreId);
        formView.render(whore.toJSON());
    },

    renderWhores: function() {
        this.$('#whore-list').html(this.tmplFn(this.collection.toJSON()));
    },
});

var listView = new ListView({
    collection: whores
});

var FormView = Backbone.View.extend({
    el: '#whore-form-container',

    tmplFn: doT.template($('#edit-whore-template').html()),

    whore: undefined,

    render: function (whore) {
        this.whore = whore;
        $('#whore-form-container').html(this.tmplFn(this.whore));
        this.showForm();
    },

    events: {
        'click .save': 'handleSave',
        'click .remove': 'handleRemove',
        'click .update': 'handleUpdate',
    },

    handleSave: function() {
        if (this.isFormDataValid()) {
            var whore = this.getFormData();
            this.collection.add(whore);
            this.hideForm();
        } else {
            this.highlightFields();
        }
    },

    handleRemove: function() {
        var whoreId = this.whore.id;
        this.collection.remove(whoreId);
        this.hideForm();
    },

    handleUpdate: function() {
        if (this.isFormDataValid()) {
            var updatedWhore = this.getFormData();
            this.collection.add(updatedWhore, {merge: true});
            this.hideForm();
        } else {
            this.highlightFields();
        }
    },

    getFormData: function() {
        var whore = {};

        whore.id = this.whore ? this.whore.id : this.getUniqId();
        this.$('input').each(function(idx, input) {
            whore[input.className] = input.value;
        });

        return whore;
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    showForm: function() {
        $('#whore-form-container').css('display', 'block');
    },

    hideForm: function() {
        $('#whore-form-container').css('display', 'none');
        this.resetFields();
    },

    resetFields: function() {
        this.$('input').val('');
    },

    isFormDataValid: function() {
        var isValid = undefined;

        $('input').toArray().every(function(input) {
            isValid = input.value.length !== 0;

            return isValid;
        });

        return isValid;
    },

    highlightFields: function() {
        $('input').each(function (index, element) {
            if (element.value.length === 0) {
                element.style.border = '3px solid red';
            } else {
                element.style.border = '1px solid #000';
            }
        });
    }
})

var formView = new FormView({
    collection: whores
});














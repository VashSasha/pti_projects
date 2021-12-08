var whoresCollection = {
    models: [],

    init: function () {
        this.models = this.getModelsFromStorage();
    },

    add: function(whore) {
        this.models.push(whore);
        $(this).trigger('change');
    },

    getWhoreById: function(whoreId) {
        return _.findWhere(this.models, {id: whoreId});
    },

    update: function(updatedWhore) {
        this.models.forEach(function(whore, idx) {
            if (whore.id === updatedWhore.id) {
                this.models.splice(idx, 1, updatedWhore);
            }
        }.bind(this));
        this.setModelsToStorage();
        $(this).trigger('change');
    },

    remove: function(whoreId) {
        this.models = _.reject(this.models, function(whore) {
            return whore.id === whoreId;
        });
        this.setModelsToStorage();
        $(this).trigger('change');
    },

    setModelsToStorage: function() {
        localStorage.setItem('whores', JSON.stringify(this.models));
    },

    getModelsFromStorage: function() {
        return JSON.parse(localStorage.getItem('whores')) || [];
    }
};

whoresCollection.init();

var listView = {
    tmplFn: doT.template($('#whore-template').html()),

    collection: whoresCollection,

    render: function() {
        $('#whore-list').html(this.tmplFn(this.collection.models));
    },

    subscribe: function() {
        $('#whore-list').on('click', this.handleClickOnWhore.bind(this));
        $('#add-whore-btn').on('click', this.handleClickOnAddBtn.bind(this));
        $(whoresCollection).on('change', function() {
            listView.render();
            whoresCollection.setModelsToStorage();
        })
    },

    handleClickOnWhore: function(e) {
        var whoreId = e.target.dataset.whoreId;
        var whore = this.collection.getWhoreById(whoreId);
        formView.render(whore);
    },

    handleClickOnAddBtn: function(e) {
        formView.render();
    },

    init: function() {
        this.render();
        this.subscribe();
    }
};

listView.init();

var formView = {
    tmplFn: doT.template($('#form-template').html()),

    whore: undefined,

    collection: whoresCollection,

    render: function(whore) {
        this.whore = whore;
        $('#whore-form-container').html(this.tmplFn(this.whore));
        this.showForm();
        this.subscribe();
    },

    subscribe: function () {
        $('.whore-form .save').on('click', this.handleSave.bind(this));
        $('.whore-form .remove').on('click', this.handleRemove.bind(this));
        $('.whore-form .update').on('click', this.handleUpdate.bind(this))
    },

    handleSave: function(e) {
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
            this.collection.update(updatedWhore);
            this.hideForm();
        } else {
            this.highlightFields();
        }
    },

    getFormData: function () {
        var whore = {};

        whore.id = this.whore ? this.whore.id : this.getUniqId();
        $('.whore-form input').each(function (idx, input) {
            whore[input.id] = input.value;
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
        $('.whore-form input').each(function (idx, input) {
            input.value = '';
        });
    },

    isFormDataValid: function() {
        var isValid = undefined;

        $('.whore-form input').toArray().every(function(input) {
            isValid = input.value.length !== 0;

            return isValid;
        });

        return isValid;
    },

    highlightFields: function() {
        $('.whore-form input').each(function (index, element) {
            if (element.value.length === 0) {
                element.style.border = '3px solid red';
            } else {
                element.style.border = '1px solid #000';
            }
        });
    }
};

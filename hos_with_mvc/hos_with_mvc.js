var whoresCollection = {
    models: [],

    init: function () {
        this.models = this.getModelsFromStorage();
        this.setModelsToStorage();

        // слушает событие "change" и синхронизирует модели с localStorage
    },

    add: function(whore) {
        //whore = formView.getFormData();
        this.models.push(whore);
        //this.setModelsToStorage();
        // тригерить событие "change у колекции"
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
        //this.setModelsToStorage();
        // тригерить событие "change у колекции"
    },

    remove: function(whoreId) {
        this.models = _.reject(this.models, function(whore) {
            return whore.id === whoreId;
        });
        //this.setModelsToStorage();
        // тригерить событие "change у колекции"
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
        // TODO: слушает коллекицю и перерендеривается
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
        $('.save').on('click', this.handleSave.bind(this));
        $('.remove').on('click', this.handleRemove.bind(this));
        $('.update').on('click', this.handleUpdate.bind(this))
    },

    handleSave: function(e) {
        if (this.isFormDataValid()) {
            var whore = this.getFormData();
            this.collection.add(whore);
            //listView.render();
            this.hideForm();
        } else {
            this.highlighFields();
        }
    },

    handleRemove: function(e) {
        var whoreId = this.whore.id;
        this.collection.remove(whoreId);
        //listView.render();
        this.hideForm();
    },

    handleUpdate: function(e) {
        if (this.isFormDataValid()) {
            var updatedWhore = this.getFormData();
            this.collection.update(updatedWhore);
            //listView.render();
            this.hideForm();
        } else {
            this.highlighFields();
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
        // var arr = [];
        // $('.whore-form input').each(function (index, element) {
        //     if (element.value.length === 0) {
        //         arr.push(index);
        //     }
        // });

        return true;
    },

    highlighFields: function() {
        // $('.whore-form input').on('blur', function (e) {
        //     if (e.target.value.length === 0) {
        //         e.target.style.border = '3px solid red';
        //     } else {
        //         e.target.style.border = '1px solid #000';
        //     }
        //     this.validate();
        // }.bind(this));
    }
};

//TODO: когда в коллекции меняется массив моделей нужно возбуждать событие "change" у нее
// При возникновении события "change" у коллекции нужно
//          1. синхронизировать .models с localStorage
//          2. перерендерить список
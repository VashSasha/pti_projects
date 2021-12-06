var whoresCollection = {
    models: [],

    init: function () {
        this.models = this.getModelsFromStorage();
        this.setModelsToStorage();
    },

    add: function (whore) {
        whore = addFormView.getFormData();
        this.models.push(whore);
        this.setModelsToStorage();
    },

    remove: function(id) {
        this.models = _.reject(this.models, function (whore) {
            console.log(whore)
            return whore.id === id
        });
        this.setModelsToStorage();
        listView.render();
    },

    getWhoreId: function (e) {
        if (e === undefined) {
            return;
        }

        for (let whore of this.models) {
            if (whore.id === e.target.dataset.whoreid) {
                return whore.id;
            }
        }
    },

    checkInputData: function () {
        $('.whore-form input').on('blur', function (e) {
            if (e.target.value.length === 0) {
                e.target.style.border = '3px solid red';
            } else {
                e.target.style.border = '1px solid #000';
            }
            this.validate();
        }.bind(this));
    },

    validate: function () {
        var arr = [];
        $('.whore-form input').each(function (index, element) {
            if (element.value.length === 0) {
                arr.push(index);
            }
        });
        if(arr.length >= 1){
            $('.whore-form .save, .whore-form .update').attr('disabled', true);
        }else{
            $('.whore-form .save, .whore-form .update').attr('disabled', false);
        }
    },

    setModelsToStorage: function () {
        localStorage.setItem('whore_list', JSON.stringify(this.models));
    },

    getModelsFromStorage: function () {
        return JSON.parse(localStorage.getItem('whore_list')) || [];
    },

    getWhoreById: function (whoreId) {
        return _.findWhere(this.models,{id: whoreId});
    },

    updateWhore: function (updatedWhore) {
        var newWhore = {};
        newWhore.id = updatedWhore.id;
        $('.whore-form input').each(function (i, el) {
            newWhore[el.id] = el.value;
        });
        for ( let [i, whore] of this.models.entries()){
            if (whore.id === updatedWhore.id) {
                this.models.splice(i, 1, newWhore);
            }
        }
        this.setModelsToStorage();
    },
};

whoresCollection.init();

var listView = {
    tmplFn: doT.template($('#whore-template').html()),

    collection: whoresCollection.models,

    render: function() {
        $('#whore-list').html(this.tmplFn(this.collection));
        $('#whore-form-container').css('display', 'block');
        this.subscribe();
    },

    subscribe: function() {
        $('#whore-list').on('click', function (whoreData) {
            addFormView.render(whoreData);
        });

        $('#add-whore-btn').on('click', function () {
            addFormView.render();
            whoresCollection.checkInputData();
        });
    },
};

listView.render();

var addFormView = {
    tmplFn: doT.template($('#edit-whore-template').html()),
    whore: null,

    render: function (whore) {
       this.whore = whoresCollection.getWhoreById(whoresCollection.getWhoreId(whore));
        $('#whore-form-container').html(this.tmplFn(this.whore));
        this.displayForm();
        this.subscribe();
    },

    subscribe: function () {
        $('.whore-form .save').on('click', function (e) {
            whoresCollection.add();
            listView.render();
            this.remove();
        }.bind(this));

        $('.remove').on('click', function () {
            whoresCollection.remove(this.whore.id);
            listView.render();
            this.remove();
        }.bind(this));

        $('.update').on('click', function () {
            whoresCollection.updateWhore(this.whore);
            listView.render();
            this.remove();
        }.bind(this))
    },

    getFormData: function () {
        var newWhore = {};
        newWhore.id = this.getUniqId();

        $('.whore-form input').each(function (i, el) {
            newWhore[el.id] = el.value;
        });

        return newWhore;
    },

    getUniqId: function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    displayForm: function () {
        $('#whore-form-container').css('display', 'block');
    },

    remove: function () {
        $('#whore-form-container').css('display', 'none');
        $('.whore-form input').each(function (i, el) {
            el.value = '';
        });
    }
};

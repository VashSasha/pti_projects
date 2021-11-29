var whore_list = [];
var getWhoreList = localStorage.getItem('whore_list');
var addNewWhore = $('#add-whore-btn');
var editWhore = $('#whore-list');
var selectedWhore;


function whoresFromStorage() {
    if(getWhoreList === null){
        whore_list = [];
        displayWhoreList();
    } else {
        var getWhores = localStorage.getItem('whore_list');
        whore_list = JSON.parse(getWhores);
        displayWhoreList();
    }
}

function displayWhoreList() {
    var whoreTemplate = document.querySelector('#whore-template').innerHTML;
    document.querySelector('#whore-list').innerHTML = doT.template(whoreTemplate)({whore_list: whore_list});
}

function displayEditWhore(whore) {
    var whoreTemplate = document.querySelector('#edit-whore-template').innerHTML;
    document.querySelector('#whore-form-container').innerHTML = doT.template(whoreTemplate)(whore);
}


function checkInputInfo() {
    $('.whore-form input').on('blur', function (e) {
        if (e.target.value.length === 0) {
            e.target.style.border = '3px solid red';
        } else {
            e.target.style.border = '1px solid #000';
        }
        validate();
    });
}

function validate() {
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
}

function uniqueId () {
    return _.uniqueId('whore_');
}

function openWhoreForm () {
    $('#whore-form-container').css('display', 'inline-block');
}

function hideWhoreForm() {
    $('.whore-form input').each(function (i, el) {
        el.value = '';
    });
    $('#whore-form-container').css('display', 'none');
}

function removeWhore(e){
    for ( let [i, whore] of whore_list.entries()){
        if (whore.id === e.id) {
            whore_list.splice(i, 1);
        }
    }
    localStorage.setItem('whore_list', JSON.stringify(whore_list));
    whoresFromStorage();
}

function updateWhore(e) {
    var newWhore = {};
    newWhore.id = selectedWhore.id;
    $('.whore-form input').each(function (i, el) {
        newWhore[el.id] = el.value;
    });
    for ( let [i, whore] of whore_list.entries()){
        if (whore.id === e.id) {
            whore_list.splice(i, 1, newWhore);
        }
    }
    localStorage.setItem('whore_list', JSON.stringify(whore_list));
    whoresFromStorage();
}

addNewWhore.on('click', function () {
    openWhoreForm();
    displayEditWhore();
    validate();
    checkInputInfo();
    $('.whore-form .save').on('click', function (e) {
        e.preventDefault();
        var newWhore = {};

        newWhore.id = uniqueId();
        $('.whore-form input').each(function (i, el) {
            newWhore[el.id] = el.value;
        });

        whore_list.push(newWhore);
        localStorage.setItem('whore_list', JSON.stringify(whore_list));
        hideWhoreForm();
        displayWhoreList();
    });
});

editWhore.on('click', function (e) {
    if (e.target.tagName !== "A") {
        return;
    }
    for (let whore of whore_list) {
       if (whore.id === e.target.dataset.whoreid) {
           selectedWhore = whore;
           openWhoreForm();
           displayEditWhore(selectedWhore);
           checkInputInfo();
       }
    }
    checkInputInfo();
    $('.remove').on('click', function () {
        removeWhore(selectedWhore);
        hideWhoreForm();
    });
    $('.update').on('click', function () {
        updateWhore(selectedWhore);
        hideWhoreForm();
    })
})

whoresFromStorage();
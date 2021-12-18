// Write your code here

$('.add-games').on('click', function (e) {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/games',
        dataType: 'json',
    }).done(function(games){
        var gameTemplate = document.querySelector('#game-template').innerHTML;
        document.querySelector('#games').innerHTML = doT.template(gameTemplate)({games: games});
    })
});

$('.btn-nav-en').on('click', function () {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/games/menu/en',
        dataType: 'json',
    }).done(function(navEn){
        var navTemplate = document.querySelector('#nav-template').innerHTML;
        document.querySelector('#nav').innerHTML = doT.template(navTemplate)({nav: navEn});
    })
});

$('.btn-nav-ru').on('click', function () {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/games/menu/ru',
        dataType: 'json',
    }).done(function(navRu){
        var navTemplate = document.querySelector('#nav-template').innerHTML;
        document.querySelector('#nav').innerHTML = doT.template(navTemplate)({nav: navRu});
    })
});

$('.add-whores').on('click', function () {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/games/whores',
        dataType: 'json',
    }).done(function(whores){
        var whoresTemplate = document.querySelector('#whore-template').innerHTML;
        document.querySelector('#whores').innerHTML = doT.template(whoresTemplate)({whores: whores});
    })
});

$('.add-movies').on('click', function () {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/games/movies',
        dataType: 'json',
    }).done(function(movies){
        var movieTemplate = document.querySelector('#movie-template').innerHTML;
        document.querySelector('#movies').innerHTML = doT.template(movieTemplate)({movies: movies});
    })
});

//TODO: XMLHttpRequest
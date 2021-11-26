// Write your code here
console.log('Hello world!');
$('.add-games').on('click', function () {
    var gameTemplate = document.querySelector('#game-template').innerHTML;
    document.querySelector('#games').innerHTML += doT.template(gameTemplate)({games: games});
});

//----------------
$('.btn-nav-en').on('click', function () {
    var navTemplate = document.querySelector('#nav-template').innerHTML;
    document.querySelector('#nav').innerHTML = doT.template(navTemplate)({nav: navEn});
});

$('.btn-nav-ru').on('click', function () {
    var navTemplate = document.querySelector('#nav-template').innerHTML;
    document.querySelector('#nav').innerHTML = doT.template(navTemplate)({nav: navRu});
});

//----------------
document.querySelector('.add-whores').addEventListener('click', function () {
    var whoresTemplate = document.querySelector('#whore-template').innerHTML;
    document.querySelector('#whores').innerHTML += doT.template(whoresTemplate)({whores: whores});
});

//-----------------
document.querySelector('.add-movies').addEventListener('click', function () {
    console.log('ss')
    var movieTemplate = document.querySelector('#movie-template').innerHTML;
    document.querySelector('#movies').innerHTML += doT.template(movieTemplate)({movies: movies});
});
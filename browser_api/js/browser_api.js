// Write your code here
console.log('Hello world!');

// При клике на кнопку изменить цвет текста
var t1  = document.querySelector('.t1');
document.querySelector('.b1').addEventListener('click', function () {
    t1.style.color = 'red';
});


//При клике на кнопку изменить цвет фона
var t2  = document.querySelector('.t2');
document.querySelector('.b2').addEventListener('click', function () {
    t2.style.backgroundColor = 'lightblue';
});

//При клике на кнопку изменить путь ссылки
var a1  = document.querySelector('.t3 a');
document.querySelector('.b3').addEventListener('click', function () {
    a1.href = 'https://google.com';
});


//При клике на кнопку изменить путь к картинке
var img1  = document.querySelector('.t4 img');
document.querySelector('.b4').addEventListener('click', function () {
    img1.src = 'images/fish.jpg';
});


// При клике на кнопку изменить id элемента
var t5  = document.querySelector('.t5');
document.querySelector('.b5').addEventListener('click', function () {
    t5.id = 'sasha';
});


//При клике на кнопку изменить текст
var t6  = document.querySelector('.t6');
document.querySelector('.b6').addEventListener('click', function () {
    t6.textContent = 'updated text';
});


//При клике на кнопку изменить HTML
var t7  = document.querySelector('.t7');

document.querySelector('.b7').addEventListener('click', function () {
    t7.innerHTML = '<i>updated</i> <b>text</b>';
});


//При клике на кнопку изменить размер шрифта
var t8  = document.querySelector('.t8');
document.querySelector('.b8').addEventListener('click', function () {
    t8.style.fontSize = '24px';
});


// При клике на кнопку добавить класс 'hi'
var t9  = document.querySelector('.t9');
document.querySelector('.b9').addEventListener('click', function () {
    t9.classList.add('hi');
});


// При клике на кнопку удалить класс 'hi'
var t10  = document.querySelector('.t10');
document.querySelector('.b10').addEventListener('click', function () {
    t10.classList.remove('hi');
});


//При клике на кнопку добавлять/удалять (в зависимости от наличия) класс 'hi'
var t11  = document.querySelector('.t11');
document.querySelector('.b11').addEventListener('click', function () {
    t11.classList.toggle('hi');

    // if (t11.classList.contains('hi')) {
    //     t11.classList.remove('hi');
    // } else {
    //     t11.classList.add('hi');
    // }
});


//При клике на любом элементе страницы выводить значение атрибута class элемента
var t12 = document.querySelector('.t12');
document.addEventListener('click', function (e) {
    t12.textContent = e.target.className;
});


//При клике на кнопку перевести текст на английский язык (перевод хранится в атрибуте data-en элемента)
var t13 = document.querySelector('.t13');
document.querySelector('.b13').addEventListener('click', function () {
    t13.textContent = t13.getAttribute('data-en');
});


//При изменении размеров окна вкладки или браузера изменять фоновый цвет абзаца (использовать RGB и Math.random)
window.addEventListener('resize', function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgbColor = "rgb("+ r + "," + g + ", " + b + ")";
    document.querySelector('.t99').style.backgroundColor = rgbColor;
});


// При изменении значения элемента формы выводить количество символов которое оно содержит
var input1 = document.querySelector('.t98 input');
input1.addEventListener('input', function () {
    document.querySelector('.t98-2').textContent = input1.value.length;
});


//Вывести на экран анкету Жасмин используя переменную jasmine (смотри исходный код) двумя способами (созданием элементов, конкатенацией)
document.querySelector('.b14').addEventListener('click', function () {
    var newWhore = document.createElement('div');
    newWhore.classList.add('whore');

    var whoreName = document.createElement('div');
    whoreName.classList.add('whore-name');
    whoreName.textContent = jasmine.name;
    newWhore.appendChild(whoreName);

    var whorePic = document.createElement('img');
    whorePic.src = jasmine.photo;
    newWhore.appendChild(whorePic);

    var whoreAge = document.createElement('div');
    whoreAge.classList.add('whore-age');
    whoreAge.textContent = 'Возраст: ' + jasmine.age;
    newWhore.appendChild(whoreAge);

    var whoreBoobs = document.createElement('div');
    whoreBoobs.classList.add('whore-boobs');
    whoreBoobs.textContent = 'Размер груди: ' + jasmine.boobs;
    newWhore.appendChild(whoreBoobs);

    var whoreHeight = document.createElement('div');
    whoreHeight.classList.add('whore-height');
    whoreHeight.textContent = 'Рост: ' + jasmine.height;
    newWhore.appendChild(whoreHeight);

    var whoreWeight = document.createElement('div');
    whoreWeight.classList.add('whore-weight');
    whoreWeight.textContent = 'Вес: ' + jasmine.weight;
    newWhore.appendChild(whoreWeight);

    var whorePhone = document.createElement('div');
    whorePhone.classList.add('whore-phone');
    whorePhone.textContent = jasmine.phone;
    newWhore.appendChild(whorePhone);

    var whoreCanCome = document.createElement('div');
    whoreCanCome.classList.add('whore-can-come');
    whoreCanCome.textContent = 'Выезд: ' + (jasmine.can_come ? '+' : '-');
    newWhore.appendChild(whoreCanCome);

    var whoreTeaser = document.createElement('div');
    whoreTeaser.classList.add('whore-teaser');
    whoreTeaser.textContent = jasmine.teaser;
    newWhore.appendChild(whoreTeaser);

    //-------------------

    var newWhore2 =
       ' <div class="whore">'+
           '<div class="whore-name">'+ jasmine.name +' </div>'+
           '<img src="'+ jasmine.photo +'" width="200">'+
           '<div class="whore-age">Возраст: '+ jasmine.age +'</div>'+
           '<div class="whore-boobs">Размер груди: '+ jasmine.boobs +'</div>'+
           '<div class="whore-height">Рост: '+ jasmine.height +'</div>'+
           '<div class="whore-weight">Вес: '+ jasmine.weight +'</div>'+
           '<div class="whore-phone">'+ jasmine.phone +'</div>'+
           '<div class="whore-can-come">Выезд: '+ (jasmine.can_come ? '+' : '-' ) +'</div>'+
           '<div class="whore-teaser">'+ jasmine.teaser +'</div>'+
       ' </div>';

    document.querySelector('.whores-container').appendChild(newWhore);
    document.querySelector('.whores-container').innerHTML += newWhore2;
});


//Переместить рыбу из первого контейнера во второй (при повторном клике из второго в первый и т.д.)
document.querySelector('.b15').addEventListener('click', function () {
    var fish = document.querySelector('.fish');
    if (document.querySelector('.cat-container-1 .fish')) {
        document.querySelector('.cat-container-2').appendChild(fish);
    } else {
        document.querySelector('.cat-container-1').appendChild(fish);
    }
});


//Удалить зуб
document.querySelector('.b16').addEventListener('click', function () {
    document.querySelector('.tooth').remove();
});


//Хочу чтоб лыжник бесконечно ехал вправо (сдвиг на 5px каждые 16ms). При нажатии на кнопку "Стоп!" останавливался.
document.querySelector('.b17').addEventListener('click', function () {
    var skier = document.querySelector('.skier');
    var distance = 0;
    var interval = setInterval(function () {
        skier.style.left = (distance += 5) + 'px';
    },16);

    document.querySelector('.b17-2').addEventListener('click', function () {
        clearInterval(interval);
    })
});


//Хочу такое (смотри исходный код)
var tiles = document.querySelector('.mikki_tiles');

function print(arr) {//TODO: forEach(function (el, i) {})
    arr.forEach(function (el) {
        for (let i = 0; i < el.length; i++) {
            var tile = document.createElement('tile');
            tile.classList.add('mikki_tile');

            if (el[i] === 'X') {
                tile.style.backgroundColor = 'black';
            }
            tiles.appendChild(tile);
        }
    });
}

print(mikki);


//Создать мир Марио
var scene = document.querySelector('.scene');

document.querySelector('.b18').addEventListener('click', function() {//TODO: forEach(function (el, i) {})
    map.forEach(function () {
        map.forEach(function (el, j) {
            for (let i = 0; i < el.length; i++) {
                var tile = document.createElement('div');
                tile.classList.add('tile');
                tile.style.top = j * 16 + 'px';
                tile.style.left = i * 16 + 'px';

                if (el[i] === 'z') {
                    tile.classList.add('x_z');
                } else if (el[i] === 'k') {
                    tile.classList.add('x_k');
                } else if (el[i] === 'c') {
                    tile.classList.add('x_c');
                } else if (el[i] === 't') {
                    tile.classList.add('x_t');
                } else if (el[i] === 'g') {
                    tile.classList.add('x_g');
                } else if (el[i] === 'b') {
                    tile.classList.add('x_b');
                } else if (el[i] === 'd') {
                    tile.classList.add('x_d');
                } else if (el[i] === 'w') {
                    tile.classList.add('x_w');
                }
                scene.appendChild(tile);
            }
        });
    });
});


//Кликая по кнопкам "предыдущая" и "следующая" я хочу чтобы менялись соответственно слайды
var slider = document.querySelector('.slider');
var previous = document.querySelector('.previous');
var next = document.querySelector('.next');
var slides = document.querySelectorAll('.slider img');
var activeSlideIndex = 0;

next.addEventListener('click', function () {
    goTo('next');
});

previous.addEventListener('click', function () {
    goTo('prev');
});

function goTo(direction) {
    slider.querySelector('.active').classList.remove('active');

    if (direction === 'next') {
        if (activeSlideIndex < slides.length - 1){
            activeSlideIndex++;
        } else {
            activeSlideIndex = 0;
        }
    }
    if (direction === 'prev') {
        if (activeSlideIndex > 0 ) {
            activeSlideIndex--;
        } else {
            activeSlideIndex = slides.length - 1;
        }
    }

    slides[activeSlideIndex].classList.add('active');
}

//Кликая вопросам я хочу видеть ответы на них
var faq = document.querySelector('.faq');

faq.addEventListener('click', function (e) {
    if (e.target.tagName === 'DT') {
        e.target.classList.toggle('active');
    }
});


//Кликая по вкладкам я хочу видеть связанное содержимое
let tabs = document.querySelector('.tabs');
var tabsContent = document.querySelector('.tabs-content');

tabs.addEventListener('click', function (e) {
    if (e.target.className !== 'item'){
        return;
    }
    tabs.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    tabsContent.querySelector('.active').classList.remove('active');
    tabsContent.querySelector('[data-tab="' + e.target.dataset.tab + '"]').classList.add('active');
});


//Кликая на кнопку Login я хочу чтобы затенялся экран и по середине экрана появлялось окошко для авторизации закрыть которое можно кликнув по кнопке с крестиком
var overlay = document.querySelector('.overlay');
var popUp = document.querySelector('.pop-up');
var popUpCloseBtn = popUp.querySelector('.close');

function toggleClass() {
    overlay.classList.toggle('hidden');
    popUp.classList.toggle('hidden');
}

document.querySelector('.show-login-pop-up').addEventListener('click', function () {
    toggleClass();
});
popUpCloseBtn.addEventListener('click', function () {
    toggleClass();
});

//Отменить действие по-умолчанию при клике на ссылку
document.querySelector('.link-ebanoe').addEventListener('click', function (e) {
    e.preventDefault();
});

/*
Надоела реклама про увеличение члена? При клике на кнопку "Больше не показывать" заноси в localStorage значение которое будешь проверять при загрузке страницы
 */

var ad = document.querySelector('.t97');
var adCloseBtn = ad.querySelector('.b97');

adCloseBtn.addEventListener('click', function () {
    ad.style.display = 'none';
    localStorage.setItem('showAdd', 'false');
});

window.addEventListener('load', function () {
    if (localStorage.getItem('showAdd') === 'false') {
        ad.style.display = 'none';
    }
});

console.log(localStorage);

// Write your code here
console.log('Hello world!');

// При клике на кнопку изменить цвет текста

$('.b1').click(function () {
    $('.t1').css('color', 'red');
});

//При клике на кнопку изменить цвет фона
$('.b2').click(function () {
    $('.t2').css('background', 'lightblue');
});

//При клике на кнопку изменить путь ссылки
$('.b3').click(function () {
    $('.t3 a').attr('href', 'www.google.com');
});

//При клике на кнопку изменить путь к картинке
$('.b4').click(function () {
    $('.t4 img').attr('src', 'images/fish.jpg');
});

//При клике на кнопку изменить id элемента
$('.b5').click(function () {
    $('.t5').attr('id', 'ddd');
});

//При клике на кнопку изменить текст
$('.b6').click(function () {
    $('.t6').text('some new text');
});

//При клике на кнопку изменить HTML
$('.b7').click(function () {
    $('.t7').html('<b>Updated</b> <i>HTML</i>');
});

//При клике на кнопку изменить размер шрифта
$('.b8').click(function () {
    $('.t8').css('fontSize', '24px');
});

//При клике на кнопку добавить класс 'hi'
$('.b9').click(function () {
    $('.t9').addClass('hi');
});

//При клике на кнопку удалить класс 'hi'
$('.b10').click(function () {
    $('.t10').removeClass('hi');
});

//При клике на кнопку добавлять/удалять (в зависимости от наличия) класс 'hi'
$('.b11').click(function () {
    $('.t11').toggleClass('hi');
});

//При клике на любом элементе страницы выводить значение атрибута class элемента
$(window).click(function (el) {
    $('.t12').text(el.target.className);
});


//При клике на кнопку перевести текст на английский язык (перевод хранится в атрибуте data-en элемента)
$('.b13').click(function () {
    $('.t13').text($(this).data('en'));
});


//При изменении размеров окна вкладки или браузера изменять фоновый цвет абзаца (использовать RGB и Math.random)
$(window).on('resize',function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var colorRGB = "rgb(" + r + "," + g + ", " + b + ")";
    $('.t99').css('background', colorRGB) ;
});

//При изменении значения элемента формы выводить количество символов которое оно содержит
$('.t98 input').on('input', function () {
    $('.t98-2').text($('.t98 input').val().length);
});

//Вывести на экран анкету Жасмин используя переменную jasmine (смотри исходный код) двумя способами (созданием элементов, конкатенацией)


$('.b14').on('click', function () {//TODO: глянь в browser_api
    addWhore();
    // addWhore2();
});

function addWhore() {
    var newWhore = ' <div class="whore">' +
        '<div class="whore-name">' + jasmine.name + ' </div>' +
        '<img src="' + jasmine.photo + '" width="200">' +
        '<div class="whore-age">Возраст: ' + jasmine.age + '</div>' +
        '<div class="whore-boobs">Размер груди: ' + jasmine.boobs + '</div>' +
        '<div class="whore-height">Рост: ' + jasmine.height + '</div>' +
        '<div class="whore-weight">Вес: ' + jasmine.weight + '</div>' +
        '<div class="whore-phone">' + jasmine.phone + '</div>' +
        '<div class="whore-can-come">Выезд: ' + (jasmine.can_come ? '+' : '-') + '</div>' +
        '<div class="whore-teaser">' + jasmine.teaser + '</div>' +
        ' </div>';
    $('.whores-container').append(newWhore);
}

function addWhore2() {
    $('.whores-container').append('<div class="whore">');
    $('.whore:last-child').append('<div class="whore-name"> ' + jasmine.name + ' ');
}


//Переместить рыбу из первого контейнера во второй (при повторном клике из второго в первый и т.д.)
$('.b15').click(function () {
    if ($('.cat-container-1 .fish').length !== 0) {
        $('.fish').appendTo($('.cat-container-2'));
    } else {
        ($('.fish').appendTo($('.cat-container-1')));
    }
});


//Удалить зуб
$('.b16').click(function () {
    $('.tooth').remove();
});


//Хочу чтоб лыжник бесконечно ехал вправо (сдвиг на 5px каждые 16ms). При нажатии на кнопку "Стоп!" останавливался.
$('.b17').click(function () {
    var distance = 0;
    var interval = setInterval(function () {
        distance += 5;
        $('.skier').css('left', distance + 'px');
    }, 16);

    $('.b17-2').click(function () {
        clearInterval(interval)
    });
});


//Хочу такое (смотри исходный код)
mikki.forEach(function (el) {
    for (let i = 0; i < el.length; i++) {//TODO: forEach
        var tile = $('<div class="mikki_tile">');

        if (el[i] === 'X') {
           tile.css('background', 'black');
        }
        tile.appendTo($('.mikki_tiles'));
    }
});


//Создать мир Марио
$('.b18').click(function () {
    map.forEach(function () {
        map.forEach(function (el, j) {
            for (let i = 0; i < el.length; i++) {//TODO: forEach
                var tile = $('<div>');
                tile.addClass('tile');
                tile.css('top', (j * 16 + 'px')) ;
                tile.css('left', (i * 16 + 'px')) ;

                if (el[i] === 'z') {
                    tile.addClass('x_z');
                } else if (el[i] === 'k') {
                    tile.addClass('x_k');
                } else if (el[i] === 'c') {
                    tile.addClass('x_c');
                } else if (el[i] === 't') {
                    tile.addClass('x_t');
                } else if (el[i] === 'g') {
                    tile.addClass('x_g');
                } else if (el[i] === 'b') {
                    tile.addClass('x_b');
                } else if (el[i] === 'd') {
                    tile.addClass('x_d');
                } else if (el[i] === 'w') {
                    tile.addClass('x_w');
                }
                $('.scene').append(tile);
            }
        });
    });
});

//Кликая по кнопкам "предыдущая" и "следующая" я хочу чтобы менялись соответственно слайды
var activeSlideIndex = 0;

function goTo(direction) {
    $('.slider .active').removeClass('active');
    var slides = $('.slide');

    if (direction === 'next') {
        if (activeSlideIndex < slides.length - 1) {
            activeSlideIndex++;
        } else {
            activeSlideIndex = 0;
        }
    } else {
        if (activeSlideIndex > 0) {
            activeSlideIndex--;
        } else {
            activeSlideIndex = slides.length - 1;
        }
    }

    slides.get(activeSlideIndex).addClass('active');
}

$('.next').click(function () {
    goTo('next');
});

$('.previous').click(function () {
    goTo('prev');
});


//Кликая вопросам я хочу видеть ответы на них
$('.question').click(function () {
    $(this).toggleClass('active');
});


//Кликая по вкладкам я хочу видеть связанное содержимое
$('.tabs .item').click(function () {
    $('.item.active').removeClass('active');
    $(this).toggleClass('active');

    var tab = $(this).data('tab');
    $('.tabs-content').find('[data-tab= ' + tab + ']').addClass('active');
});


//Кликая на кнопку Login я хочу чтобы затенялся экран и по середине экрана появлялось окошко для авторизации закрыть которое можно кликнув по кнопке с крестиком

$('.show-login-pop-up').click(function () {
    $('.overlay, .pop-up').toggleClass('hidden');
});

$('.close').click(function () {
    $('.overlay, .pop-up').toggleClass('hidden');
});


//Отменить действие по-умолчанию при клике на ссылку
$('.link-ebanoe').click(function (e) {
    e.preventDefault();
});


//Надоела реклама? При клике на кнопку "Больше не показывать" заноси в localStorage значение которое будешь проверять при загрузке страницы
$('.b97').click(function () {
    $('.t97').css('display', 'none');
    localStorage.setItem('showAd', 'false');
});

$(window).on('load', function () {
    if (localStorage.getItem('showAd') === 'false') {
        $('.t97').css('display', 'none');
    }
});

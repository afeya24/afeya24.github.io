'use strict'

$(function () {

    var html = $('#test').html();
    var test = {
        testArray: [
            {
                question: 'В каком ряду оба слова пишутся через дефис?',
                answers: ['(зоо)магазин, литературно(художественный)', '(пол)лимона, северо(западный)', 'выпукло(вогнутый), (полу)остров'],
                rightAnswer: 2,
            },
            {
                question: 'Из трёх слов только одно имеет единственное значение, а каждое из остальных употребляется по крайней мере в двух разных смыслах. ' +
                'Какое слово имеет единственное значение?',
                answers: ['Полька', 'Француженка', 'Финка'],
                rightAnswer: 2,
            },
            {
                question: 'Укажите пример с ошибкой в образовании формы слова',
                answers: ['Пара туфель', 'Несколько полотенец', 'Около пятиста километров'],
                rightAnswer: 3,
            },
            {
                question: 'В каком ряду оба слова с НЕ пишутся слитно?',
                answers: ['(не)вежда, (не)подумал', '(не)более дюжины, ещё (не)распустившаяся сирень', 'совершенно (не)интересный фильм, (не)исследованные пути'],
                rightAnswer: 3,
            },
            {
                question: 'В каком слове верно выделена буква, обозначающая ударный гласный звук?',
                answers: ['сОзыв', 'красивЕе', 'клялАсь'],
                rightAnswer: 3,
            },
            {
                question: 'Союз КАК называют самым капризным из всех. Вероятность запятой перед ним – 50 на 50. Как объяснить отсутствие запятой в предложении: «Дождь льёт как из ведра?»',
                answers: ['Здесь есть сравнительный оборот', 'Здесь есть фразеологизм', 'Здесь есть ошибка'],
                rightAnswer: 2,
            }
        ],
        testHeading: 'Тест на грамотность',
        testBtn: 'Узнать результат'
    };

    localStorage.setItem('key', JSON.stringify(test));

    try {
        var localDataTest = JSON.parse(localStorage.getItem('key'));
    } catch (e) {
        alert('Произошла небольшая ошибка, постараемся ее устранить');
    }

    var content = tmpl(html, {
        data: localDataTest
    });

    $('body').append(content);

    var yourArray = [];
    var myArray = [];
    var count = 0;

    function arrayRight () {
        for (var i = 0; i < test.testArray.length; i++) {
            var n = test.testArray[i].rightAnswer;
            myArray.push(n);
        }
        return myArray;
    }
    console.log(arrayRight())

    var $body = $('body');
    var $modal;


    $('#Btn').on('click', function(e) {
        var element = $('.answer');
        $modal = $('<div class="modal-box-overlay"><div class="modal-box"><h3>' + checkAnswers(element) + '</h3></div></div>');
        $body.append($modal);
        window.onscroll = function(e) {
            window.scroll(0,0);
        };

        $('.modal-box').on('click', function(e){
            e.stopPropagation();
        });

        $('.modal-box-overlay').one('click', hideModal);

    });


    function hideModal() {
        $modal.remove();
        location.reload();
    }

    function arrayChecked (element) {
        for (var j = 0; j < element.length; j++) {
            if(element[j].type==='radio' && element[j].checked) {
                yourArray.push(element[j].value)
            }
        }
        return yourArray;
    }

    function checkAnswers(element) {
        console.log(arrayChecked(element));
        var rightAnswer = 0;
        for (var k = 0; k < yourArray.length; k++) {
            if (yourArray[k] == myArray[k] && yourArray.length == myArray.length) {
                rightAnswer++;
            }
        }
        if (rightAnswer == myArray.length) {
            return 'Поздравляю! Вы успешно прошли тест.'
        }
        if (yourArray.length == myArray.length && rightAnswer != myArray.length) {
            return 'Ваш результат ' + rightAnswer + ' из ' + myArray.length + '.'
        } else {
            return 'Вы не ответили на все вопросы '
        }
    }
});
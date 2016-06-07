$(function () {

    // tabs in modal window
    var $tabs = $('ul.tabs-menu li');

    $tabs.on('click', function () {
        var $clickedTab = $(this);
        var $contentTab = $clickedTab.attr('data-id');

        console.log($clickedTab.attr('data-id'));

        $tabs.removeClass('active');
        $clickedTab.addClass('active');

        $('#' + $contentTab).addClass('active');
        $('#' + $contentTab).siblings().removeClass('active');
    })

})

$(function () {
    var $mobileBtn = $('.mobile-menu-btn');

    $mobileBtn.on('click', function (event) {

        event.preventDefault();

        var $id = $mobileBtn.attr('data-id');

        $('#' + $id).toggle();
    });

});

$(function () {

    // modal window in action

    var $btn = $('button.module-active-btn');
    var $closeBtn = $('.close-btn');
    var $body = $('body');
    var $clickedBtn,
        $activeModalId,
        $activeModal;

    $btn.on('click', function () {
        $clickedBtn = $(this);
        $activeModalId = $clickedBtn.attr('data-id');//опреляем ID btn
        $activeModal = $('#' + $activeModalId);//ищем модальное окно с таким ID

        $body.css(
            {
                'overflow': 'hidden',
                'padding-right': scrollbarWidth()
            }); //убираем скроллбар

        $('.affix .nav-top').addClass('fix-nav');//от смещения фикс меню

        $activeModal.addClass('active');
    });

    function scrollbarWidth() {//определяем ширину скроллбара
        var w1 = $body.innerWidth();
        $body.css('overflow', 'hidden');
        var w2 = $body.innerWidth();
        return (w2 - w1)
    }

    $closeBtn.on('click', function () {//при нажатии на 'крестик'
        $activeModal.removeClass('active');
        $body.css(
            {
                'overflow': '',
                'padding-right': '0'
            });

        $('.affix .nav-top').removeClass('fix-nav');
    });

    $(window).on('click', function (event) {//при нажатии на 'overlay'

        if ($(event.target).is($activeModal)) {
            $activeModal.removeClass('active');
            $body.css(
                {
                    'overflow': '',
                    'padding-right': '0'
                });

            $('.affix .nav-top').removeClass('fix-nav');
        }
    });
});
    
    // fixed menu

    $(function () {
        var $h = $('.main-page').next().offset().top;

        $(window).scroll(function () {
            if ($(window).scrollTop() > $h) {
                $('header').addClass('affix');
            } else {
                $('header').removeClass('affix');
            }
        })
    });


    //show input-search in fix-menu

    $(function () {
        var $searchBtn = $('.affix .search-btn');

        $searchBtn.on('click', function () {
            $('.affix .input-search').css('display', 'block');
        });

    });

    // slider
    $(function () {
        //rotation speed and timer
        var speed = 1000000;
        
        var run = setInterval(rotate, speed);
        var slides = $('.slide');
        var container = $('#slides ul');
        var elm = container.find(':first-child').prop("tagName");
        var item_width = container.width();
        var previous = 'prev'; //id of previous button
        var next = 'next'; //id of next button
        slides.width(item_width); //set the slides to the correct pixel width
        container.parent().width(item_width);
        container.width(slides.length * item_width); //set the slides container to the correct total width
        container.find(elm + ':first').before(container.find(elm + ':last'));
        resetSlides();

        //if user clicked on prev button

        $('#buttons a').click(function (e) {
            //slide the item

            if (container.is(':animated')) {
                return false;
            }
            if (e.target.id == previous) {
                container.stop().animate({
                    'left': 0
                }, 2000, function () {
                    container.find(elm + ':first').before(container.find(elm + ':last'));
                    resetSlides();
                });
            }

            if (e.target.id == next) {
                container.stop().animate({
                    'left': item_width * -2
                }, 2000, function () {
                    container.find(elm + ':last').after(container.find(elm + ':first'));
                    resetSlides();
                });
            }

            //cancel the link behavior
            return false;

        });

        //if mouse hover, pause the auto rotation, otherwise rotate it
        container.parent().mouseenter(function () {
            clearInterval(run);
        }).mouseleave(function () {
            run = setInterval(rotate, speed);
        });


        function resetSlides() {
            //and adjust the container so current is in the frame
            container.css({
                'left': -1 * item_width
            });
        }

        //a simple function to click next link
//a timer will call this function, and the rotation will begin

        function rotate() {
            $('#next').click();
        }
    });







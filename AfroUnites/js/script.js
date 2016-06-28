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
    var $mobileBtn = $('.mobile-menu-btn'),
        $mobileBtnIcon = $mobileBtn.children('.fa');

    $mobileBtn.on('click', function () {
        var $id = $mobileBtn.attr('data-id');
        $('#' + $id).toggle();

        if($('#' + $id).is(':visible')) {
            $mobileBtnIcon.removeClass('fa-bars').addClass('fa-angle-up');
        } else {
            $mobileBtnIcon.removeClass('fa-angle-up').addClass('fa-bars');
        }
    });

    var $mobileMenu = $('#mobile');
    var $searchBtn = $('.search-btn');
    var $visibleInput = $('.input-search');

    function hideMenu () {
        $mobileMenu.hide();
        $mobileBtnIcon.removeClass('fa-angle-up').addClass('fa-bars');
    }
    //show input-search in fix-menu
    if (window.innerWidth > 767) {
        $searchBtn.removeClass('mobile-search-btn');
    } else {
        $searchBtn.addClass('mobile-search-btn');
    }

    $('body').on('click', '.affix .search-btn, .mobile-search-btn', function () {
        $visibleInput.toggle();

        if($visibleInput.is(':visible')) {
            $visibleInput.select();
        }

        $('.nav-top').toggleClass('input-show');
        if (window.innerWidth > 767) {
            $('#mobile').toggle();
        } else {
            hideMenu ();
        }
    });

    $(window).on('resize', function () {
        if(window.innerWidth > 767) {
            $mobileMenu.show();
            $searchBtn.removeClass('mobile-search-btn');
        } else {
            hideMenu ();
            $searchBtn.addClass('mobile-search-btn');
        }
    })

    // fixed menu

        var $h = $('.main-page').next().offset().top;

        $(window).scroll(function () {
            if ($(window).scrollTop() > $h - 200) {
                $('header').addClass('affix');
                $('body').css('margin-top', $('.affix').height() + 15);
                if(window.innerWidth > 767) {
                    $visibleInput.hide();
                }
            } else {
                $('header').removeClass('affix');
                $('body').css('margin-top', '0');
                if(window.innerWidth > 767) {
                    $visibleInput.show();
                }
            }
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

    // slider
$(function () {
        //rotation speed and timer
        var speed = 10000;

        var run = setInterval(rotate, speed);
        var slides = $('.slide');
        var container = $('#slides ul');
        var elm = container.find(':first-child').prop("tagName");
        var item_width;
	function widthTake() {
		item_width = container.width()
		slides.width(item_width); //set the slides to the correct pixel width
        	container.width(slides.length * item_width); //set the slides container to the correct total width
	}

	container.parent().width(item_width);

	widthTake();
	$(window).on('resize', widthTake()); 
   
	container.find(elm + ':first').before(container.find(elm + ':last'));

        var previous = 'prev'; //id of previous button
        var next = 'next'; //id of next button

 
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

// toggle instaFoto
$(function () {
    var $instaToggleBtn =  $('.show-btn'),
        $instaToggleIcon = $('.show-btn').children('.fa');

        $instaToggleBtn.on ('click', function () {
        $('.insta-group').toggle();
        if($('.insta-group').is(':visible')) {
            $instaToggleIcon.removeClass('fa-angle-down').addClass('fa-angle-up');
        } else {
            $instaToggleIcon.removeClass('fa-angle-up').addClass('fa-angle-down');
        }
    });

})








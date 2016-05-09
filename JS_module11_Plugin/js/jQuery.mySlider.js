(function ($) {

    $.fn.mySlider = function (options) {

        var defaults = {
            pixelsOffset: 100,
            lengthHiddenEl: 6
        };

        var settings = $.extend(defaults, options);

        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');

        var lengthHiddenEl = settings.lengthHiddenEl;
        var pixelsOffset = settings.pixelsOffset;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = -((elementsCount - lengthHiddenEl) * pixelsOffset);
        var maximumOffset = 0;


        leftUIEl.click(function() {

            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        rightUIEl.click(function() {

            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        return this;

    };

})(jQuery);
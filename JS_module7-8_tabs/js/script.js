$(function() {
    $('ul.tabs__menu li:first').addClass ('active');
    $('ul.tabs_text li:first').css ('display', 'block');
    $('ul.tabs__menu li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
		var $content = $('ul.tabs-text li');
	$content.eq($(this).index()).css ('display', 'block')
		.siblings().css ('display', 'none');
		console.log($content.eq($(this).index()));
		console.log($(this).index())
		// 
    })
})
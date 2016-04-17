$(function(){
        $('.input').hover(
			function(event){
				$(this).removeClass('none').addClass('block');
			},
			function(event){
				$(this).removeClass('block').addClass('none');
        }); 
		$('button').on('click', function() {
				$('.input').toggleClass('none');
				if ($(this).html()=='Show prompts') {
					$(this).html('Hide prompts')
				} else {
					$(this).html('Show prompts');
				}
		});
		})
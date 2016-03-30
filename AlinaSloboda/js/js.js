//reload
var jj=window.innerWidth;
setInterval(function(){
if(jj!=window.innerWidth)
{
location.reload(true);
}
},500);

//animate signature
window.signature = {
  initialize: function() {
    return $('.signature svg').each(function() {
      var delay, i, len, length, path, paths, previousStrokeLength, results, speed;
      paths = $('path, circle, rect', this);
      delay = 0;
      results = [];
      for (i = 0, len = paths.length; i < len; i++) {
        path = paths[i];
        length = path.getTotalLength();
        previousStrokeLength = speed || 0;
        speed = length < 100 ? 10 : Math.floor(length);
        delay += previousStrokeLength + 100;
        results.push($(path).css('transition', 'none').attr('data-length', length).attr('data-speed', speed).attr('data-delay', delay).attr('stroke-dashoffset', length).attr('stroke-dasharray', length + ',' + length));
      }
      return results;
    });
  },
  animate: function() {
    return $('.signature svg').each(function() {
      var delay, i, len, length, path, paths, results, speed;
      paths = $('path, circle, rect', this);
      results = [];
      for (i = 0, len = paths.length; i < len; i++) {
        path = paths[i];
        length = $(path).attr('data-length');
        speed = $(path).attr('data-speed');
        delay = $(path).attr('data-delay');
        results.push($(path).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear').attr('stroke-dashoffset', '0'));
      }
      return results;
    });
  }
};

$(document).ready(function() {
  return window.signature.initialize();
});

$(window).load(function() {
  return window.signature.animate();
});

//animate scroll
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//up
$(document).ready(function(){
	$(function(){
		var H = $('#header').height()/2; 
		$('#up').hide();
		$(window).scroll(function(){
		if($(this).scrollTop()>H) {
			$('#up').fadeIn();
			} else $('#up').fadeOut();
		})
	$('#up').click(function() {
		$('body').animate(
		{scrollTop:0}, 1000);
		})
	})
})

//change page2 <621px
$(window).resize(function() {
	if(window.innerWidth<621) {
		$('.more').click(function(){
			$('.work-title').css('display', 'none');
			$('.close').css('display', 'block');
			$('.work-chapter').css('display', 'none');
		});
	} else
		$('.more').click(function(){
		$('#page2 .side').css('width', '30%');
		$('#page2 .main').css('width', '70%');
		$('#page2 .main').css('left','30%');
		$('.work-title').css('display', 'none');
		$('.close').css('display', 'block');
		$('.work-chapter').css('display', 'none');
		$('.item2').css('margin', '0');
	});
});
//change page2 <621px
$(window).resize(function() {
	if(window.innerWidth<621) {
		$('.close').click(function(){	
			$('.open-chapter').css('display', 'none');
			$('.work-title').css('display', 'block');
			$('.close').css('display', 'none');
			$('.work-chapter').css('display', 'block');
		});
	} else  
	$('.close').click(function(){
		$('#page2 .side').css('width', '50%');
		$('#page2 .main').css('width', '50%');
		$('#page2 .main').css('left', '50%');	
		$('.open-chapter').css('display', 'none');
		$('.work-title').css('display', 'block');
		$('.close').css('display', 'none');
		$('.work-chapter').css('display', 'block');
	});
});
//no two open projects
$(document).ready(function(){ 
	$('.photosets .more').click(function(){
		$('.photosets .open-chapter').css('display', 'block');
		$('.varus .open-chapter').css('display', 'none');
		$('.billboards .open-chapter').css('display', 'none');
	});
	$('.varus .more').click(function(){
		$('.varus .open-chapter').css('display', 'block');
		$('.photosets .open-chapter').css('display', 'none');
		$('.billboards .open-chapter').css('display', 'none');
	});
	$('.billboards .more').click(function(){
		$('.billboards .open-chapter').css('display', 'block');
		$('.varus .open-chapter').css('display', 'none');
		$('.photosets .open-chapter').css('display', 'none');
	});
});
//next 
$(document).ready(function(){ 
	$('.photosets .next').click(function(){
		$('.varus .open-chapter').css('display', 'block');
		$('.photosets .open-chapter').css('display', 'none');
	});
	$('.varus .next').click(function(){
		$('.varus .open-chapter').css('display', 'none');
		$('.billboards .open-chapter').css('display', 'block');
	});
	$('.billboards .next').click(function(){
		$('.photosets .open-chapter').css('display', 'block');
		$('.billboards .open-chapter').css('display', 'none');
	});
});
//slider
$(document).ready(function(){
	var widthSlider = $('#slider-container1').width();
	$('.photosets .slides>li').width(widthSlider);
	$('.photosets .slides').width(widthSlider*$('.photosets .slides>li').length);
	//position
	$('.photosets .slides').css('left',-widthSlider);
	$('.photosets .slides>li:last-child').prependTo('.photosets .slides');
	//move slides forward
	function nextSlide(){
		$('.photosets .slides').animate({
			'margin-left':-widthSlider
		}, 500, function() {
			$('.photosets .slides>li:first-child').appendTo('.photosets .slides');
			$('.photosets .slides').css('margin-left', 0);
		});
	}
	//move slides backward
	function prevSlide(){
		$('.photosets .slides').animate({
			'margin-left':widthSlider
		}, 500, function() {
			$('.photosets .slides>li:last-child').prependTo('.photosets .slides');
			$('.photosets .slides').css('margin-left', 0);
		});
	}
	//manage
	$('.photosets .right').click(nextSlide);
	$('.photosets .left').click(prevSlide);
});
	$(document).ready(function(){
	var widthSlider = $('#slider-container2').width();
	$('.varus .slides>li').width(widthSlider);
	$('.varus .slides').width(widthSlider*$('.varus .slides>li').length);
	//position
	$('.varus .slides').css('left',-widthSlider);
	$('.varus .slides>li:last-child').prependTo('.varus .slides');
	//move slides forward
	function nextSlide(){
		$('.varus .slides').animate({
			'margin-left':-widthSlider
		}, 500, function() {
			$('.varus .slides>li:first-child').appendTo('.varus .slides');
			$('.varus .slides').css('margin-left', 0);
		});
	}
	//move slides backward
	function prevSlide(){
		$('.varus .slides').animate({
			'margin-left':widthSlider
		}, 500, function() {
			$('.varus .slides>li:last-child').prependTo('.varus.slides');
			$('.varus .slides').css('margin-left', 0);
		});
	}
	//manage
	$('.varus .right').click(nextSlide);
	$('.varus .left').click(prevSlide);
});
$(document).ready(function(){
	var widthSlider = $('#slider-container3').width();
	$('.billboards .slides>li').width(widthSlider);
	$('.billboards .slides').width(widthSlider*$('.billboards .slides>li').length);
	//position
	$('.billboards .slides').css('left',-widthSlider);
	$('.billboards .slides>li:last-child').prependTo('.billboards .slides');
	//move slides forward
	function nextSlide(){
		$('.billboards .slides').animate({
			'margin-left':-widthSlider
		}, 500, function() {
			$('.billboards .slides>li:first-child').appendTo('.billboards .slides');
			$('.billboards .slides').css('margin-left', 0);
		});
	}
	//move slides backward
	function prevSlide(){
		$('.billboards .slides').animate({
			'margin-left':widthSlider
		}, 500, function() {
			$('.billboards .slides>li:last-child').prependTo('.billboards .slides');
			$('.billboards .slides').css('margin-left', 0);
		});
	}
	//manage
	$('.billboards .right').click(nextSlide);
	$('.billboards .left').click(prevSlide);
});
//fixer 
$(document).ready(function(){
        $('.side').fixer({
            gap: 0
        });
});

//form
$('#send').click(function(){
	$('#wrap').css('display', 'block');
	$('.writeme').css('display', 'block');
});
$('#wrap').click(function(){
	$('#wrap').css('display', 'none');
	$('.writeme').css('display', 'none');
});

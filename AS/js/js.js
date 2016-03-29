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
	var widthSlider = $('#slider-container').width();
	
	$('.slides>li').width(widthSlider);
	$('.slides').width(widthSlider*$('.slides>li').length);
	//position
	$('.slides').css('left',-widthSlider);
	$('.slides>li:last-child').prependTo('.slides');
	//move slides forward
	function nextSlide(){
		$('.slides').animate({
			'margin-left':-widthSlider
		}, 500, function() {
			$('.slides>li:first-child').appendTo('.slides');
			$('.slides').css('margin-left', 0);
		});
	}
	//move slides backward
	function prevSlide(){
		$('.slides').animate({
			'margin-left':widthSlider
		}, 500, function() {
			$('.slides>li:last-child').prependTo('.slides');
			$('.slides').css('margin-left', 0);
		});
	}
	//manage
	$('#right').click(nextSlide);
	$('#left').click(prevSlide);
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
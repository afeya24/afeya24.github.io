var gallery=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
var slide=0;
function change(e){
	if(e==undefined) e=window.event;
	switch(e.keyCode){
	case 40:
	document.getElementById('slider').style.backgroundImage='url(./img/'+gallery[slide]+')';
	break;
	case 39:
	right();
	break;
	case 38:
	document.getElementById('slider').style.backgroundImage='url(./img/'+gallery[slide]+')';
	break;
	case 37:
	left();
	break;
	}
}
function right(){
    slide++;
	if(slide==gallery.length)		 slide=0;
document.getElementById('slider').style.backgroundImage='url(./img/'+gallery[slide]+')';
	
}
function left(){
   slide--;
if(slide<0)		 slide=gallery.length-1;	
document.getElementById('slider').style.backgroundImage='url(./img/'+gallery[slide]+')';
     
	
}
document.getElementById('left').onclick=left;
document.getElementById('right').onclick=right;
document.onkeydown=change;

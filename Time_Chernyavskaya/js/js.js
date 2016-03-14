var alarm=prompt('Заведите будильник =)', 'в формате ч:м')
var arrayDat=alarm.split(':');
function clock(){
	var dat=new Date();
    var h=dat.getHours();
    var m=dat.getMinutes();
	document.getElementById('alarm1').innerHTML=dat.toLocaleTimeString();
	if(arrayDat[0]<=h) {
        if(arrayDat[1]<=m) 
		document.getElementById('alarm2').style.display='block';
    }
}
setInterval(clock, 1000) 
console.log(x)
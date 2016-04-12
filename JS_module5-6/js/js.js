function makeTimer() {
	var myTimer = document.getElementById ('my_timer');
	var time = myTimer.innerHTML;
	var array = time.split (':');
	var h = array[0];
	var min = array[1];
	var s = array[2];
setInterval(function qetHours () {
	h++;
	if (h < 10) {
		h = '0' + h;
	 };
}, 3600000000);
setInterval(function getMinutes () {
	min++;
	if (min < 10) {
		 min = '0' + min;
	};
}, 60000);
setInterval(function getSeconds () {
	s++;
	 if (s < 10) {
		 s = '0' + s;
	 };
}, 1000);
document.getElementById("my_timer").innerHTML = h+':'+min+':'+s;
};
window.addEventListener('load', makeTimer);








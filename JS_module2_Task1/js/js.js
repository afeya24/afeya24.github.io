var a=prompt('Введите число');
var b=prompt('Введите степень, в которую нужно возвести число');
alert(myPow (a, b));

function myPow(a, b) {
	var result = 1;
	for(var i = 0; i < b; i++) {
		result *= a;
	}
	return(result);
}

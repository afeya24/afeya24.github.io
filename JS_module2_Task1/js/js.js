var a=+prompt('Введите число');
var b=+prompt('Введите степень, в которую нужно возвести число');
console.log(myPow (a, b));

function myPow(a, b) {
	if (b>0) {
		Power(a, b);
	}
	else {
	    return (1/Power(a, -b))
	}
}

 function Power(a, b) {
	  var result = 1;
	  for(var i = 0; i < b; i++) {
		result *= a;
	  }
	  return(result);
	}
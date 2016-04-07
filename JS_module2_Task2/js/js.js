var Names = [];

for (i = 0; i<5; i++) {
	Names[i]=prompt('Введите имя для СОХРАНЕНИЯ в систему'); 
};

console.log(Names);
var YourName = prompt ('Введите имя ПОЛЬЗОВАТЕЛЯ');

var equalsCount = 0;

for (var i in Names) {
    if (YourName == Names[i]) 
	equalsCount++;
};

if (equalsCount == 0) {
    alert('Ошибка!');
} else alert(YourName +' , Вы успешно вошли');

	
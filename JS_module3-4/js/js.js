var body = document.body;
body.style. padding = '0 250px';

var myPage = {
  myHeader: function (headingText) {
    var heading= document.createElement('h2');
    heading.classList.add('text-center');
    heading.innerHTML = headingText;

    body.appendChild(heading);
},

  myQuestion: function (questionText) {
    var question= document.createElement('h3');
    question.classList.add('text-left');
    question.innerHTML = questionText;

    body.appendChild(question);
  },
  
  myAnswer: function (answerText) {
    var answerDiv = document.createElement('div');
	var answerLabel = document.createElement('label');
	var answerLabelText = document.createTextNode(answerText);
	var answerInput = document.createElement('input');
	
    answerDiv.classList.add('checkbox');
	answerDiv.style.marginLeft = '27px';
	answerInput.type = 'checkbox';

    body.appendChild(answerDiv);
	answerDiv.appendChild(answerLabel);
	answerLabel.appendChild(answerLabelText);
	answerLabel.insertBefore(answerInput, answerLabelText);
  },
  
  myButton: function (buttonText) {
	var buttonDiv = document.createElement('div');
    var buttonsend = document.createElement('button');
	
	buttonDiv.style.margin = '0 auto';
	buttonDiv.style.width = '500px';
	buttonsend.type = 'button';
    buttonsend.classList.add('btn', 'btn-success', 'btn-lg', 'btn-block');
    buttonsend.innerHTML = buttonText;

    body.appendChild(buttonDiv);
	buttonDiv.appendChild(buttonsend);
  }
};

myPage.myHeader('Тест по программированию');

myPage.myQuestion ('1. Вопрос №1');
myPage.myAnswer ('Вариант ответа №1');
myPage.myAnswer('Вариант ответа №2');
myPage.myAnswer('Вариант ответа №3');

myPage.myQuestion('2. Вопрос №2');
myPage.myAnswer('Вариант ответа №1');
myPage.myAnswer('Вариант ответа №2');
myPage.myAnswer('Вариант ответа №3');

myPage.myQuestion('3. Вопрос №3');
myPage.myAnswer('Вариант ответа №1');
myPage.myAnswer('Вариант ответа №2');
myPage.myAnswer('Вариант ответа №3');

myPage.myButton('Проверить мои результаты');

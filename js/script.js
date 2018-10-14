(function task1(){

// В онлайн-сервісі знайдіть:
// всі символи;

let a = /./g

// всі пробіли;

let b = / /g

// всі пробільні символи;

let c = /\s/g

// всі цифри;

let d = /[0-9]/g

// всі числа;

let e = /\d/g

// всі слова;

let k = /\w/g

// перше слово другого речення

let l = /\..[A-Z]\w+/

// слова, що починаються на f, s, t, w

let m = /\b[fstw]+\w+\b/ig

// останнє слово кожного речення;

let n = /\b\w+\b\./g

// домени верхнього рівня.

let j = /\.+\w+\s/g
	
})();

// Створіть проект validator з формою вводу даних:
// <form id="form1" action="#" method="GET">
//   <p><label><input id="fname" name="name" placeholder="Введіть ім'я"></label></p>
//   <p><label><input id="fmail" name="email" placeholder="Введіть e-mail"> формат: email@site.com</label></p>
//   <p><label><input id="ftel" name="phone" placeholder="Введіть телефон"> формат: +38 (099) 999-99-99</label></p>
//   <p><input type="submit" value="Відправити"></p>
// </form>

// Напишіть функцію валідації імені, ім'я повинно складатися лише з латинських літер, без пробілів, перша літера велика.
// function validName(s){
//   var err = 'Невірний формат імені!\nФормат: латинські літери, перша - велика.';   ...
//   якщо введено невірні дані: alert(err);
//   return true або false;
// }
// Доступ до введених користувачем даних здійснюється таким чином:
// змінна = document.getElementById('ідентифікатор').value;
// var a = document.getElementById('fname').value;
// Напишіть функцію валідації e-mail.
// Логін повинен складатися з латинських символів, символів мінус, підкреслювання та крапка.
// Домен повинен складатися лише з латинських символів.
// Доменна зона може складатися з 2-5 латинських символів.
// Регістр не має значення.
// Напишіть функцію фалідації телефона.
// Пробіли, дужки, мінуси, можуть бути відсутні.
// +380 - обов'язкові цифри, приймаються телефони лише України, 12 цифр.
// +380682091234
// +38068 209-12-34
// +3 8 (068) 209 12 34
// +38(068)209-12-34
// і т.п.
// Створіть валідатор форми:
// document.getElementById("form1").onsubmit = function() {
//   // напишіть алгоритм валідатора
//   // створіть код по алгоритму
// }
// Якщо в функції onsubmit використати оператор return false;, то відправка даних на сервер перерветься, дані не будуть відправлені.


let nameFormat = /^[A-Z][a-z]+$/;
let mailFormat = /^\w+@\w+\.\w{2,5}$/i;
let telFormat = /^\+3 ?8 ?\(?0\d\d ?\)? ?\d{3}[- ]?\d\d[- ]?\d\d$/;


document.getElementById("form1").onsubmit = function(even){

	event.preventDefault();

	let name = document.getElementById('fname').value;
	let mail = document.getElementById('fmail').value;
	let tel = document.getElementById('ftel').value;

	if(validName(name)&&validMail(mail)&&validTelephone(tel)){

		alert("Форму відправлено!");
		return true;
	}

	else{
		
		alert("Форму не відправлено!");
		return false;
	}
}


function validName(s){

  let err = 'Невірний формат імені!\nФормат: латинські літери, перша - велика.';

  if(nameFormat.test(s)){

	return true;

	}

	else{

		alert(err);
		return false;
	}
}

function validMail(m){

  let err = 'Невірний формат електронної адреси!';

  if(mailFormat.test(m)){

	return true;

	}

	else{

		alert(err);
		return false;
	}
}

function validTelephone(t){

  let err = 'Невірний формат телефону!';

  if(telFormat.test(t)){

	return true;

	}

	else{

		alert(err);
		return false;
	}
}








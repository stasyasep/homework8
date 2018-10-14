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


// let n = document.querySelector('#fmail');
// let g = document.querySelector('#ftel');

// g.addEventListener("input", function() {

// 	let k = document.querySelector('#fmail').value;

// 	if(re.test(k)){
// 		console.log("true");
// 	}

// 	let f = document.querySelector('#ftel').value;

// 	if(tel.test(f)){
// 		console.log("true2");
// 	}

// 	console.log(f)s;


//   });


let nameFormat = /^[A-Z][a-z]+$/;
let mailFormat = /^\w+@\w+\.\w{2,5}$/i;
let telFormat = /^\+3 ?8 ?\(?0\d\d ?\)? ?\d{3}[- ]?\d\d[- ]?\d\d$/;


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






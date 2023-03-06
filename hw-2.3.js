let password = 'пароль';
let answer = prompt("Введите пароль");
if (answer === password) {
    alert("Пароль введен верно");
} else {
    alert("Доступ запрешен");
}
// Задание 1

// Задание 2

let c = 5;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3

let d = 50;
let e = 105;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4

let a = Number('2');
let b = Number('3');
alert(a + b);

// или

let a = 2;
let b = 3;
alert(a + b);

// Задание 5

let month = prompt('Укажите месяц');
switch (month) {
    case '1':
        alert("Зима");
        break;
    case '2':
        alert("Зима");
        break;
    case '12':
        alert("Зима");
        break;
    case '3':
        alert("Весна");
        break;
    case '4':
        alert("Весна");
        break;
    case '5':
        alert("Весна");
        break;
    case '6':
        alert("Лето");
        break;
    case '7':
        alert("Лето");
        break;
    case '8':
        alert("Лето");
        break;
    case '9':
        alert("Осень");
        break;
    case '10':
        alert("Осень");
        break;
    case '11':
        alert("Осень");
        break;
    default:
        alert('В году всего 12 месяцев');
        break;
}
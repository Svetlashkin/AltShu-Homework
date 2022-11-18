let userAge = +prompt("Введите Ваш возраст");

if (isNaN(userAge)) {
    alert ("Вы ввели НЕ число!");
} else if (userAge <= -1) {
    alert ("Вы, верно, ещё не родились");
} else if (userAge > 120) {
    alert ("Вы, сударь, вероятно, вампир");
} else if (userAge < 18) {
    alert ("Доступ запрещен");
} else {
    alert ("Доступ разрешен");
}
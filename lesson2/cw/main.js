//1

let first = +prompt('Введіть перше число');
 let second = +prompt('Введіть друге число');
 if (first > second){
    console.log(first)
 } else if (first === second){
    console.log(' рівні')
 } else {
    console.log(second);
 }

 //2
let flot = prompt('№ Квартири')
if (flot >= 1 && flot <= 20){
    alert( 'У першому під`їзді')
}
 else if (flot >= 21 &&  flot <= 48 ){
    alert( 'У другому під`їзді')
}
else if (flot >= 49 &&  flot <= 90 ){
    alert( 'У третьому під`їзді')
} else {
    alert('Такої квартири не існує')
}

//3

let number = +prompt( 'Ведіть цифру')
if (number === 10){
    alert('ВІРНО')
}else {
    alert('НЕВІРНО')
}

//4

 let x = [13,45,56,76,78];
 if (typeof x === 'number') {
     alert('число')
 } else if (typeof x === "string") {
     alert('текст')
 } else if (typeof x === "object") {
     alert('обєкт')
 } else if (typeof x === "boolean") {
     alert ('булеве значення')
 } else {
     alert('????')
}



 //6




let game = +prompt("Введите число от 1 до 5")
switch(game)
{
    case 1:
      alert("Вітаємо! Ви виграли Aвтомобіль!");
       break;
    case 2:
        alert("Вітаємо! Ви виграли Телефон!");
        break;
    case 3:
        alert("Вітаємо! Ви виграли 1000000$ !");
        break;
    case 4:
        alert("Вітаємо! Ви виграли Подорож !");
        break;
    case 5:
        alert("Вітаємо! Ви виграли Сертефікат в магазин Ева!");
        break;

    default:
       alert("Ви ввели не те число")
 }

//5

let lesson = +prompt('чи ми йдемо сьогодні в OKTEN на навчання?')
if(lesson >= 10 && lesson <= 22){
    document.write('ми йдемо ВЧИТИСЯ')
}else{
    document.write('сидимо вдома і вчимося ОНЛАЙН')
}



//1
let time = prompt('Введіть хвилину від 0 до 59')
 if (time >= 0 && time <= 14){
     console.log('Перша чверть')
 }
 else if ( time =>15 && time <= 29){
     console.log('Друга чверть')
 }
 else if ( time =>29 && time <= 44){
     console.log('Третя чверть')
 }
 else if ( time =>44 && time <= 59){
     console.log('Четверта чверть')
 }
 else{
     console.log('Не входить ')
 }

 //2

let day = prompt('Введіть день від 0 до 31')
 if (day >= 1 && day <= 10){
     console.log('Перша Декада')
 }
 else  if (day >= 11 && day <= 20){
     console.log('Друга Декада')
 }
 else  if (day >= 21 && day <= 31){
     console.log('Третя Декада')
 }
 else {
     console.log('Помтлка')
 }

 //3

let test = prompt('true or false')
if(test === true){
    console.log('Вірно')
}else {
    console.log('Невірно')
}

//4

let a = prompt('Ведіть цифру - 0 ')
if (a === 0) {
    console.log('Вірно')
} else{
    console.log('Невірно')
}

 //5
 let schedule = prompt("Введите число? 1-7")
switch (schedule){
    case '1':
    alert('Відвідування театру');
        break;
    case'2':
        alert('Зустріч з бвтьками 0 16.00');
        break;
    case'3':
        alert('Прогулянка о 18.00');
        break;
    case'4':
        alert('День виконення дз');
        break;
    case'5':
        alert('Зустріч з репититором');
        break;
    case'6':
        alert('Зустріч з друзями');
        break;
    case'7':
        alert('Вихідний');
        break;

}
 //6


let year = prompt('Високосний рік чи ні?')
if(year %4 === 0 ){
    alert('Високосний рік')
}else {
    alert(' Не Високосний рік')
}

 //7

let js = prompt("Яка «офіційна» назва JavaScript?")
if(js === "ECMAScript" ){
    alert('«Правильно!»')
}else{
    alert( '«Не знаєте? ECMAScript!»')
}
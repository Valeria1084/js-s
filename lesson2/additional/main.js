//1

let friends = ["Ivan", "Slavik","Grisha", "Lera", "Ira"];
let arr = friends.length
if (arr >= 3) {
    console.log('це великий масив')
} else {
    console.log('це маленький масив')
}



//3
/*let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Багато';
}
 */
let a = 0;
let b = 2;
(a + b < 4) ?  console.log('Мало') :  console.log('Багато')

//4


/*let x= +prompt('Введите число')
if ( x < 1){
    alert('негативнe')
}
else  if (x >= 1 ){
    alert('позитивнe')
}
else  if (x === 0){
    alert('нулем')
}

 */

let x= +prompt('Введите число')

x < -1 ? ( alert('негативнe')) : x >= 1 ? (alert('позитивнe')) : (alert('нулем'));


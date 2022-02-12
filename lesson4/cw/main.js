//1
function min (a,b,c){
    if(a < b && a < c){
        document.write(a + "<br/>")
    } else if (b < a && b < c ) {
        document.write(b + "<br/>")
    } else{
        document.write(c  + "<br/>")
    }
}
min(40 ,90 ,80)

//2

function max (a,b,c){
    if(a > b && a > c){
        document.write(a + "<br/>")
    } else if (b > a && b > c) {
        document.write(b + "<br/>")
    } else{
        document.write(c + "<br/>")
    }
}
max(40 ,90 ,100)

//3
 let arr = [300,800,3000,1209,6,0.1,5]
function arraeMax (array){
    let max = array[0]
    for(const element of array ) {

        if(element> max) {
            max = element;
        }
    }
    return max
}
document.write('Max:' + arraeMax(arr) + "<br/>")
//4
let arrMin = [300,800,3000,1209,6,0.1,5]
function arraeMin (array){
    let min = array[0]
    for(const element of array ) {

        if(element < min) {
            min = element;
        }
    }
    return min
}
document.write('Min:' + arraeMin(arrMin) + "<br/>")
//5
 function sumElement (array){
     let sum = 0;
     for (const arrayElement of array) {
          sum += arrayElement;
         sum = arrayElement + sum;
    } return sum;
     }
 document.write( 'Sum array:' + ' ' + Math.floor(sumElement(arrMin)) + "<br/>")

//6
let arrMid = [50,70,80,90,100,40,30,20,10]
function sumElement (array){
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
        sum = arrayElement + sum;
    } return sum/array.length;
}
document.write( 'Sum middle:' + ' ' + Math.floor(sumElement(arrMid)) + "<br/>")

//7

function min_max(array) {
    let min = arguments[0]
    let max = arguments[0]
    for (arrayElement of arguments) {
        if (arrayElement > max) {
            max = arrayElement;
        }
        if (arrayElement < min) {
            min = arrayElement;
        }
    }
    console.log("max", max);
    return min;
}
document.write('min :' + min_max(300,500,700,5,8) + "<br/>")

//8
function random (array){
    let a = []
    for( i = 0 ; i < array; i++){
        a.push( Math.floor( Math.random()*100))
    }
    return a
}
document.write( random(5) + "<br/>")

//9
function random_1 (array_1,limit){
    let b = []
    for( i = 0 ; i < array_1; i++){
        b.push( Math.floor( Math.random()* limit))
    }
    return b
}
document.write( random_1(8,10) + "<br/>")

//10
 function reverse(arr) {
    let arry = [4,6,8,9];
     for (let i = arry.length - 1, ri = 0; i >= 0; i--, ri++) {
         newArr[ri] = newArr[i];
     }

     return newArr;
 }


let string1 ='hello world';
let string2 ='lorem ipsum';
let string3 ='javascript is cool';
//1
console.log(string1.length)
console.log(string2.length)
console.log(string3.length)
//2
let srtingA1 = string1.toUpperCase();
let srtingA2 = string2.toUpperCase();
let srtingA3 = string3.toUpperCase();
console.log(srtingA1)
console.log(srtingA2)
console.log(srtingA3)
//3
let string_a1 = srtingA1.toLocaleLowerCase();
let string_a2 = srtingA1.toLocaleLowerCase();
let string_a3 = srtingA1.toLocaleLowerCase();
console.log(string_a1);
console.log(string_a2);
console.log(string_a3);
//4
let str = ' dirty string   '
let strNew = str.trim(' ')
console.log(strNew)
//5
let stringToarray = (str_ar) => {
     return str_ar.split(' ');
 }
let str_ar = 'Каждый охотник желает знать';
let arr = stringToarray(str_ar);
console.log(arr)
//6
let delete_characters = (str_2, length) => {
return str_2.substr(0,length)
}
str_2 = 'Каждый охотник желает знать'

console.log(delete_characters(str_2, 5));
//7
let insert_dash = (str3) => {
    let strUp = str3.split(' ').join('-').toUpperCase()
    return strUp
}
let new1 = "HTML JavaScript PHP"
console.log(insert_dash(new1));
//8
    let upString = (strUp_1) =>{
    if(!strUp_1) return strUp_1;
        return strUp_1[0].toUpperCase() + strUp_1.slice(1)
    }

console.log(  upString('helloy word'))

//9
let  capitalize = (wor) =>{
    return wor.replace( /(^|\s)\S/g , function (a) {return a.toUpperCase()})
}
let wor = 'Каждый охотник желает знать';
console.log(capitalize(wor))



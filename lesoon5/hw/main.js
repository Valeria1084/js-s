
let rectangle = (a, b) => {
    let  s = a * b;
    return s;
}

console.log(rectangle(100, 100))
document.write('S ='+ ' ' + rectangle(100, 100) +  "<br/>")

//2

let circle = (r) => {
    let radiys = (r ** 2) * 3.14
    return radiys
}
document.write('R ='+' ' + circle(8) +  "<br/>" )

//3
let cylinder = (h,r) => {
    let scylinder = 2 *3.14 * h * r
    return scylinder
}
document.write('S_cylinder =' + ' ' + cylinder(10,20) + "<br/>")
// 4
arr = [40,50,35,24,34,43]
function  arry (arr){
    for (i = 0 ; i < arr.length;i++){
        document.write(' ' + arr[i])
    }
}
arry(arr)


//5

let par =(text) =>{
    document.write(`<p>${text}</p>`)
    document.write(`<hr>`)
    for (let i = 0; i <= 5; i++) {
        document.write(`<p>${i} - ${text}</p>`)
    }
}
par('pkppkpkpkpkpkpkplplplplplpkpk')

//6
let arr_1 = (text_1) => {
    document.write(`<ul>`)
    document.write(`<li>${text_1}</li>`)
    document.write(`<li>${text_1}</li>`)
    document.write(`<li>${text_1}</li>`)
    document.write(`</ul>`)
}
arr_1('Text');
//7
let arr_ul = (text,number) => {
    document.write(`<ul>`)
    for(let n = 0; n < number;n++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
arr_ul(`Lera Ponomarenko`,5)

//8

let tex_ = [23,'lera','ponomarenko',true,]
let mas = (array) => {
    document.write(`<ol>`)
    for(p = 0; p < tex_.length;p++){
        document.write(`<li>${array[p]}</li>`);
    }
    document.write(`</ol>`)
}
mas(tex_)

//9

let array_ = [{id: 1, name: 'Valeria', age: 18}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name: 'Olga', age: 45}];
let objArray = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
objArray(array_);

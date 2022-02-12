//
let mainHeader = document.getElementsByClassName('main_header')
for (let main of mainHeader){
    main.classList.add('main_header')
}
//
   let ul = document.getElementsByTagName('ul');
 console.log(ul)
ul[0].style.width = '400px';

let lisLi = document.getElementsByClassName('linkList')
for(let elemLi of lisLi) {
    elemLi.style.border = '1px solid blue';
    elemLi.style.width = '50%'
}
let linlLis = document.getElementsByClassName('listElement2')
console.log(linlLis)
//
let li = document.getElementsByTagName('li')
for(let elementLi of li ){
    elementLi.style.background = 'grey'
    elementLi.style.marginTop = '10px'
}
//
let all = document.getElementsByTagName('a')
for (let elA of all){
    elA.classList.add('anchor')
    console.log(elA)
if(elA.innerText === 'link3'){
    elA.style.fontSize = '40px'
}
    let newClass = elA.innerText
    elA.classList.add(`element_${newClass}`)
}

let subHeader = document.getElementsByClassName('sub-header')
for (let elementSub of subHeader){
    elementSub.style.color = prompt('Enter color: (red, green)')
    if (elementSub.innerText === 'content 2 segment') {
        elementSub.style.color = prompt('Enter color: ( blue)');
    }

    }
subHeader[0].style.color = prompt('Enter color: (red, green)');
subHeader[1].style.color = prompt('Enter color: (red, green)');
//
 let content_1 = document.getElementsByClassName('content_1');
console.log(content_1[0].innerText);
content_1[0].innerText = prompt('new TEXT');
//
let p = document.getElementsByTagName('p')
for (let eleP of p ){
    eleP.style.padding = '20px'
    eleP.style.border = '1px solid red'

}

//

 let tex = document.getElementsByClassName('text2');
 console.log(tex)
 tex[0].innerText = 'sep-2021';
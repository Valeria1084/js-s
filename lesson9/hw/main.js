//


let div = document.createElement('div');
document.body.appendChild(div)
div.classList.add('wrap')
div.classList.add('collapse')
div.classList.add('alpha')
div.classList.add('beta')
div.style.background = 'blue'
div.style.color = 'red'
div.style.fontSize = '14px'
let divClon = div.cloneNode(true)
document.body.appendChild(divClon)
//
let arr = ['Main','Products','About us','Contacts']
let menu = document.getElementsByClassName('menu')[0];
for(let araay of arr){
    let li = document.createElement('li')
    li.innerText = araay;
    menu.appendChild(li);

}
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for(let courses of coursesAndDurationArray) {
    let divCourses = document.createElement('div');
    divCourses.innerText = `${courses.title} ${courses.monthDuration}`
    document.body.appendChild(divCourses)
    divCourses.classList.add('item')
}

//
for (const course of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerText = course.title;

    let p = document.createElement('p');
    p.innerText = course.monthDuration;


    divElement.appendChild(h1);
    divElement.appendChild(p);
    document.body.appendChild(divElement);
}


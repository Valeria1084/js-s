//
let contentId = document.getElementById('content')
console.log(contentId)
let rulesId = document.getElementById('rules')
console.log(rulesId)
//
contentId.innerText = 'Hello'
rulesId.innerText = 'а кто такие фиксики??? '
//
contentId.style.background = 'red'
rulesId.style.background = 'red'
//
rulesId.style.color = 'blue'
contentId.style.color = 'blue'
//
console.log(rulesId.classList);
//
let fc = document.getElementsByClassName('fc_rules')
for (const el of fc) {
    el.style.color = 'red'
}





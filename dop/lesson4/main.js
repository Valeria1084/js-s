//1
 let arg = (a,b) => {
    for ( i = 0; i < arg.length;i++){
        if (arg === a,b){
            console.log(a+b)
        }
        else {
            console.log(a)
        }
    }
 }
 arg(1)

//2
let add = (array1,array2) => {
    let nenArray = []
    for (i = 0; i < array1.length;i++){
      nenArray.push(array1[i]+array2[i])
    }
    console.log(nenArray)
}
add([1,2,3,4,5],[1,2,3,4,5])


//3
let simpsons =
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    }



const profile = Object.values(simpsons);

console.log(profile);









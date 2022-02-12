//1
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let potter = (str)=>{
    return str.replaceAll('-',' ').replaceAll('_',' ').replace('..',' ')
}
console.log(potter(n3))

//2-//3
let random = (length,nam) => {
    let array = []
    for (i = 0; i < length;i++){
        array.push(Math.floor(Math.random()*nam))
    }
    return array.sort((a, b) => a-b)
}
let result = random(10,100)
console.log(result)
//4

let filtr = (length1,nam1) => {
    let array1 = []
    for (i = 0; i < length1;i++){
        array1.push(Math.floor(Math.random()*nam1))
    }
    return array1.filter( a1 => a1 % 2 == 0 )
}
let result_2 = filtr( 10,100)
console.log(result_2)
//5
let map = (length2,nam2) => {
    let array_2 = []
    for( i = 0 ; i < length2;i++){
        array_2.push(Math.floor(Math.random()*nam2))
    }
    return array_2.map( b => b.toString())
}
let re =map(10,100)
console.log(re)

//6
let sortNums = (arr,direction) =>{
    if( direction === 'max')return arr.sort((z,x) => z - x)
    if(direction === 'min') return arr.sort((z,x) => x - z)
}
console.log(sortNums([3,59,24,65,12,1,6,2,9],'min'))

//7
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let newC = coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration)
console.log(newC)
let new5 = newC.filter(a => a.monthDuration == 5)
console.log(new5)
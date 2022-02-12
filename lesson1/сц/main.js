//1

let arr = [100, 200, 300, 400, 500, 600,700,800,900,1000];

let result = arr.reduce(function(sum, elem) {
    return sum + elem;
}, 0);

console.log(result);

//2

let book = {
    name: 'harry potter',
     pages: 200,
    genre:'fantassy',
    }

    console.log(book)


//3

let book2 ={
    name: 'harry potter',
    pages: 200,
    genre:'fantassy',
    writer:'Joanne Rowling'

}
console.log(book2)

//4

 let book_3 = [
     {
         name: 'harry potter',
         pages: 540,
         genre:'fantassy',
         writer:'Joanne Rowling'
     },
     {
         name: 'Alice`s Adventures in Wonderland',
         pages: 600,
         genre:'fantassy',
         writer:' Lewis Carroll'
     },
     {
         name: 'The Great Gatsby',
         pages: 445,
         genre:'Novel',
         writer:' Francis Scott Fitzgerald'
     }
 ]
console.log(book_3)

//5

let height = 23;
let width = 10
let s = width * height;
console.log(s + 'cm');

//6

let heightC = 10;
    let dC = 4;
    let v = (3.4 * dC  * height);
console.log(v + 'ml');

//7
let n = 3;
let m = 4;
let k = Math.pow(n,2) + Math.pow (m,2)
console.log(k + 'cm')
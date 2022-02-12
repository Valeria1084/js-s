let arr =[2,17,13,6,22,31,45,66,100,-18]
//1
 i = 0;
 while (i < arr.length){
     console.log(arr[i]);
     i++
 }

//2
for (a = 0 ; a < arr.length; a++){
    console.log(arr[a])
}
//3
for (g = 0;g < arr.length;g++){
    if([g] % 2 === 1){
        console.log(arr[g])
    }

}
//4

let b = 0
 while (b < arr.length){
    if (b % 2 === 1){
         console.log(arr[b]);
     }
     b++
}

//5
for (v = 0; v < arr.length;v++){
    if([v] % 2 === 0){
        console.log(arr[v])

    }
}

//6

let s = 0
while (s < arr.length){
    if (s % 2 === 0){
        console.log(arr[s]);
    }
    s++
}
 //7
 for(z = 0; z < arr.length;z++){
     if(arr[z]% 3 === 0 ){
       arr[z]= "okten"
         console.log(arr[z] + ' '   )
     }
 }
 document.write(arr)

//8
 let arr_1 = [2,17,13,6,22,31,45,66,100,-18];
 for (let i = arr_1.length-1; i >= 0; i--){
     console.log(arr_1[i] )
 }
//9

/*
let arr =[2,17,13,6,22,31,45,66,100,-18]
//1
i = 0;
while (i < arr.length){
    console.log(arr[i]);
    i++
}

//2
for (a = 0 ; a < arr.length; a++){
    console.log(arr[a])
}
//3
for (g = 0;g < arr.length;g++){
    if([g] % 2 === 1){
        console.log(arr[g])
    }

}
//4

let b = 0
while (b < arr.length){
    if (b % 2 === 1){
        console.log(arr[b]);
    }
    b++
}

//5
for (v = 0; v < arr.length;v++){
    if([v] % 2 === 0){
        console.log(arr[v])

    }
}

//6

let s = 0
while (s < arr.length){
    if (s % 2 === 0){
        console.log(arr[s]);
    }
    s++
}
//7
for(z = 0; z < arr.length;z++){
    if(arr[z]% 3 === 0 ){
        arr[z]= "okten"
        console.log(arr[z] + ' '   )
    }
}
document.write(arr)
*/
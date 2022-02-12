//1

let n = 30
for (let i = 1; i <= n; i++) {
    document.write(i + ' ' + "<br/>")
}

//2
let arrAandB = (a,b) =>{
        if (a > b) {
            for( i = 1 ; i <= a;i++) {
                console.log(i+ ' ')
            }
        }
        else {
            for( e = 1 ; e <= a; e++) {
                console.log(e + ' ' )
            }

        }
}
arrAandB(30,50)


//4
let exp = (elemrnts_arr) => {
for ( i = 0; i < elemrnts_arr.length;i++){
    if(elemrnts_arr[i]===0) elemrnts_arr.splice(elemrnts_arr.length-1, 0, elemrnts_arr.splice(i, 1)[0])
}
    document.write(elemrnts_arr)
}
exp([30,0,7,0,50,4,0,3,0,5,0,6,])


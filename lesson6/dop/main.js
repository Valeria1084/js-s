let cutString = (str, n) => {
    let arrnew = []
    for(let i = 0;i < str.length;i += n){
        arrnew.push(str.substr(i,n))
    }
    return arrnew
}
console.log(cutString('наслаждение',2))

//3
    coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];
let newArr = coursesArray.sort((a,b) => a.modules - b.modules )
console.log(newArr)
//5
let cutString1 = (str_1,n1) => {
   return  str_1.split(" ").splice(0,n1).join(" ")
}
console.log(cutString1("Сила тяжести приложена к центру масс тела",3))


//4
let count = (str2) =>{
    let coundNew = 0
    let symb = ["о"]
    for ( let i of str2.toLocaleLowerCase()){
        if (symb.includes(i)){
            coundNew += 1
        }
    }
    return coundNew
}
console.log(count("Астрономия это наука о небесных объектах"))

//2
 let email = (emailStr) => {
         if (emailStr.includes('@' && 'com')){
             console.log('email вірний')
         }
         for (i = 0 ; i < emailStr.length;i++)
             if (emailStr[i].includes('.') <= 2) {
                 console.log('email вірний')
             }

         else {
         console.log('невірний email')
     }
     }
 email('S.omeemail@gmailcom' )
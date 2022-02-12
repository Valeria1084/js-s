
class Cars {
    constructor(model, zavod, year, maxspeed, volume) {
        this.model = model;
        this.zavod = zavod;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };
    info(){
        for (let i in this){
                console.log(`${i} - ${this[i]}`)
            }
        }
newMaxSpeed(newSpeed){
    this.maxspeed = this.maxspeed + newSpeed;
};

changeYear (newValue){
    this.year = newValue
};

addDriver(driver) {
    this.driver = driver;
}

}
let car = new Cars('Peugeot', 'France', 2000, 270, 2.0);
console.log(car);
car.drive();
car.info();
car.newMaxSpeed(20);
car.drive();
car.changeYear(2010)
car.info();
car.addDriver('Vasil')
console.log(car)

//
 class Popelushka {
     constructor(name, age, findShose) {
         this.name = name;
         this.age = age;
         this.findShose = findShose;
     }
 }
 let popelushka =[
           new Popelushka('Valeria',18,39),
            new Popelushka('Olga',45,37),
            new Popelushka('Ann',9,37),
            new Popelushka('Tom',24,38),
            new Popelushka('Alla',50,37),
            new Popelushka('Joy',19,49),
            new Popelushka('Lera',14,39),
            new Popelushka('Santa',3,26),
            new Popelushka('Mari',48,38),
            new Popelushka('Mike',38,43),
]

class Princ {
     constructor(name, age, findShose) {
         this.name = name;
         this.age = age;
         this.findShose = findShose;
     }
 }
 const prince = new Princ('Alex', 45, 49);

let newPara = (popelushka,prince) => {
    for(let item of popelushka){
        if (item.findShose === prince.findShose){
            return `tvoya populushka: ${item.name}`
        }else {
            return 'tvoya populushki nema'
        }
    }
}
console.log(newPara(popelushka, prince))

const f = popelushka.find(el =>el.findShose === prince.findShose)
    console.log(f)

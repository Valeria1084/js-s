function User(id, name, surname, email, phone) {
    this['id'] = id,
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.phone = phone
}
const user = [
new User(10,'Lera','Ponomarenko','ponomqrenko1084@gmail.com','380668765877'),
    new User(2,'Vas','Kokos','ponomqrenko1084@gmail.com','380668765877'),
    new User(3,'Olga','Str','ponomqrenko1084@gmail.com','380668765877'),
    new User(4,'Ann','Dog','ponomqrenko1084@gmail.com','380668765877'),
    new User(5,'Tom','Cat','ponomqrenko1084@gmail.com','380668765877'),
    new User(6,'Joy','Lop','ponomqrenko1084@gmail.com','380668765877'),
    new User(8,'Valeriy','Pon','ponomqrenko1084@gmail.com','380668765877'),
    new User(9,'Kol','Orey','ponomqrenko1084@gmail.com','380668765877'),
    new User(7,'Miky','Goy','ponomqrenko1084@gmail.com','380668765877'),
    new User(1,'Lol','Pik','ponomqrenko1084@gmail.com','380668765877')
]
console.log(user)

let filterUser = user.filter((userId) => {
    if(userId.id % 2 === 0){
        return userId
    }
})
console.log(filterUser)

user.sort((a, b) => a.id - b.id)
console.log(user)

class Client {
    constructor(id, name, surname, email, phone, orde) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.orde = orde;
    }
}
     let сlient = [
     new Client(3, 'Liga', 'Giga', 'sg@gmail.com', 30680000001, ['book', 'game', 'ps4']),
     new Client(1, 'Smeha', 'Rony', 'oli@gmail.com', 30680000002, ['magasine', 'shop', 'ps3']),
    new Client(2, 'Zipko', 'Tevez', 'zeru@gmail.com', 30680000003, ['football', 'ps5']),
    new Client(4, 'Study', 'Olivie', 'kosmos@gmail.com', 30680000004, ['hobbis']),
 ];
 console.log(сlient);

сlient.sort((a, b) => a.orde.length - b.orde.length)
console.log(сlient)
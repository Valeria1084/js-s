class User {
    constructor(id, name, email,address,phone,website,company) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;


    }
}

class Address {
    constructor(street,suite,city,zipcode,geo) {
        this.street = street;
        this.suite = suite;
        this.city = suite;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}
class  Geo {
    constructor(lat,lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
class Company {
    constructor( name, catchPhrase,  bs) {
        this.name = name;
        this.catchPhrase =catchPhrase;
        this.bs =bs;
    }
}

let company = new Company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
let geo = new Geo('-37.3159', '81.1496')
let address = new Address('Kulas Light', 'Apt. 556','Gwenborough','92998-3874',geo)
let user = new User('Leanne Graham', 'Bret', 'Sincere@april.biz',address,'1-770-736-8031 x56442', 'hildegard.org',company)
console.log(user)

//2

class Htmlbook {
    constructor(titleOfTag,action,attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}
let htmlbook = [
    new Htmlbook('a','тег <a> устанавливает ссылку или якорь'),
    new Htmlbook('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого'),
    new Htmlbook('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.' ),
    new Htmlbook('span','Тег <span> предназначен для определения строчных элементов документа.')
]
console.log(htmlbook)
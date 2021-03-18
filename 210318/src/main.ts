// 1/1

type fruits = {
    alma: string;
    korte: string;
    salata: string;
    paradicsom: string;
};

function listProperties(fruits: fruits) {
    return Object.keys(fruits);
}

let fruits = {
    alma: "1",
    korte: "2",
    salata: "3",
    paradicsom: "4",
}

console.log(listProperties(fruits))


// 1/2

type houses = {
    Lannister: string;
    Stark: string;
    Targaryen: string;
    Baratheon: string;
};

function listOfHouses(houses: houses) {
    return Object.values(houses)
}

let houses = {
    Lannister: "oroszlan",
    Stark: "farkas",
    Targaryen: "sarkany",
    Baratheon: "szarvas",
}

console.log(listOfHouses(houses))


// 1/3

function lenght(object: object){
    let keys = Object.keys(object)
    return keys.length
}

let obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(lenght(obj))


// 1/4

type book = {
    author: string;
    title: string;
    readingStatus: boolean;
};

function reading(book: book) {
    return ( book.title + " : " + book.readingStatus )
}

let myBook = {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    }

console.log(reading(myBook))


// 2/1

function getDay(date:Date):string{
    let daysArray = new Array("vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap");
    let day = daysArray[date.getDay()];
    if (day === undefined) {
        throw new Error("It's not a valid date.")
    } else {
        return day
    }
}
let date=new Date(<string>window.prompt("Write the date!"));
console.log(getDay(date));


// 3
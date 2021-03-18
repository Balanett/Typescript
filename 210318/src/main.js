"use strict";
// 1/1
function listProperties(fruits) {
    return Object.keys(fruits);
}
var fruits = {
    alma: "1",
    korte: "2",
    salata: "3",
    paradicsom: "4",
};
console.log(listProperties(fruits));
function listOfHouses(houses) {
    return Object.values(houses);
}
var houses = {
    Lannister: "oroszlan",
    Stark: "farkas",
    Targaryen: "sarkany",
    Baratheon: "szarvas",
};
console.log(listOfHouses(houses));
// 1/3
function lenght(object) {
    var keys = Object.keys(object);
    return keys.length;
}
var obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(lenght(obj));
function reading(book) {
    return (book.title + " : " + book.readingStatus);
}
var myBook = {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
};
console.log(reading(myBook));
// 2/1
function getDay(date) {
    var daysArray = new Array("vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap");
    var day = daysArray[date.getDay()];
    if (day === undefined) {
        throw new Error("It's not a valid date.");
    }
    else {
        return day;
    }
}
var date = new Date(window.prompt("Write the date!"));
console.log(getDay(date));
// 3

"use strict";
// 1/3.
function calculateDogYears(dogAge) {
    return dogAge * 7;
}
console.log(calculateDogYears(5));
// 1/4.
function getFortune(profession, city, partner, numberOfChildren) {
    return "Te egy " + profession + " leszel " + city + "-ban/ben, " + partner + " lesz a párod, születni fog " + numberOfChildren +
        " gyereketek.";
}
console.log(getFortune("jedi lovag", "Vlagyivosztok", "Lara Croft", 4));
// 1/9.
function getCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}
console.log(getCelsius(80));
function getFahrenheit(cels) {
    var fahr = (cels * 1.8) + 32;
    return fahr;
}
console.log(getFahrenheit(35));
// 1/10.
function getNumbers(message) {
    var sum = 0;
    for (var i = 1; i <= message; i++) {
        var num = parseInt(window.prompt("Write the number!"));
        sum = sum + num;
    }
    return sum;
}
console.log(getNumbers(2));
// 1/11.
function isPrime(number) {
    var prime = true;
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            prime = false;
        }
    }
    if (1 < number && prime === true) {
        return "Prime";
    }
    else {
        return "Not prime";
    }
}
console.log(isPrime(parseInt(window.prompt("Write the number!"))));
// 2/1.
function makeUpperCase(stringArray) {
    for (var i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].toUpperCase();
    }
    return stringArray;
}
console.log(makeUpperCase(["alma", "banán", "mangó"]));
// 2/3.

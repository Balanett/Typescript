// 1/3.

function calculateDogYears (dogAge: number) {
    return dogAge * 7
}

console.log(calculateDogYears(5))


// 1/4.

function getFortune (profession: string, city: string, partner: string, numberOfChildren: number) {
    return "Te egy "+profession+" leszel "+city+"-ban/ben, "+partner+" lesz a párod, születni fog "+numberOfChildren+
        " gyereketek."
}

console.log(getFortune("jedi lovag", "Vlagyivosztok", "Lara Croft", 4))


// 1/9.

function getCelsius(fahrenheit: number) {
    let celsius = (fahrenheit-32)/1.8
    return celsius
}

console.log(getCelsius(80))

function getFahrenheit(cels: number) {
    let fahr = (cels*1.8)+32
    return fahr
}

console.log(getFahrenheit(35))


// 1/10.

function getNumbers(message: number) {
    let sum = 0
    for (let i=1; i<=message; i++) {
        let num = parseInt(<string>window.prompt("Write the number!"))
        sum = sum+num
    }
    return sum
}

console.log(getNumbers(2))


// 1/11.

function isPrime(number: number) {
    let prime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            prime = false;
        }
    }
    if (1 < number && prime === true) {
        return "Prime"
    } else {
        return "Not prime"
    }
}

console.log(isPrime(parseInt(<string>window.prompt("Write the number!"))))


// 2/1.

function makeUpperCase (stringArray: string[]) {
    for (let i=0; i<stringArray.length; i++) {
        stringArray[i] = stringArray[i].toUpperCase()
    }
    return stringArray
}

console.log(makeUpperCase(["alma", "banán", "mangó"]))


// 2/3.
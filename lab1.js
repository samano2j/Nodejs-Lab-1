const myArr = [1, 2, 3, 4, 5]
let result = 0

const { mySum } = require('./mySum')

result = mySum(...myArr)

console.log('My array:', myArr)
console.log('My sum:', result)

const mySecondArr = myArr.map(x => x * 2)
let mySecondSum = 0

console.log('My second array:', mySecondArr);

for (num of mySecondArr) {
    mySecondSum += num
}

const averageNum = mySecondSum / mySecondArr.length

const secondResult = mySecondArr.filter(x => x > averageNum)

console.log('Average:', averageNum)
console.log('Second Result:', secondResult);

function sayGoodbye () {
    console.log('Goodbye')
}

setTimeout(sayGoodbye, 3000)

const Employee = {
    name: 'John Doe',
    email: 'john.doe@yahoo.com',
    department: 'Software',
    startDate: '5/9/2023'
}

console.log('Employee:', Employee)

const {name, email} = Employee
const Person = {name, email}

console.log('Person:', Person)
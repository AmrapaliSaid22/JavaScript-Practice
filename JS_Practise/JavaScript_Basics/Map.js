// const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach((item) => {
//     console.log(item);
//     // return item
// })

// console.log(value);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4) 
// console.log(newNums);

const newNums = myNums.filter( (num) => {
    return num > 4
})
// console.log(newNums);

// const Numbers = []

// myNums.forEach( (num) => {
//     if (num > 5) {
//         Numbers.push(num)
//     }
// })

// console.log(Numbers);

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const newNum =  myNums1.map( (num) => num + 10)
// console.log(newNum);

const newNum1 = myNums1
     .map( (num) => num * 10)
     .map( (num) => num + 1)
     .filter( (num) => num >= 40)
console.log(newNum1);

// ============  Reduce ==========

const number1 = [1, 2, 3, 4, 5]

// const total = number1.reduce(function (acc, currval) {
//     console.log(`Accumulator : ${acc} and Current Value : ${currval}`);
//     return acc + currval
// }, 0)

// console.log(total);

const total = number1.reduce( (acc, currval) => acc + currval , 2)
console.log(total);

const shoppingCart = [
    {itemName: "js course",
    price: 999
    },
    {itemName: "Python course",
    price: 999
    },
    {itemName: "mobile dev course",
    price: 5999
    },
    {itemName: "Data science course",
    price: 70999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price ,0)

console.log(priceToPay);
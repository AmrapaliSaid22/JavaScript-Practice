//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and iner loop ${i}`);
        // console.log(i + "*" + j + "=" + i * j);
    } 
}

let array = ['flash', 'batman', 'superman', 'spiderman']

// console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    
}

// break and continue

// for (let i = 1; i <=20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${i}`);
// }
for (let i = 1; i <=20; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        continue
    }
    // console.log(`value of i is ${i}`); 
}

//===========  While &  Do - While Loop  =================


let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ['flash', 'batman', 'superman', 'spiderman']

let arr = 0

while (arr < myArray.length) {
    // console.log(`value is ${myArray[arr]}`);

     arr = ++ arr
    
}

let score = 1

do {
    // console.log(`Score is ${score}`);
    score++
    
} while (score <= 10);

// ============     For Of Loop    ==============

// ["", "", ""]
// [{}, {}, {}]

const arr1 = [1, 2, 3, 4, 5]

for (const num of arr1) {
    // console.log(num);
}

const greatings = "HELLO WORLD !"

for (const greet of greatings) {
//   console.log(greet);
// console.log(greatings);
    
}

//============ Maps =========

const map = new Map()

map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "United States of America")

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// =============  For In ======

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(myObject);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// const map1 = new Map()

// map1.set('IN', "India")
// map1.set('Fr', "France")
// map1.set('USA', "United States of America")

// for (const key in map1) {
//     console.log(key);
// }
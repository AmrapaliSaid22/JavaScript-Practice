// Array

const myArr = [0 , 1 , 2 , 3 , 4 , 5]

//console.log(myArr[0]);  // 0 - index

const myHeros = ["Batman","Spiderman","Ironman"]

const myArr2 = new Array(1,10,15,56)

// Array Methods
 
// Add value inside the array at last
// myArr.push(6) 
// myArr.push(7)

// remove 1 value from last
// myArr.pop()

// add a value (9) at start of array
// myArr.unshift(9)

// remove 1st value of array
// myArr.shift()

// to check the existence of element in array ( output - true or flase)
//console.log(myArr.includes(9))

// console.log(myArr.indexOf(9))

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);

// slice  &  splice

console.log("A ", myArr);

const myn1 = myArr.slice(1 , 4)

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1 , 4)

console.log(myn2);
console.log("C ", myArr);



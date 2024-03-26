const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power : ${power}`); // User power : fly
}

//console.log(`User Power : ${power}`);  // error

// const balance = 1000

// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("Less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else{
//     console.log( "Equel to 1000");
// }

// const userLoggedIn = true
// const loggedInFromGoogle = false
// const debitCard = true
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User Logged in");
// }

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    
    default:
        console.log("Not Match..");
        break;
}

//==============Truthy & Falsy ===========

const userEmail = ""

if(userEmail){
    console.log("Got user Email");
} else{
    console.log("Don't have user email");
}

/* 
Falsy Value - 
1. False   2.0
3. -0      4. BigInt
5.0n      6.""
7.null     8.undefined
9.NaN

Truthy Value -
1."0"     2.'false'  3." "
4.[]      5.{}       6.function () {}

*/

const array = []
if (array.length === 0) {
    // console.log("Array is Empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

//Nullish Coalescing Operator (??); null undefined

let val1; 
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
 val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("More than 80");

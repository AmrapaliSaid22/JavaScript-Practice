function addTwoNumbers(num1, num2){   //num1 and num2 are a parameters
//    console.log( num1 + num2);
}

addTwoNumbers(3, "4")  // 3 and "4" are a arguments
addTwoNumbers(3, null) 

function addNumbers (n1, n2){
    // let addition = n1 + n2 
    // return addition
   
    return n1 + n2
}
// console.log(addNumbers(21,22));

const addition = addNumbers(3 , 5)
// console.log("Addition is : ", addition);

// function loginUserMessage(username){
//     return `${username} just logged in.`
// }
// console.log(loginUserMessage("Amrapali"));
// console.log(loginUserMessage());

function loginUserMessage(username){  // both if conditions are correct
    if(!username)
    // if(username === undefined)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("Amrapali"));
// console.log(loginUserMessage());


function calculateCartPrice (...number1){    // ...number1 is rest operator
  return number1
}

console.log(calculateCartPrice(200,300,500));  //output  [ 200, 300, 500 ]

function calculateTotalPrice (val1, val2, ...Num1) {
    return Num1;
}
console.log(calculateTotalPrice(200, 500, 200000, 426, 500));  //output [ 200000, 426, 500]

const user = {
    username1: "Amrapali",
    price: 20000
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username1} and price is ${anyobject.price}.`);
}

// handelObject(user);

handelObject({
    username1: "Apurva",
    price: 4999
})

const myArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myArray));  //output 400

console.log(returnSecondValue([200, 500, 800, 400])); //output 500
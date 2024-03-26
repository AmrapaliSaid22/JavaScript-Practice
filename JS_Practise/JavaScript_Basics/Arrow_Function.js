const user = {
    username:  "Amrapali",
    Fees: 499,

    welcomeMessage : function() {
         console.log(`${this.username} , welcome to website`);
         // generally this is used for / refers current context
         console.log(this);
    }
    
}

// user.welcomeMessage()

// user.username = "Apurva"

// user.welcomeMessage()

console.log(this); //output {}

function coffee ( ){
    // console.log(this);

    let username = "amrapali"
    console.log(this.username); // output  undefined
  // output undefine  because we cannot use "this" inside function we can use only in object  
}
coffee()


const coffee1 = () => {
    let username = "Amrapali"
    console.log(this);   // output {}
}
coffee1()

const addTwo = (num1, num2) => {
    return  num1 + num2
}
console.log(addTwo(21, 22));

const addOne = (n1, n2) => (n1 + n2)  // implicite return function

console.log(addOne(21, 22));

const addThree = (N1, N2) => ({ username: "Apurva"})

console.log(addThree(5, 6));
//  singleton

// Object.create

//  Object literals

const mySym = Symbol("key1")  // we can define symbol like this

const Jsuser = {
    name : "Amrapali",
    age: 24,
    [mySym]: "MyKey1",     // we can define symbol like this
    location: "pune",
    email: "amrapali2023@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser[mySym]);         // we can define symbol like this
// console.log(typeof Jsuser.mySym);

Jsuser.email = "apurva2023@gmail.com"
// Object.freeze(Jsuser)  
Jsuser.email = "apurva2023@google.com"
console.log(Jsuser);

Jsuser.gretting = function(){
    console.log("Hello JS user");
}
console.log(Jsuser.gretting);  // it gives only refernce
console.log(Jsuser.gretting());  // it gives the value

Jsuser.grettingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   // String interpolation
}

console.log(Jsuser.grettingTwo());
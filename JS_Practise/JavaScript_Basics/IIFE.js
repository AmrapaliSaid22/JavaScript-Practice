//IIFE  - Immediatly Invoked Function Expressions
 /* 
 
// Global scope ke vajahase problem hoti hai khi bar wo global scope variable or koi bhi jo 
  dicleration hai unke polution ko hatane ke liye IIFE use krte hai
 */

  (function first (){

    //  named IIFE
    console.log(`DB CONNECTED.`);
  })();

  ( () => {
    console.log(`DB CONNECTED TWO`);
  }) ();

  ( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
  })('Amrapali')
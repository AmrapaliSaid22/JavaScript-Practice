const b = 200

let a = 500

if(true){
    let a = 10
    const b = 20 
    var c = 30

    // console.log(`INNER : ${a}`);  //output 10
}

// console.log(a);  // output 500
// console.log(b);  //output  200
// console.log(c);  // output 30

function one () {
    const username = "Amrapali"

    function two () {
        const website = "YouTube"
        console.log(username);
    }

    // console.log(website);

    two()
}

one()

if (true){
    const username = "Amrapali"

    if( username === "Amrapali"){
        const website = " YouTube"

        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//========================================================================
console.log(addone(5));  // output 6
function addone ( num ) {
    return num + 1
}

// addone(5)  // successfully exicute

//console.log(addTwo(5));  // it gives error "Cannot access 'addTwo' before initialization"
const addTwo = function (num){
    return num +2 
}
console.log(addTwo(5));  //output  7 
addTwo(5) // successfully exicute
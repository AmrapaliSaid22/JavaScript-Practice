// const tinderUser = new Object()   // Singalton Object

const tinderUser = {}  // Non singalton object

tinderUser.id = "123"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sammy@gmail.com",
    fullName : {
        userfullname: {
            firstname: "Sammy",
            lastName : "Tinder"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "JavaScript Tutorial",
    price : "999",
    courseInstructor : "Hitesh Choudhari"
}

// console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
// console.log(instructor);


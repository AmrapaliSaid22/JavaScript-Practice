const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach(  (val) => {
    // console.log(val);
})

function printMe (item){
    // console.log(item);
}

coding.forEach(printMe)

coding.forEach( (value, index, array) => {
    //    console.log(value, index, array);
})


const myCoding = [
    {
        languageName : "JAVA",
        languageFile : "java"
    },
    {
        languageName : "JavaScript",
        languageFile : "js"
    },
    {
        languageName : "Python",
        languageFile : "py"
    },
]

myCoding.forEach( (info) => {
    // console.log(info.languageName);
    // console.log(info.languageFile);
    
})
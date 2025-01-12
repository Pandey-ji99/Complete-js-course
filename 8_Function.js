//   <== Function ==>

//  A function is a block of code designed to perform a particular task. It can take inputs (parameters) and return an output.

function Intro(name) {
    console.log("Hey " + name + " How are you");
}

Intro("Coder") // parameters 
Intro("Student") // parameters


function sum(a, b) {
    // console.log(a + b);
    // but you to return value so use return features
    return a + b;
}
result = sum(2, 6)
console.log("Sum of these number is :", result);


// <== Fat arrow function ==>

const resultNumber = (c, d) => {
    // console.log(c + d);
    // but you to return value so use return features
    return c + d;
}

let finalResult = resultNumber(2, 4)
console.log("Sum of these number is : ", finalResult);


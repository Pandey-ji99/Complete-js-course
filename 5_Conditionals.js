// Conditionals allow you to execute certain blocks of code based on specific conditions.

// Different types of conditional is js
// { if statement, if else statement, else if statement, switch statement, Ternary operator  }


// <==__ if else __==>

let age = 20;
if (age > 18) {
    console.log("You Can Drive");

} else {
    console.log("You Can't Drive");

}


// <==__ else if __==>

let age2 = 20;
if (age > 18) {
    console.log("You Can Drive");

}
else if (age >= 20) {
    console.log("You are adult so you can drive also");

}
else {
    console.log("You Can't Drive");

}


// <==__ switch statement __==>

// The switch statement is used to evaluate an expression against multiple possible values (cases). It is a more efficient way to handle multiple conditions based on the same variable, especially when there are several choices.

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// <==__ Ternary operator __==>

let num = 10;

// Check if num is even or odd
let result = (num % 2 === 0) ? "Even" : "Odd"
console.log(result); // "Even"



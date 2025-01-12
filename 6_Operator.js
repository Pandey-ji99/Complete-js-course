// Operators are symbols or keywords used to perform operations on values or variables. They are classified into various types based on their functionality.


// 1. Arithmetic Operators (+, -, *, /, %, )
// 2. Assignment Operators (=, +=, -=, =, /=, %=)
// 3. Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
// 4. Logical Operators (&&, ||, !)
// 5. Bitwise Operators (&, |, ^, ~, <<, >>)
// 6. String Operators (+)



// <==__ Arithmetic Operators __==> 
let a = 10;
let b = 30;
console.log("A + B = ", a + b,);
console.log("A - B = ", a - b,);
console.log("A * B = ", a * b,);
console.log("A % B = ", a % b,);
console.log("A / B = ", a / b,);


// <==__ Assignment Operators __==>

// =  
let c = 10;
console.log(c);

// += 
let d = 20;
d += 50;
console.log(d);

// -=
let e = 20;
e -= 50;
console.log(e);

//.   *=
let f = 20;
f *= 50;
console.log(f);

// /=
let g = 20;
g /= 50;
console.log(g);

// %=
let h = 20;
h %= 50;
console.log(h);


// <==__ Comparison Operators __==>
// Comparison operators are used to compare two values and return a boolean (true or false).

// ==
console.log(5 == 5);

// ===
console.log(5 === "5");
console.log(null === undefined);

//. !=
console.log(5 !== "5");
console.log(null !== undefined);

// <
console.log(5 < 10);

// <=
console.log(20 <= 10);

// >
console.log(5 > 10);

// >=
console.log(5 >= 5);


// <==__ Logical Operators __==>

// && (Logical AND)

let age = 20;
let voterID = true;
if (age >= 18 && voterID) {
    console.log("You are eligible to vote");

} else {
    console.log("You are not eligible to vote");
}


//   || (Logical OR)

let boyAge = 15;
let voterCard = false;
if (boyAge >= 18 || voterCard) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

//.  ! (Logical NOT)

let addharCard = true;
if (!addharCard) {
    console.log("You are kid");
} else {
    console.log("You are not kid");
}










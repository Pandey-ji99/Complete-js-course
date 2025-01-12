
//? mainly 3 types of  DaytaType

//1. Primitive Data Type :-
// { number, char, float, Bigint, Boolean, undefined, Null, Symbol }

// 2. Non-Primitive (Complex) :-
//  { Object, Array, Function, Date, Set, Map,   }

// 3. Special Data Types :-
// { Typeof,  Type Conversion   }



// 1. _____Primitive Data Types :-__________//

// Integer
let age = 25;
console.log(age, typeof age);

// Floating-point

let pi = 3.14159;
console.log(pi, typeof pi);

// Exponential notation
let large = 1e6;
console.log(large, typeof large);


// Char / String 
let fullName = "Hey Coders"
console.log(fullName, typeof fullName);

// BigInt
let big = 123456789012345678901n;
console.log(big, typeof big);

// Boolean 
let isActive = true
console.log(isActive, typeof isActive);

// Undefined
let x;
console.log(x, typeof x);

// Null
let y = null;
console.log(y, typeof y);

// Symbol

let id = Symbol("@#$%^&*");
console.log(id, typeof id);



// 2.________ Non-Primitive (Complex) :- ________

// Object 
let bioData = {
    funllName: "Js Coder",
    editor: "Vs Code",
    language: "JavaScript"
}
console.log(bioData, typeof bioData);


// Array 
let fruits = ["apple", "mango", "banana", "grapes", "lichi"];
console.log(fruits, typeof fruits)


// Function 
function greet() {
    return "Hey Coder";
}
console.log(greet());


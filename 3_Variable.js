// Variables are containers used to store data in JavaScript. They are declared using var, let, or const.


// <==__ var __==>

// { Scope: Function-scoped, 
//   Redeclaration: Can be redeclared in the same scope,
//   Use: Avoid using in modern JavaScript, due to its behavior, }

var x = 10;
var x = 20; // No error
console.log(x);



// <==__ let __==>:- 

// { Scope: Block-scoped,
// Redeclaration: Cannot be redeclared in the same block,
// Use: Preferred for variables that can change, }

let y = 30;
// let y = 40; // Error: Cannot redeclare
y = 40; // Works
console.log(y);

// But when we declare  let in a scope so value are not be change 
{
    let a = 20;
    console.log(a);
}
// here we will see the value are not be change 
let a = 30;
console.log(a);



// <==__ Const __==>

// {  Scope: Block - scoped,
// Redeclaration: Cannot be redeclared,
//  Reassignment: Cannot be reassigned, Use: For variables whose values won't change. }




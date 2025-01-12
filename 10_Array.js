

// 1. push() -l Array ke end mein ek ya zyada items add karta hai.
let arr1 = [1, 2];
arr1.push(3);
console.log(arr1); // [1, 2, 3]

// 2. pop() - Array ke last item ko remove karta hai aur usse return karta hai.
let arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); // [1, 2]

// 3. unshift() - Array ke start mein ek ya zyada items add karta hai.
let arr3 = [2, 3];
arr3.unshift(1);
console.log(arr3); // [1, 2, 3]

// 4. shift() - Array ke first item ko remove karta hai aur usse return karta hai.
let arr4 = [1, 2, 3];
arr4.shift();
console.log(arr4); // [2, 3]

// 5. indexOf() - Item ka index find karta hai, agar item nahi milta toh -1 return hota hai.
let arr5 = [1, 2, 3];
console.log(arr5.indexOf(2)); // 1
console.log(arr5.indexOf(4)); // -1

// 6. includes() - Check karta hai ki item array mein hai ya nahi.
let arr6 = [1, 2, 3];
console.log(arr6.includes(2)); // true
console.log(arr6.includes(4)); // false

// 7. splice() - Array ke specific index pe item add/remove/replace karta hai.
let arr7 = [1, 2, 3];
arr7.splice(1, 1, 4);
console.log(arr7); // [1, 4, 3]

// 8. slice() - Array ka ek shallow copy return karta hai (start aur end index ke beech ka portion).
let arr8 = [1, 2, 3, 4];
let newArr = arr8.slice(1, 3);
console.log(newArr); // [2, 3]

// 9. concat() - Do ya zyada arrays ko combine karta hai.
let arr9 = [1, 2];
let arr10 = [3, 4];
let combined = arr9.concat(arr10);
console.log(combined); // [1, 2, 3, 4]

// 10. sort() - Array ko sort karta hai (by default alphabetically ya numerically).
let arr11 = [3, 1, 2];
arr11.sort();
console.log(arr11); // [1, 2, 3]

// 11. reverse() - Array ko reverse karta hai.
let arr12 = [1, 2, 3];
arr12.reverse();
console.log(arr12); // [3, 2, 1]

// 12. join() - Array ke elements ko ek string mein join karta hai.
let arr13 = ["a", "b", "c"];
let str = arr13.join("-");
console.log(str); // "a-b-c"

// 13. map() - Array ke har element ko modify karke ek naya array return karta hai.
let arr14 = [1, 2, 3];
let squared = arr14.map(num => num * num);
console.log(squared); // [1, 4, 9]

// 14. filter() - Array ke elements ko filter karke ek naya array return karta hai based on condition.
let arr15 = [1, 2, 3, 4];
let even = arr15.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// 15. reduce() - Array ke elements ko reduce karke ek single value return karta hai.
let arr16 = [1, 2, 3, 4];
let sum = arr16.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// 16. find() - Array ke pehle element ko return karta hai jo condition match kare.
let arr17 = [1, 2, 3, 4];
let firstEven = arr17.find(num => num % 2 === 0);
console.log(firstEven); // 2

// 17. findIndex() - Array ke pehle matching element ka index return karta hai.
let arr18 = [1, 2, 3, 4];
let index = arr18.findIndex(num => num > 2);
console.log(index); // 2

// 18. every() - Check karta hai ki **sabhi elements** condition ko match karte hain ya nahi.
let arr19 = [2, 4, 6];
let isEven = arr19.every(num => num % 2 === 0);
console.log(isEven); // true

// 19. some() - Check karta hai ki **koi ek element** condition ko match karta hai ya nahi.
let arr20 = [1, 2, 3];
let hasEven = arr20.some(num => num % 2 === 0);
console.log(hasEven); // true

// 20. flat() - Nested arrays ko flat (single-level) array banata hai.
let arr21 = [1, [2, 3], [4, [5]]];
let flatArray = arr21.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5]

// 21. forEach() - Array ke har element ke liye ek function execute karta hai.
let arr22 = [1, 2, 3];
arr22.forEach(num => console.log(num * 2));
// Output: 2, 4, 6



// <== forEach ==>

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

number.forEach((num)=>{
console.log(num + 5);

})

// <== for in ==>
   
let bioData=
{
    nmae:"Coder",
    age:22,
    city:"haridwar"
}
// console.log(bioData);
for( let keys in bioData)
{
    console.log(keys + ":" + bioData[keys]);
    
}


// <== for of ==>

let number2 =[1,2,3,4,5,6,7,8]
for (let value of number2) {
    console.log(value);
    
}
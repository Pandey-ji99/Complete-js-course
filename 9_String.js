//            <== String ==>

// A string is a sequence of characters (letters, numbers, symbols) wrapped in quotes.
 
// let fullName= "Coder"

// console.log(fullName[3]);



// <== Template Literal  /  String interpolation ==>

// let firstName = "How are you"
// let lastName = "what are you doing"

// console.log(`Hey Coders ${firstName} and ${lastName}`);



// <== Mathod ==>


let str = "Hey coder how are you";

// toUpperCase : String ko uppercase (bade akshar) me convert karta hai.
console.log(str.toUpperCase());  

// toLowerCase :String ko lowercase(chhote word) mein convert karta hai. 
console.log(str.toLowerCase()); 

// slice : String ka part extract karta hai, start aur end index ke beech ka.
console.log(str.slice(0, 4));  

// substring : String ka part extract karta hai, start aur end index ke beech, lekin thoda different tarike se.
console.log(str.substring(4, 10));  

// replace String ke kisi part ko dusre part se replace karta hai.
console.log(str.replace("you", "they")); 

// trim : String ke starting aur ending spaces ko remove karta hai. 
let str2 = "   Hey coder!   ";
console.log(str2.trim());  

// split : String ko kisi separator ke basis pe array mein split karta hai.
console.log(str.split(" "));  

// charAt : String ke specific index pe jo character hai, usse return karta hai.
console.log(str.charAt(5)); 

// indexOf : Koi substring string mein pehli baar kaha aayi, uska index return karta hai.
console.log(str.indexOf("how"));  

// lastIndexOf : Koi substring string mein last time kaha aayi, uska index return karta hai.
console.log(str.lastIndexOf("you"));  

// concat : Do ya zyada strings ko join karke ek naya string banata hai.
let newStr = str.concat(" I'm fine!");
console.log(newStr);  

// startsWith : Check karta hai ki string specified substring se start hoti hai ya nahi.
console.log(str.startsWith("Hey"));  

// endsWith : Check karta hai ki string specified substring se end hoti hai ya nahi.
console.log(str.endsWith("you"));  

// includes : Check karta hai ki koi specific substring string mein hai ya nahi.
console.log(str.includes("coder"));  

// repeat : String ko specified number of times repeat karta hai.
console.log(str.repeat(2));  

// normalize : String ko normalize karta hai (mostly Unicode characters ke liye use hota hai).
let str3 = "Café";
console.log(str3.normalize());  

// localeCompare : Do strings ko compare karta hai locale ke according aur difference return karta hai.
console.log(str.localeCompare("Hey coder how are you"));  

// match : Regular expression ke through string mein matching patterns ko find karta hai.
console.log(str.match(/[a-z]/g));  

// search : String mein specific substring ko search karta hai aur uska index return karta hai.
console.log(str.search("how"));  

// valueOf : String ka primitive value return karta hai.
console.log(str.valueOf());  





//  <== Asynchronous ==>

// Asynchronous JavaScript ka matlab hai kaam ko background me chalana bina main code ko roke. Iska use tab hota hai jab koi kaam (jaise server se data lana) time leta hai, lekin hum chahte hain ki baaki code tab tak smoothly chale. Jab background ka kaam complete hota hai, tab result milta hai aur process aage badhta hai.

console.log("Hay");
console.log("Coder");

setTimeout(() => {
    console.log("Hello World !");
}, 1000);
console.log("The End");

//    <== Callback function ==>

// Callback Function ek function hota hai jo ek aur function ke andar argument ke roop me pass kiya jata hai, aur baad me usko call kiya jata hai jab zarurat ho. Iska main kaam hai kuch specific kaam ko tab chalana jab ek process complete ho jaye.

// ex :- Callback function ko socho ek waiter ki tarah. Tum waiter ko bolte ho ki "jab mera khana ready ho jaye, mujhe bata dena." Waiter tumhe tab hi batata hai jab tumhara khana ready hota hai.





function greet(name, callback) {
    console.log("Hello " + name);
    setTimeout(() => {
        callback();
    }, 1000);

}
function hey() {
    console.log("How are you");
}

greet("coder", hey)

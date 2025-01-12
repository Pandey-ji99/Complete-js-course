// <== Class ==>
//Agar tum class, ID ya element name use karte ho, to pehla matching element hi select hota hai.

const boxes = document.querySelector(".box2")
boxes.innerHTML = "Hey"

// <== Class Name ==>
//Agar tumhare page mein ek hi class ke multiple elements hain, to getElementsByClassName se tum un sab ko select kar sakte ho.
const btn = document.getElementsByClassName("button")


// <== Id ==>
//Har ID page mein ek hi baar use hota hai. Matlab, agar ek element ka ID header hai, to koi aur element us ID ko use nahi kar sakta.

const heading = document.getElementById("heading")
heading.style.color = "red";
heading.style.fontSize = "2rem";


// <== All Selector ==>
// querySelectorAll tumhe CSS selectors ke zariye multiple elements select karne ka option deta hai. Tum class, ID, tags, ya complex selectors ka use kar sakte ho.

const allBox = document.querySelectorAll(".Box")
// forEach lagana pdega kyuki ham sako le rahe h na isliye ok n a
allBox.forEach(element => {
    element.style.color = "red"
});




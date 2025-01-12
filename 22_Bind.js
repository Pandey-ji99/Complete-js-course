
//"Socho  tum ek delivery boy ho aur tum pizza deliver karte ho. Tumhara kaam hai order deliver karna, aur tumhare naam aur area ki details tumhari company ke system me stored hain. Ab agar kisi ne tumhare deliver function ko copy kar liya aur apne kaam ke liye use kiya, to woh tumhare naam aur area ko lose kar dega, kyunki uska connection tumhari company ke saath nahi raha. Bind ka kaam hota hai is connection ko hamesha ke liye fix karna, taaki koi bhi function tumhare object ka context na lose kare."

const deliveryBoy = {
    username: "Coder",
    area: "Sidkul",

    // Function defined jo order deliver karega
    Delivery: function (order) {
        // "this" yaha deliveryBoy object ko refer karega
        console.log(`${this.username} is delivering ${order} in ${this.area}`);
    }
}


 //  <== Without Bind  ==>
// const DeliveryOrder = deliveryBoy.Delivery;
// DeliveryOrder("Pizza")
// console.log(`${DeliveryOrder.order}`);

// Result: undefined is delivering Pizza in undefined
// Reason: "this" ab global object ya undefined ko refer karega, deliveryBoy ko nahi


// <== With Bind  ==>
// Bind ka use karke context fix kiya
const deliveryInHaridwar = deliveryBoy.Delivery.bind(deliveryBoy)
//Bind ne ensure kiya ki "this" hamesha deliveryBoy ko refer kare


// Ab function ko sahi context ke saath call kiya

deliveryInHaridwar("Pizza"); 
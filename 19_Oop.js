//?     <==  Constructor  ==>


function user(username, id, student) {

    this.username = username;
    this.id = id;
    this.student = student;
    return this;
}

// let deta = new user("Nitesh", 482912, true)
// let deta1 = new user("Coder", 32494, false)
// console.log(deta1);




//! <== there are multiple  type of OOP ==>

// ============================
// ============================

//*  <- Encapsulation:{ Data ko chhupana aur control karna.}

// Encapsulation ka matlab hai data aur methods (jo data ke saath kaam karte hain) ko ek unit me band karna. Isse direct access nahi milta, balki controlled access hota hai.

class locker{

#lockerBox;
constructor(initialamount){
    this.#lockerBox += initialamount
}

deposit(amount){
    if(amount > 0 )
    {
        console.log(` ${amount}₹ : Deposited `);
    }
    else{
        console.log(' Please Deposite amount grater than 100 ');
    }
}
getdata(){
    return this.#lockerBox;
}

}

let finalAmount= new locker(2000)
finalAmount.deposit(500)

console.log('Final amount',finalAmount);




// ============================
// ============================

//*  <- Inheritance:  { Parent class se properties lena.}

// Inheritance ka matlab hai ek class ke properties aur methods ko doosri class me use karna. Matlab ek parent class hoti hai aur child class usse kuch cheezein inherit karti hai.




// ============================
// ============================

//*  <- Polymorphism: { Ek function, multiple forms.}




// ============================
// ============================

//*  <- Abstraction:  { Unnecessary details ko hide karna.}

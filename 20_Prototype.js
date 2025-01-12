//! <== Prototype ==> 

// Prototype JavaScript ka ek object-based inheritance mechanism hai. Iska matlab hai ki har object JavaScript me ek "prototype" object ke saath linked hota hai, jisme wo properties aur methods share karta hai

// Base Object (Prototype)


const animal = {
eat(){
    console.log("Eat food");
}
}

const cat= Object.create(animal)
cat.run = function(){
    console.log('Cat is running ');
    
}
animal.eat()
animal.run()
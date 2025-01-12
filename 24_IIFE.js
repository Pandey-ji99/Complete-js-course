// <==  IIFE (Immediately Invoked Function Expression)   ==>

(function () {
    console.log("This function runs immediately!");
})();
(function (name){

this.name=name
console.log(name);

    
})("Nitesh");
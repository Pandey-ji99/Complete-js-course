//    <== Lexical  ==>

// Soch lo tum apne ghar me ho. Ghar ke andar tum apne kamre ka saman access kar sakte ho, par agar tum bahar jaaoge, to sirf wahi saman use kar sakte ho jo ghar ke bahar rakha hai. Kamre ke saman ka access sirf ghar ke andar hai (local scope). 


// function Outer() {
//     let username = "Nitesh";

//     function inner() {
//         console.log('inner', username);
//     }
//     inner()
// }
// Outer()
// console.log('Outer', username);


//    <==  Closure  ==>

// Jab ek function apne surrounding(lexical) scope ke variables ko yaad rakhta hai, chahe wo function apne outer scope ke bahar execute ho raha ho. { Soch lo tum ek bank locker kholte ho.Locker ka password tumhe bank ke andar hi diya gaya, lekin tumhe woh password yaad rahta hai aur tum usse kabhi bhi use kar sakte ho }  



function Makefun() {
    
    const name="nitesh"

    function secondFun() {
        console.log(name);
    }
return secondFun;
     
}
const fun=Makefun()
fun();




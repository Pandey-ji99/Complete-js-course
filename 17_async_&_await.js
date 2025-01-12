//?    <==  async & await ==>    



const readyPizza=()=>{
setTimeout(() => {
  console.log('Order Accept . . .');
}, 1000);
return new Promise((resolve) =>{
  setTimeout(() => {
    console.log('Pizza is ready for eating');
  }, 5000);
})

}

async function OrderPizza() {
    console.log('Ordering Pizza . . . ');
    
let Pizza =  await readyPizza();

console.log(Pizza);
console.log("Enjoying the pizza . . .");

  }

  OrderPizza()
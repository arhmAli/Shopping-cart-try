const priceTag=document.querySelector(".price");
const newpriceTag=document.querySelector(".secondPrice")
const btn=document.querySelector(".the-btn");
const btnTwo=document.querySelector(".second");
const cart=document.querySelector(".cart");
const hide=document.querySelector(".hidden")
const fullPrice=document.querySelector(".total");
const here=document.querySelector("#here");
let total=0;
btn.addEventListener("click",()=>{
    total=total+parseInt(priceTag.innerHTML);
    totalFirst=total-(total/10)
    alert(`Your total is ${totalFirst} with discount of ${total/10}`)
})
let totalHere=0;
btnTwo.addEventListener("click",()=>{
    totalHere=totalHere+parseInt(newpriceTag.innerHTML);
    totalDisc2=totalHere-(totalHere/10)
    alert(`Your total is ${totalDisc2} with discount of ${totalHere/10}`)
})
fullPrice.addEventListener("click",()=>{
    if(!total){
        alert(totalDisc2)
    }
    else if(!totalDisc2){
        alert(totalFirst)
    }
    else{
        here.innerText=totalFirst+totalDisc2;
    }
})
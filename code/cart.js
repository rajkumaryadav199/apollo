
var cart=JSON.parse(localStorage.getItem("mediCart"))
      
displayCart(cart)
var count=0;
function displayCart(cart){
   
    cart.map(function(item)
    {
        //  count +=Number((cart.length))

            var div1=document.createElement("div")
            div1.setAttribute("class", "cartCont")

           var h2= document.createElement("h2");
           h2.setAttribute("class", "head")
           h2.textContent=item.mediType;

           var h3Cont= document.createElement("h2");
           h3Cont.setAttribute("class",  "texth2")
           h3Cont.textContent=item.mediCont;

           var h3=document.createElement("h2");
           h3.setAttribute("class",  "texth2")
           h3.textContent=item.mediVita
    
           var h4 =document.createElement("h2")
           h4.textContent=item.mediMrp
             var div2=document.createElement("div")
              div2.setAttribute("class", "mediNme")

              var div3=document.createElement("div")
               div3.setAttribute("class", "mediPri")
             div2.append(h2,h3Cont,h3) 
             div3.append(h4)
    
   
    div1.append(div2, div3)
    // document.querySelector(".number").append(count)
    document.querySelector("#cartDiv").append(div1)
    
}) 


}
var total=cart.reduce(function(ac,cv)
{
   return ac+Number(cv.mediMrp)
},0)

document.querySelector("#pri").textContent=total;

document.querySelector("#totalNumber").innerHTML=cart.length 

document.querySelector("#btn1").addEventListener("click",bT);
// var amount=total;
function bT(){
console.log(total)

// console.log(amount)
var coupon = document.querySelector("#coupan").value;
if(coupon == "masai30"){
    var a = total*(30/100);
console.log(a)
    document.querySelector("#coupPri").textContent = a;
document.querySelector("#netPri").textContent = total-a;
}

}
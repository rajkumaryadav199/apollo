var slideIndex = 1;
showSlides(slideIndex);
 
function plusSlides(n) {
    showSlides(slideIndex += n);
}
 
function currentSlide(n) {
    showSlides(slideIndex = n);
}
 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) 
    
    {
        dots[i].className = dots[i].className.replace(" active", "");
        
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

     
function toggolPopup(){

}


// product-page
var mediItem= JSON.parse(localStorage.getItem("medicinList"));

displayItem(mediItem)

var mediCart=JSON.parse(localStorage.getItem("mediCart")) || [];

function displayItem(mediItem)
{
    mediItem.map(function (item) 
        {

            console.log(item.mediType)

            var mediName=document.createElement("div")
              mediName.setAttribute("class","mediName")

              var containt=document.createElement("div")
              containt.setAttribute("class","containt")

              var h1=document.createElement("h1")
              h1.setAttribute("class", "h1head")
              h1.textContent=item.mediType;
              var h2Cont=document.createElement("h2")
              h2Cont.setAttribute("class","texth2" )
              h2Cont.textContent=item.mediCont;
              var h2Vita=document.createElement("h2")
              h2Vita.setAttribute("class","texth2" )
              h2Vita.textContent=item.mediVita;
               

              var mediPrice=document.createElement("div")
              mediPrice.setAttribute("class", "mediPrice")
          var h2Mrp=document.createElement("h2")
          h2Mrp.setAttribute("class", "h2mrp")
          h2Mrp.textContent=item.mediMrp;
             var btn=document.createElement("button")
             btn.setAttribute("class", "mediBtn")
               btn.textContent="ADD TO CART"
               btn.addEventListener("click", function(){
                addToCart(item);
              });
          mediPrice.append(h2Mrp, btn)

              mediName.append(h1, h2Cont, h2Vita)
        containt.append( mediName, mediPrice)

    document.querySelector("#medi-cart-div ").append(containt)
    })
}

function addToCart(item)
{  
  
    mediCart.push(item)
    localStorage.setItem("mediCart", JSON.stringify(mediCart))
    // window.location.href ="cart.html"
    // console.log(cart)
    
}


//   starting cart


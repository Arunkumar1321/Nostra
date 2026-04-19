// ads section
var cancel=document.querySelector(".cancel")
cancel.addEventListener("click",function(){
    cancel.parentElement.remove()
})
var I1=document.getElementById("I1")
I1.addEventListener("click",function(){
    I1.classList.toggle("fa-solid")
    I1.classList.toggle("fa-regular")

})
var I2=document.getElementById("I2")
I2.addEventListener("click",function(){
    I2.classList.toggle("fa-solid")
    I2.classList.toggle("fa-regular")

})
var I3=document.getElementById("I3")
I3.addEventListener("click",function(){
    I3.classList.toggle("fa-solid")
    I3.classList.toggle("fa-regular")

})
var I4=document.getElementById("I4")
I4.addEventListener("click",function(){
    I4.classList.toggle("fa-solid")
    I4.classList.toggle("fa-regular")

})
var I5=document.getElementById("I5")
I5.addEventListener("click",function(){
    I5.classList.toggle("fa-solid")
    I5.classList.toggle("fa-regular")

})
function searchProducts() {
    var searchbox = document.getElementById("Search").value.toUpperCase();
    var product = document.querySelectorAll(".Col__pi__list");

    for (var i = 0; i < product.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML;
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
        
    }
}
function Filterproducts(category) {
    var product = document.querySelectorAll(".Col__pi__list");

    for (var i = 0; i < product.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];
        if (match) {
            let textvalue = match.textContent.toUpperCase();
            if (textvalue.indexOf(category.toUpperCase()) > -1) {
                product[i].style.display = "";
            }else {
                product[i].style.display = "none";
            }
        }
         
        
    }
}
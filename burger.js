const burger=document.querySelector(".burger")
const burgerCont=document.querySelector(".navigation-cont")
burger.addEventListener("click", function(){
    burger.classList.toggle("burger-active")
})
burger.addEventListener("click", function(){
    burgerCont.classList.toggle("navigation-cont-active")
})
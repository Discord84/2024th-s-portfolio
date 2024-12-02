const burger=document.querySelector(".burger")
const burgerCont=document.querySelector(".navigation-cont")
burger.addEventListener("click", function(){
    burger.classList.toggle("burger-active")
})
burger.addEventListener("click", function(){
    burgerCont.classList.toggle("navigation-cont-active")
})
const burger2=document.querySelector(".burger2")
const burgerCont2=document.querySelector(".black-navigation-cont")
burger2.addEventListener("click", function(){
    burger2.classList.toggle("burger2-active")
})
burger2.addEventListener("click", function(){
    burgerCont2.classList.toggle("black-navigation-cont-active")
})
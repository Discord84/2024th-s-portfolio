new WOW().init();
let link=document.querySelector(".endbutton")
let form=document.querySelector(".form-container")
link.addEventListener("click",function(){
    form.classList.add("form-container-active")
})
let helicopter=document.querySelector(".form-close")
helicopter.addEventListener("click",function(){
    form.classList.remove("form-container-active")
})
function sendData(formData){
    let botToken="7783804284:AAGfv3yae2aKqYth3zdOpI_gomZHYYsSViU"
    let chatId="6907683304"
    let apiUrl=`https://api.telegram.org/bot${botToken}/sendMessage`
    const message =`
    У вас новое сообщение:
    <b>Имя заказчика: </b>${formData.formName}
    <b>Как связатся: </b>${formData.formSms}
    <b>Что ему нужно: </b>${formData.formInfo}
    `
    const params ={
        chat_id:chatId,
        text:message,
        parse_mode:"HTML"
    }
    return fetch(apiUrl,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(params)
    }).then(response=>response.json())
}
let send=document.querySelector(".form")
send.addEventListener("submit",(e)=>{
    e.preventDefault()
    const formData ={
        formName:document.getElementById("formName").value,
        formSms:document.getElementById("formSms").value,
        formInfo:document.getElementById("formInfo").value
    }
    send.innerHTML="<div class='formLog'><p>Loading...</p></div>"
    sendData(formData).then(result=>{
        if (result.ok){
            console.log("your sms are sended")
            send.innerHTML="<div class='formLog'><p>your sms are sended</p></div>"
        }
        else {
            console.log("ERROR 303")
            send.innerHTML="<div class='formLog'><p>ERROR 303</p></div>"
        }
    }).catch(error=>{
        console.error(error)
    }).finally(()=>{
        setTimeout(()=>{
            form.style.display="none"
            send.reset()
        },3000)
    })
})

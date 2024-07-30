let button=document.getElementById("btn")
button.addEventListener(click,()=>{
    alert("I was clicked, yay!!!")
})
button.addEventListener(click,()=>{
    document.querySelector(".box").innerHTML="<b>Yayy you were clicked<b> Enjoy your click"
})

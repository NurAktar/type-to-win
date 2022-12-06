var myinput = document.getElementById("input");
myinput.addEventListener("change",(e)=>{
    document.getElementById("car").style.left = myinput.value+'px';
});
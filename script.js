document.addEventListener("DOMContentLoaded", function(){

const noBtn = document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("mouseover", function(){

noBtn.style.position="relative";

noBtn.style.left =
(Math.random()*200-100)+"px";

noBtn.style.top =
(Math.random()*200-100)+"px";

});

}

});

function revealQR(){

document.getElementById("card").style.display="none";

document.getElementById("qrCard").style.display="block";

}

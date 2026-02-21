document.addEventListener("DOMContentLoaded", function(){

const noBtn = document.getElementById("noBtn");

/* NO button runs away */

noBtn.addEventListener("mouseover", function(){

const x = Math.random()*300 - 150;
const y = Math.random()*200 - 100;

noBtn.style.position="relative";

noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

});

});


/* reveal QR */

function revealQR(){

document.getElementById("card")
.classList.add("hidden");

document.getElementById("qrCard")
.classList.remove("hidden");

launchConfetti();

}


/* confetti effect */

function launchConfetti(){

for(let i=0;i<120;i++){

const confetti =
document.createElement("div");

confetti.style.position="fixed";

confetti.style.width="8px";
confetti.style.height="8px";

confetti.style.background=
`hsl(${Math.random()*360},100%,50%)`;

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-10px";

confetti.style.borderRadius="50%";

document.body.appendChild(confetti);

let fall=setInterval(()=>{

let top=parseInt(confetti.style.top);

if(top>window.innerHeight){

clearInterval(fall);
confetti.remove();

}

confetti.style.top=top+6+"px";

},15);

}

}

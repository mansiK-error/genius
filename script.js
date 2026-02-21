document.addEventListener("DOMContentLoaded", function(){

const noBtn=document.getElementById("noBtn");

/* NO button runs away */

noBtn.addEventListener("mouseover", function(){

noBtn.style.position="relative";

noBtn.style.left=(Math.random()*300-150)+"px";

noBtn.style.top=(Math.random()*200-100)+"px";

});

});


function startScan(){

document.getElementById("card").classList.add("hidden");

document.getElementById("scanCard").classList.remove("hidden");

let percent=0;

let interval=setInterval(function(){

percent++;

document.getElementById("scanText")
.innerText="Scanning Genius Level... "+percent+"%";

document.getElementById("progress")
.style.width=percent+"%";

if(percent>=100){

clearInterval(interval);

showResult();

}

},40);

}


function showResult(){

let name=document.getElementById("nameInput").value;

if(name=="") name="Genius";

document.getElementById("scanCard").classList.add("hidden");

document.getElementById("qrCard").classList.remove("hidden");

document.getElementById("resultText")
.innerText="✅ "+name+" is 100% Genius 😎 Proof required.";

launchConfetti();

setupUPI();

}


/* YOUR REAL PAYTM UPI SETUP */

function setupUPI(){

let upi="7858980950@pthdfc";

let amount="51";

let note="Genius Tax 😎";

let link=
`upi://pay?pa=${upi}&pn=Genius&am=${amount}&tn=${note}&cu=INR`;

document.getElementById("upiLink").href=link;

}


/* Confetti */

function launchConfetti(){

for(let i=0;i<100;i++){

let el=document.createElement("div");

el.style.position="fixed";
el.style.width="8px";
el.style.height="8px";

el.style.background=
`hsl(${Math.random()*360},100%,50%)`;

el.style.left=Math.random()*100+"vw";
el.style.top="-10px";

document.body.appendChild(el);

let fall=setInterval(()=>{

let top=parseInt(el.style.top);

if(top>window.innerHeight){

clearInterval(fall);
el.remove();

}

el.style.top=top+5+"px";

},15);

}

}

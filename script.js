document.addEventListener("DOMContentLoaded", function(){

let noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function(){

noBtn.style.position="relative";

noBtn.style.left=(Math.random()*200-100)+"px";

noBtn.style.top=(Math.random()*150-75)+"px";

});

});


function startScan(){

document.getElementById("card").classList.add("hidden");

document.getElementById("scanCard").classList.remove("hidden");

let percent=0;

let interval=setInterval(function(){

percent++;

document.getElementById("scanText").innerText=
"Scanning Personality Level... "+percent+"%";

document.getElementById("progress").style.width=
percent+"%";

if(percent>=100){

clearInterval(interval);

showResult();

}

},40);

}


function showResult(){

let name=document.getElementById("nameInput").value;

if(name=="") name="Aap";

document.getElementById("scanCard").classList.add("hidden");

document.getElementById("qrCard").classList.remove("hidden");


document.getElementById("resultText").innerText=
"वाह! "+name+" आप तो 100% ज्ञानी और Genius हैं 😎\nचलिए अब QR पर दक्षिणा भेज दीजिए हमें 💸";


setupUPI();

confetti();

}


/* UPI SETUP */

function setupUPI(){

let upi="7858980950@pthdfc";

let link=
"upi://pay?pa="+upi+"&pn=Mansi&cu=INR";

document.getElementById("upiLink").href=link;

}


/* CONFETTI */

function confetti(){

for(let i=0;i<80;i++){

let el=document.createElement("div");

el.style.position="fixed";

el.style.width="8px";
el.style.height="8px";

el.style.background="hsl("+Math.random()*360+",100%,50%)";

el.style.left=Math.random()*100+"vw";

el.style.top="-10px";

document.body.appendChild(el);

let fall=setInterval(function(){

let top=parseInt(el.style.top);

if(top>window.innerHeight){

clearInterval(fall);
el.remove();

}

el.style.top=top+5+"px";

},20);

}

}

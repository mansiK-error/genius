document.addEventListener("DOMContentLoaded", function(){

const noBtn = document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

}

});

function moveButton(){

const noBtn = document.getElementById("noBtn");

const x = Math.random()*200 - 100;
const y = Math.random()*200 - 100;

noBtn.style.transform =
`translate(${x}px, ${y}px)`;

}

function revealQR(){

const card = document.getElementById("card");
const qrCard = document.getElementById("qrCard");

if(card && qrCard){

card.classList.add("hidden");
qrCard.classList.remove("hidden");

}

}

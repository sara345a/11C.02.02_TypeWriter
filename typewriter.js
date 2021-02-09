"use strict";

let i = 0;
let getText = document.querySelector(".typewritten").textContent;
let speed = 250;

window.addEventListener("load", init);
function init() {
  console.log("init");
  // get the text from somevhere
  document.querySelector(".typewritten").textContent;

  // clear the HTML area
  document.querySelector(".typewritten").textContent = "";

  // start loop
  typeWritten();
}

function typeWritten() {
  if (i < getText.length) {
    document.querySelector(".typewritten").innerHTML += getText.charAt(i);
    i++;
    setTimeout(typeWritten, speed);
  }
}
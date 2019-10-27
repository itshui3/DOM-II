// Your code goes here

// click

let bodyCont = document.querySelector(".container.home");
let heroImg = document.querySelector("img");
heroImg.addEventListener("click", (event) => {
  event.target.style.padding = "50px";
  console.log(event);
  event.stopPropagation();
});
let headerParent = document.querySelector(".intro");
headerParent.addEventListener("click", (e) => {
  e.target.style.margin = "50px";
  console.log(e + "bubbled");
  });
// dblclick

const images = document.querySelectorAll(".img-content > img");
let imgConts = document.querySelectorAll(".img-content");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("dblclick", (event) => {
    imgConts[i].style.border = "2px solid black"});
}


let divs = document.querySelectorAll("div");
let divsArr = Array.from(divs);

let newLetter = document.createElement("p");
newLetter.textContent = "Hey!!";

divsArr.forEach((elem) => {
  elem.addEventListener("copy", function(e) {
    e.target.appendChild(newLetter);
  });
});

// auxclick

let hTwos = document.querySelectorAll("h2");

for (let i = 0; i < hTwos.length; i++) {
  hTwos[i].addEventListener("auxclick", (e) => {
    console.log(e);
    e.target.style.padding = "30px";
    e.target.style.fontSize = "5rem";
  });
}

// mouseenter && mouseleave

let paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("mouseenter", (e) => {e.target.style.color = "green"});
}

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("mouseleave", (e) => {e.target.style.color = "black"});
}

// resize

// window.onresize = () => bodyCont.style.backgroundColor = "red";

window.addEventListener('resize', (event) => {bodyCont.style.backgroundColor = "red"});
// so it works with 'resize' but not 'onresize'
// why?

// keydown && keyup

// 

// context menu
// window.addEventListener('contextmenu', (e) => {e.preventDefault()});
// it works without oncontextmenu, but 'contextmenu' with addEventListener();

let keysPressed = [];
window.addEventListener("load", function(e) {console.log("Hi")});
window.addEventListener("keydown", (e) => {
  console.log(event.code[3]);
  keysPressed.push(event.code[3]);
}); 
// wow... is it really that easy
// nav items preventDefault()

let homeNav = document.querySelector("#home-nav");
console.log(homeNav);
homeNav.addEventListener("click", function(e) {e.preventDefault();});

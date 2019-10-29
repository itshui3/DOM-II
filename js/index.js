// Your code goes here

// click

let bodyCont = document.querySelector(".container.home");
let heroImg = document.querySelector("img");
heroImg.addEventListener("click", (event) => {
  TweenMax.to(".intro", .5, {
    padding: "5px"
  });
  TweenMax.to(".intro", 1, {
    x: -50
  });
  console.log(event);
});
heroImg.addEventListener("auxclick", (e) => {
  TweenMax.to(heroImg, 2, {
    opacity: "0.001",
    display: "none",
    position: "absolute",
    width: "2000px",
    height: "1500px",
    rotation: 720
  });
});
let headerParent = document.querySelector(".intro");

headerParent.addEventListener("click", (e) => {
    TweenMax.to(".intro", 1, {
      scale: 1.1
    });
    console.log("hi");
  });

// GSAP test

heroImg.addEventListener("click", (eventObject) => {
  TweenMax.to(".main-navigation", 3, {
    backgroundColor: "black"
    });
})

// dblclick

// const images = document.querySelectorAll(".img-content > img");
// let imgConts = document.querySelectorAll(".img-content");
// for (let i = 0; i < images.length; i++) {
//   images[i].addEventListener("dblclick", (event) => {
//     TweenMax.to(".img-content", 2, {
//       border: "2px solid black"
//     });
// });


let divs = document.querySelectorAll("div");

let newLetter = document.createElement("p");
newLetter.textContent = "Hey!!";

divs.forEach((elem) => {
  elem.addEventListener("copy", function(e) {
    e.target.appendChild(newLetter);
  });
});

// auxclick

let hTwos = document.querySelectorAll("h2");

for (let i = 0; i < hTwos.length; i++) {
  hTwos[i].addEventListener("auxclick", (e) => {
    e.target.style.padding = "30px";
    e.target.style.fontSize = "5rem";
  });
}
hTwos.forEach( (elem) => {
  elem.addEventListener("auxclick", (e) => {
    TweenMax.to(elem, 2, {
      fontSize: "50rem",
      display: "none",
      color: "white",
      position: "absolute",
      rotation: 720
    });
  });
}); // what

const hTwo = document.querySelector("h2");
  hTwo.addEventListener("click", function(e) {
    hTwo.textContent = "Let's Goooo!!!";
    TweenMax.to("h2", 1, {
      x: 500
    });
    e.stopPropagation;
}); // makes all h2's affected. Isn't there a way to target one h2 without giving it a class?

// mouseenter && mouseleave

let paragraphs = document.querySelectorAll("p");
// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].addEventListener("mouseenter", (e) => {e.target.style.color = "green"});
// }
TweenMax.to("p", 0.1, {
  color: "white"
});

paragraphs.forEach( (elem) => {
  elem.addEventListener("mouseenter", function(e) {
    TweenMax.to(elem, 1, {
      color: "green"
    });
  });
  elem.addEventListener("mouseleave", function(e) {
    TweenMax.to(elem, 2, {
      color: "beige"
    });
  });
});



// resize

// window.onresize = () => bodyCont.style.backgroundColor = "red";

window.addEventListener('resize', (event) => {
  TweenMax.to(".container.home", 4, {
    backgroundColor: "red"
  });
});

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
homeNav.addEventListener("click", function(e) {
  e.preventDefault();
});

document.querySelector("body").addEventListener("auxclick", function(e) {
  TweenMax.to(e.target, 1.5, {
    fontSize: "50rem",
    display: "none",
    color: "white",
    position: "absolute",
    rotation: 720

  });
  e.stopPropagation;
});

// console.log(document.querySelector(".home"));
// if( document.querySelector(".home").style.position === "absolute" ) {
//   const newH = document.createElement("h1");
//   newH.textContent = "Best User Experience Website 2019";
//   TweenMax.to("h1", .01, {
//     fontSize: "10rem"
//   });
//   document.querySelector("body").appendChild(newH);
//   console.log("did this work even?");
// }
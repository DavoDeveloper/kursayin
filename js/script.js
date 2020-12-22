// project start

let date = new Date();
let datePrint = document.querySelector(".date");
let month = date.getMonth();
if (month == 11) {
  datePrint.innerHTML = date.getDate() + ".12" + "." + date.getFullYear();
} else {
  datePrint.innerHTML = date.getDate() + "." + month + "." + date.getFullYear();
}

let animation = anime({
  targets: ".letter",
  opacity: 1,
  translateY: 50,
  rotate: {
    value: 360,
    duration: 2000,
    easing: "easeInExpo",
  },
  scale: anime.stagger([0.7, 1], { from: "center" }),
  delay: anime.stagger(100, { start: 1000 }),
  translateX: [-10, 30],
});

let planeAnimation = anime({
  targets: ".plane",
  keyframes: [
    { translateX: 70, translateY: 80 },
    { translateX: 10, translateY: 160 },
    { translateX: 70, translateY: 240 },
    { translateX: 10, translateY: 320 },
    { translateX: 70, translateY: 400 },
    { translateX: 10, translateY: 450 },
  ],
  duration: 12000,
  easing: "easeOutElastic(1, .8)",
});

let loginPage = document.querySelector(".page");
setTimeout(function () {
  let plane = document.querySelector(".plane");
  let main = document.querySelector(".main");
  plane.style.display = "none";
  main.style.display = "none";
  loginPage.style.display = "block";
}, 15);

var current = null;
document.querySelector("#email").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#password").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#submit").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

// form validation
let ok = document.querySelector(".ok");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let cancel = document.querySelector("#cancel");
let toolbar = document.querySelector(".toolbar");

function validation() {
  if (email.value == "1" && password.value == "1") {
    toolbar.style.display = "block";
    loginPage.style.display = "none";
  } else {
    reload();
  }
}

function reload() {
  location.reload();
}

ok.addEventListener("click", validation);
cancel.addEventListener("click", reload);

// main windows
let tip = document.querySelector(".tip");
let help = document.querySelector(".help");
let windows = document.querySelector(".windows");

let tip1 = document.querySelector(".tip1");
let help1 = document.querySelector(".help1");

function createWindow(el, darget) {
  darget.addEventListener("click", () => {
    el.classList.remove("hide");
    el.classList.add("show");
  });
}

createWindow(tip1, tip);
createWindow(help1, help);
// tip.addEventListener("click", createWindow(tip1));
// help.addEventListener("click", createWindow(help1));

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
}, 15000);

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
let author = document.querySelector(".author");
let author1 = document.querySelector(".author1");
let tip1 = document.querySelector(".tip1");
let help1 = document.querySelector(".help1");
let windows = document.querySelector(".windows");

function createWindow(el, darget) {
  darget.addEventListener("click", () => {
    el.classList.remove("hide");
    el.classList.add("show");
  });
}

createWindow(tip1, tip);
createWindow(help1, help);
createWindow(author1, author);

// exit function
let exit = document.querySelector(".exit");
let tools = document.querySelector(".tools");
exit.addEventListener("click", () => {
  let a = confirm("are you sure?");
  if (a == true) {
    location.reload();
  } else {
    return false;
  }
});

// close all windoww
let closeAll = document.querySelector(".closeAll");
closeAll.addEventListener("click", () => {
  tip1.classList.add("hide");
  help1.classList.add("hide");
  author1.classList.add("hide");
});

// sort
let sort = document.querySelector(".sort");
let controls = document.querySelector(".controls");
sort.addEventListener("click", () => {
  controls.classList.toggle("show1");
});

// sort verical
let verical = document.querySelector(".vertical");
verical.addEventListener("click", () => {
  windows.classList.remove("flex");
});

// sort horizontal
let horizontal = document.querySelector(".horizontal");
horizontal.addEventListener("click", () => {
  windows.classList.add("flex");
});

// // read file
let con = 0;
const next = document.querySelector(".next");
const tip_block = document.querySelector(".tip_block");
next.addEventListener("click", getPosts);
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      const body = post[con].body;
      const p = document.createElement("p");
      p.innerHTML = `${body}`;
      tip_block.appendChild(p);
      if (con % 2 == 0) {
        tip_block.innerHTML = "";
      }
    });
  con++;
}

// read file

let input = document.querySelector(".file");
let textarea = document.querySelector("textarea");

input.addEventListener("change", () => {
  let files = input.files;

  if (files.length == 0) return;

  const file = files[0];

  let reader = new FileReader();

  reader.onload = (e) => {
    const file = e.target.result;
    const lines = file.split(/\r\n|\n/);
    textarea.value = lines.join("\n");
  };

  reader.onerror = (e) => alert(e.target.error.name);

  reader.readAsText(file);
});

// close method
let okBut = document.querySelector(".okBut>button");
let okay = document.querySelector(".okay>button");
let okey = document.querySelector(".okey");
function closeMothod(e, target) {
  target.addEventListener("click", () => {
    e.classList.add("hide");
  });
}
closeMothod(help1, okBut);
closeMothod(author1, okay);
closeMothod(tip1, okey);

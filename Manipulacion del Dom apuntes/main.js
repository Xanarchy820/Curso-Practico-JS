const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafo1 = document.getElementsByClassName("parrafo1");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafo1,
    pid,
    input
});

h1.innerText = "Texto <br> Cambiado";
// console.log(h1.getAttribute("class"));
// h1.setAttribute("class", "rojo");
// console.log(h1.getAttribute("class"));

h1.classList.add("rojo");
h1.classList.remove("verde");

// console.log(h1.classList.contains("rojo"));

input.value = "456";

const img = document.createElement("img");
img.setAttribute("src", "./cat-gae85f6bb8_640.jpg");
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);
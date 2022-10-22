let numa = document.querySelector("#numa");
let btn = document.querySelector(".btn");
let container = document.querySelector(".container");

btn.onclick = function name() {
  numa = Number(numa.value);
  numberOneTriangle(numa);
};

function numberOneTriangle(num) {
  for (let index = 1; index <= num; index++) {
    let s = "";
    for (let index1 = 0; index1 < index; index1++) {
      s += "*";
    }
    let x = document.createElement("span");
    let t = document.createTextNode(s);
    x.appendChild(t);
    container.appendChild(x);
  }
}

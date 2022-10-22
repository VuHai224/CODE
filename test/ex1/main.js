let numa = document.querySelector("#numa");
let numb = document.querySelector("#numb");
let btn = document.querySelector(".btn");
let error1 = document.querySelector("#error1");
let error2 = document.querySelector("#error2");
let result = document.querySelector("#result");

btn.onclick = function () {
  console.log("a " + numa);
  console.log("b " + numb);
  numa = Number(numa.value);
  numb = Number(numb.value);
  console.log(numa);
  console.log(numb);
  if (numa < 2) {
    error1.innerHTML = "Vui long nhap so a >= 2";
    return;
  }
  if (numa > numb) {
    error2.innerHTML = "Vui long nhap so a nho hon so b";
    return;
  }
  let a = "";
  for (let index = numa; index <= numb; index++) {
    if (check(index)) {
      a += " " + index;
    }
  }
  result.innerHTML = a;
};
function check(num) {
  for (let index = 2; index <= Math.round(Math.sqrt(num)); index++) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
}

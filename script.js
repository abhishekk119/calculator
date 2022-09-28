document.addEventListener("keyup", function (event) {
  if (event.key == 1) {
    event.preventDefault();
    document.getElementById("one").click();
  } else if (event.key == 2) {
    event.preventDefault();
    document.getElementById("two").click();
  } else if (event.key == 3) {
    event.preventDefault();
    document.getElementById("three").click();
  } else if (event.key == 4) {
    event.preventDefault();
    document.getElementById("four").click();
  } else if (event.key == 5) {
    event.preventDefault();
    document.getElementById("five").click();
  } else if (event.key == 6) {
    event.preventDefault();
    document.getElementById("six").click();
  } else if (event.key == 7) {
    event.preventDefault();
    document.getElementById("seven").click();
  } else if (event.key == 8) {
    event.preventDefault();
    document.getElementById("eight").click();
  } else if (event.key == 9) {
    event.preventDefault();
    document.getElementById("nine").click();
  } else if (event.key == 0) {
    event.preventDefault();
    document.getElementById("zero").click();
  } else if (event.key === "/") {
    event.preventDefault();
    document.getElementById("divide").click();
  } else if (event.key === "*") {
    event.preventDefault();
    document.getElementById("multiply").click();
  } else if (event.key === "-") {
    event.preventDefault();
    document.getElementById("minus").click();
  } else if (event.key === "+") {
    event.preventDefault();
    document.getElementById("plus").click();
  } else if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equal").click();
  } else if (event.key === "Escape") {
    event.preventDefault();
    document.getElementById("allclear").click();
  } else if (event.key === "Backspace") {
    event.preventDefault();
    document.getElementById("ers").click();
  } else if (event.key === ".") {
    event.preventDefault();
    document.getElementById("decimal-point").click();
  }
});

function myfunc(para) {
  if (para != "=" && para != "AC" && para != "ERS" && para != "+/-") {
    document.getElementById("user-input").innerHTML += para;
    document.getElementById("user-input").style.display = "block";
  } else if (para === "ERS") {
    document.getElementById("user-input").innerHTML = document
      .getElementById("user-input")
      .innerHTML.slice(0, -1);
  } else if (para === "AC") {
    document.getElementById("user-input").innerHTML = " ";
    document.getElementById("result").innerHTML = " ";
  } else if (para === "+/-") {
    let newvar = document.getElementById("user-input").innerHTML;
    let anothervar = newvar * -1;
    document.getElementById("user-input").innerHTML = anothervar;
  } else {
    let evaldata = document.getElementById("user-input").innerHTML;
    const cleanNum = (str) => str.replace(/\d*(\.\d+)?/g, (n) => n && +n);
    const clean = cleanNum(evaldata);
    //let newevaldata = evaldata.replace(/^0+/, ""); //Omitting the leading zeroes
    let resultData = eval(clean);
    let num = resultData.toFixed(2);
    document.getElementById("result").innerHTML = num;
  }
}

document.addEventListener("keyup", function (event) {
  if (event.key == 1) {
    document.getElementById("one").click();
  } else if (event.key == 2) {
    document.getElementById("two").click();
  } else if (event.key == 3) {
    document.getElementById("three").click();
  } else if (event.key == 4) {
    document.getElementById("four").click();
  } else if (event.key == 5) {
    document.getElementById("five").click();
  } else if (event.key == 6) {
    document.getElementById("six").click();
  } else if (event.key == 7) {
    document.getElementById("seven").click();
  } else if (event.key == 8) {
    document.getElementById("eight").click();
  } else if (event.key == 9) {
    document.getElementById("nine").click();
  } else if (event.key == 0) {
    document.getElementById("zero").click();
  } else if (event.key === "/") {
    document.getElementById("divide").click();
  } else if (event.key === "*") {
    document.getElementById("multiply").click();
  } else if (event.key === "-") {
    document.getElementById("minus").click();
  } else if (event.key === "+") {
    document.getElementById("plus").click();
  } else if (event.key === "Enter") {
    document.getElementById("equal").click();
  } else if (event.key === "Escape") {
    document.getElementById("allclear").click();
  } else if (event.key === "Backspace") {
    document.getElementById("ers").click();
  } else if (event.key === ".") {
    document.getElementById("decimal-point").click();
  }
});

function myfunc(para) {
  if (para != "=" && para != "AC" && para != "ERS" && para != "+/-") {
    if (document.getElementById("user-input").innerHTML.length <= 24) {
      //let a = Number(para).toLocaleString("en-IN");
      document.getElementById("user-input").innerHTML += para;
      document.getElementById("headings").innerHTML = Number(
        document.getElementById("user-input").innerHTML
      ).toLocaleString("en-IN");

      document.getElementById("user-input").style.display = "block";
    } else {
      alert("max length reached");
    }
  } else if (para === "ERS") {
    document.getElementById("user-input").innerHTML = document
      .getElementById("user-input")
      .innerHTML.slice(0, -1);
  } else if (para === "AC") {
    document.getElementById("user-input").innerHTML = " ";
    document.getElementById("result").innerHTML = " ";
    document.getElementById("user-input").style.animation = "none";
    document.getElementById("result").style.animation = "none";
  } else if (para === "+/-") {
    let newvar = document.getElementById("user-input").innerHTML;
    let anothervar = newvar * -1;
    document.getElementById("user-input").innerHTML = anothervar;
  } else {
    let evaldata = document.getElementById("user-input").innerHTML;
    const cleanNum = (str) => str.replace(/\d*(\.\d+)?/g, (n) => n && +n);
    const clean = cleanNum(evaldata);
    let resultData = eval(clean);
    let num = resultData.toFixed(2);
    let num2 = Number(num).toLocaleString("en-IN");
    if (num2.length <= 17) {
      document.getElementById("result").innerHTML = num2;
    } else {
      document.getElementById("result").innerHTML = "MaX";
    }

    document.getElementById("user-input").style.animation =
      "small 0.5s ease-in-out";
    document.getElementById("result").style.animation = "big 0.5s ease-in-out";
    document.getElementById("user-input").style.animationFillMode = "forwards";
    document.getElementById("result").style.animationFillMode = "forwards";
  }
}

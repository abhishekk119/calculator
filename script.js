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
    let resultData = eval(document.getElementById("user-input").innerHTML);
    let num = resultData.toFixed(2);
    document.getElementById("result").innerHTML = num;
  }
}

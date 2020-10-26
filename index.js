// document.querySelector("h1").innerHTML="Draw";
var name_p1=prompt("Enter Your Name: ");
document.querySelectorAll("p")[0].innerHTML=name_p1;
document.querySelectorAll("p")[1].innerHTML="Computer";


function myFunction() {
  var p1 = Math.floor(Math.random() * 6) + 1;
  var p2 = Math.floor(Math.random() * 6) + 1;
  if (p1 > p2){
    document.querySelector("h1").innerHTML = name_p1+" Wins!";
    alert("Dear "+name_p1+",you Won 20% off use "+p1*p2*2+"wghjk as coupon code");
  }
  else if (p2 > p1)
    document.querySelector("h1").innerHTML = "Comp Wins!";
  else
    document.querySelector("h1").innerHTML = "Draw!";
  var s = "dice";
  setimg(".img1", s, p1);
  setimg(".img2", s, p2);
}

function setimg(x, s, n) {
  document.querySelector("button").hidden="true";
  var f = s + n + ".png";
  document.querySelector(x).src = f;
}

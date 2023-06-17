var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6


var randomImage = "dice" + randomNumber1 + ".png"; //dice image 1-6

var randomImageSource1 = "images/" + randomImage; //IMAGES/dice 1-6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

//similarly for image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];




//changing h1


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
  } else {
   document.querySelector("h1").innerHTML = "Draw!!";
 }

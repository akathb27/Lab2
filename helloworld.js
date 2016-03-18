
var username = prompt("Welcome! Who is visiting this page?");
alert("Hello " + username + "! " + "I hope you enjoy Abby's page!");
var guessCorrect = 0;

var sistersName = "Maggie";
var guessOne = prompt("What is Abby's sister's name?");
console.log("Ask the user what Abby's sister's name is.");
var nameCorrect = (guessOne.toLowerCase() == sistersName.toLowerCase());

function nameYes(nameCorrect) {
  if(nameCorrect){
    message = "Correct! Abby's sister's name is Maggie!";
    document.getElementById("oneR").innerHTML=("X");
    guessCorrect += 1;
  } else {
    message = "That is not correct.";
    document.getElementById("oneW").innerHTML=("X");
  }
}
nameYes(nameCorrect);

console.log("Response to question about sister's name acknowledged.")
alert(message);

var livedIn = "Salem";
var guessTwo = prompt("What city was Abby raised in?");
console.log("Ask user what city Abby was raised in.");
var cityCorrect = (livedIn.toLowerCase() == guessTwo.toLowerCase());

function cityYes(cityCorrect) {
if (cityCorrect){
  message = "Correct! She was raised in Salem!";
  document.getElementById("twoR").innerHTML=("X");
  guessCorrect += 1;
} else {
  message = "Sorry. That is incorrect.";
  document.getElementById("twoW").innerHTML=("X");
  }
}
cityYes(cityCorrect)

console.log("Response to city she lived in question.");
alert(message);

var haveDog = "Yes";
var guessThree = prompt("Does Abby have a dog?");
console.log("Ask user if Abby has a dog.");
var dogCorrect = (haveDog.toLowerCase() == guessThree.toLowerCase());

function dogYes(dogCorrect) {
  if(dogCorrect){
  message = "You're correct! Abby does have a dog!";
  document.getElementById("threeR").innerHTML=("X");
  guessCorrect += 1;
} else {
  message = "Sorry. That is incorrect.";
  document.getElementById("threeW").innerHTML=("X");
  }
}
dogYes(dogCorrect);

console.log("Response to whether or not Abby has a dog.");
alert(message);

var myNumber = 7;
var guessFour = parseInt(prompt("Pick and enter a number between 1 and 10."));
console.log("Ask user to select and enter a number between 1-10.");
if(guessFour == myNumber){
  message = "Your selection is the same as mine!";
  guessCorrect += 1;
} else if (guessFour > myNumber){
  message = "Your selection is too high.";
} else {
  message = "Your selection is too low.";
}
console.log("Reponding to the number that the user entered.");
alert(message);

console.log("Check number of correct answers");
if (guessCorrect == 4){
  alert("Great Job! You got 4 correct!");
} else if (guessCorrect == 3){
  alert("You got 3 correct!");
} else if (guessCorrect == 2){
  alert("You got 2 correct.");
} else {
  alert("You did not pass.");
}

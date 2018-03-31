
// setting up the letters for the guesses
var funTimes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = [];
var losses = [];
var guessed = [];

//setting up the random choice for the psychic
var pdigit = Math.floor(Math.random() * 26);
psychicGuess = funTimes[pdigit];

console.log(psychicGuess);

document.onkeyup = function (event) {
var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();


console.log(letterGuess);


while (guessed < 13) {
    if (psychicGuess === letterGuess) {
      wins.push("1");
      document.getElementById("win").innerHTML = wins.write(wins.length);
}   else {
      guessed.push(letterGuess);
      document.getElementById("guesses").innerHTML = guessed.join(" ");
      document.write()

} // else loop close
} // while loop close

} // keyup event close
var wins = 0;
var losses = 0;
var ties = 0;

var choices = ["R", "P", "S"]

var humanChoice = prompt("Choose R, P, or S")
console.log(humanChoice)

var randomNum = Math.floor(Math.random() *3)
var computerChoice = choices[randomNum]

if (
    humanChoice === "S" && computerChoice === "P" ||
    humanChoice === "R" && computerChoice === "S" ||
    humanChoice === "P" && computerChoice === "R"
    ) {
        alert("You won!")
        wins++
    } else if (humanChoice === computerChoice) {
    alert("Round tied!")
    ties++
    }
else {
    alert("You lost!")
    losses++
}
alert("Wins:" + wins + "\nTies:" + ties + "\nLosses:" + losses)

//variables
    //num wins
    //num losses
    //num ties
    //
// human
//computer

//human chooses R, P, S
    //get chpice from user input

//computer randomly chooses r, p, s

//compare choices
// if HumanChoice is S and computerChoice is P OR
//if HumanChoice is and computerChoice is S OR
//if HumanChoice is P and computerChoice is R
//alert that we won
//increase wins


//wins
//ties
//loses
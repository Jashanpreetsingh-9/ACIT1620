let randomLoc = Math.floor(Math.random() * 5 );
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;

let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt("Read, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!"); 
    }
    else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3 ){
            alert("HIT!")
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You sank my Battleship")
            }
        }
        else {
            alert("HAHAHA Missed the target!!!")
        }
    }
}

let stats = "You took " + guesses + " guesses to sink my Battleship," + "which means your shooting accuracy was " + (3/guesses);
alert(stats);
//The “Coin Flip Streak” Game 
//1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
//2.	Create a do while loop.
//3.	Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
//4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
//5.	Set the condition of the do while loop to end once the coinFlip becomes “Tails”.

let coinFlip3;      
let number3;
let count3;
let guess3;
    do {
            number = Math.floor(Math.random() * 10 + 1);
window.alert("Welcome to the game coinFlip!");
count3 = 1;      
while (true) {
    guess3 = Number(window.prompt("Enter your number"));
    if (number3 < guess3) {  
    console.log("Tails");
    count3 += 1;
    } else if (number3 > guess3) {
        console.log("Heads");
        count3 += 1;
    } else {
        window.alert("Correct! You guessed it in " + count3 + " tries!");
    }
     }
} while (number3 < guess3);
        window.alert()
        window.document.write("It's Tails! I have reached the end!");
/*   

let coinFlip3;
   do {
       coinFlip = 0; coinFlip <= 10; coinFlip += 1;
        coinFlip = window.prompt("Enter a number between 1 and 10.");
    if (coinFlip <= 5) {
            window.alert("Heads");
            window.console.log("Heads.");
   }
} while (coinFlip > 5);
    window.document.write("It's Tails! I have reached the end!");
    */
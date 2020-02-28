/*
let coinFlip  */
//1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
//2.	Create a for loop that loops 10 times.
//3.	Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
//4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
/* */
let coinFlip2;     
        let number;
        let count;
        let guess;
number = Math.floor(Math.random() * 10 + 1);
        window.alert("Welcome to the game coinFlip!");
        count = 1;      
        while (true) {
 guess = Number(window.prompt("Enter your number"));
            if (number < guess) {  
            window.alert("Tails");
            count += 1;
            } else if (number > guess) {
                window.alert("Heads");
                count += 1;
            } else {
                window.alert("Correct! You guessed it in " + count + " tries!");
            }
        }    
           
        
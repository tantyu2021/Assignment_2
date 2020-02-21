       // coin flip game, used a comparison operator; functions: alert, prompt; conditional statements if / else if    
 
     
       let choice = window.prompt("Heads or Tails");
       let coinFlip = window.prompt("Enter a number between 1 and 10");
          if (choice === "Tails") {
                if (coinFlip > 5) {
       window.alert("The flip was tails and you chose tails...you win!"); 
       }  else if (coinFlip <= 5) {
       window.alert("The flip was tails but you chose heads...you lose!");
       }   
               } else if (choice === "Heads") {
                            if (coinFlip <= 5) {
       window.alert("The flip was heads and you chose heads...you win!"); 
       }  else if (coinFlip > 5) {
       window.alert("The flip was heads but you chose tails...you lose!");
       }         
               }
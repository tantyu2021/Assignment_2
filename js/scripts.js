var coinFlip = 7;
//Prompt the user to select “Heads or Tails” and set the result to a new variable called choice
var choice = prompt(“Heads or Tails”);
//a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
/*
4.	If the result is heads and the user selects heads, display the following message within an alert: 
The flip was heads and you chose heads...you win!
5.	If the result is heads and the user selects tails, display the following message within an alert: 
The flip was heads but you chose tails...you lose!
6.	If the result is tails and the user selects heads, display the following message within an alert: 
The flip was tails but you chose heads...you lose!
*/
let fname = window.prompt("What is your first name?");
let lname = window.prompt("What is your last name?");
window.document.write ("Welcome to the class " + fname + " " + lname);

window.alert("The flip was heads and you chose heads...you win!");
window.alert("The flip was heads but you chose tails...you lose!");
window.alert("The flip was tails but you chose heads...you lose!");
window.alert("The flip was tails and you chose tails...you win!");
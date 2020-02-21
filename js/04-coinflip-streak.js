// do while
let coinFlip;
   do {
       coinFlip = 0; coinFlip <= 10; coinFlip += 1;
        coinFlip = window.prompt("Enter a number between 1 and 10.");
    if (coinFlip <= 5) {
            window.alert("Heads");
            window.console.log("Heads.");
   }
} while (coinFlip > 5);
    window.document.write("It's Tails! I have reached the end!");
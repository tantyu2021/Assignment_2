/*
let coinFlip  */
        let coinFlip;
        for (coinFlip = 0; coinFlip <=10; coinFlip += 1) {
            coinFlip = window.prompt("Enter a number between 1 and 10.");
            if (coinFlip > 5) {
                    window.alert("Tail");
                    window.console.log("Tail.");
           } else if (coinFlip <= 5) {
                window.alert("Head");
                window.console.log("Head");
            }
        }
        
// Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 

for (var i = 0; i <=15; i++) {
    if (i % 2 === 0) {   //i modulus 10
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd')
    }
}
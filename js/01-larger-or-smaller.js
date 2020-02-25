 // two integers within two separate prompts. Display only the large of two   
        //  more compact syntax
console.log("compact syntex");        
        let houses = parseFloat(window.prompt("Enter how many houses on this street"));
        let trees = parseFloat(window.prompt("Enter number of trees"));
           (trees >= houses) ? window.alert("trees") : window.alert("houses"); 
 
console.log("staff - client");
           function greaterNum(staff, client) {
            if (staff === client) {
                console.log ("Those numbers are equel");
                return staff;
            } else if (staff > client) {
                return staff;
            } else if (client > staff) {
                return client;
            } else {
                console.log ("Those are incomparable!");
                return undefined;
            }
        }
        console.log(greaterNum(4, 4));
        console.log(greaterNum(8, 2));
        console.log(greaterNum(3, 13));
        console.log(greaterNum(3, 'table'));

console.log("large number");
function largeNum(num1, num2) {
   if (num1 === num2) {
       console.log ("Those numbers are equel");
       return num1;
   } else if (num1 > num2) {
       return num1;
   } else if (num2 > num1) {
       return num2;
   } else {
       console.log ("Those are incomparable!");
       return undefined;
   }
}
        console.log(largeNum(3, 3));
        console.log(largeNum(8, -3));
        console.log(largeNum(3, 13));
        console.log(largeNum(3, 'cat'));
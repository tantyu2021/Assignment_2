// If the answers is anything other than “y” or “n” the prompt should simply reappear until the user enters a valid entry. 
let miles, gallons, mpg, again = "y";
do {
    miles = parseFloat(window.prompt("Enter miles driven"));
    gallons = parseFloat(window.prompt("Enter size of tank in gallons."));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        window.document.write("Miles per gallon: " + parseInt(mpg) + "<br>");
    } else {
        window.alert("Please enter the vilid entries.");
    }
    again = window.prompt("For finish application (n)");
} while (again !== "n");

window.document.write("The application has terminated");


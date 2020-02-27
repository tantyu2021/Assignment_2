// Within investment, the number should be numeric. Within rate, the number should be numeric and between 0 and a realistic rate like 6%. For years, the number should be numeric and between 1 and 30.
let futureValue = 0;
let investment = 0;
let rate = 0;
let years = 0;
let i;

    investment = parseFloat(window.prompt("Enter invesrment amount as xxxx.xx"));
    rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
    years = parseInt(window.prompt("Enter number of years"));
    
     futureValue = investment;
if (!isNaN(investment) && investment > 0 && !isNaN(rate) && rate <= 10 && !isNaN(years) && years <= 30) {
    
for (i = 1; i <= years; i += 1) {
   
    futureValue = futureValue + (futureValue * rate / 100);   
}
} 
window.document.write("Investment amount: $" + investment + "<br>");
window.document.write("Interest rate: " + rate + '%' + "<br>");
window.document.write("Years " + years + "<br>");
window.document.write("Future value: $" + investment);


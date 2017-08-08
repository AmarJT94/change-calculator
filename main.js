function calculateChange (amountDue, amountReceived) {
// Creates an object that contains all denominations
    var sortedChange = {
        dollar: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0    
    }

    var calculatedChange = amountReceived - amountDue;
// Determines how many of each denomination is required
    if(calculatedChange.toFixed(2) / 1 >= 1) {
        sortedChange.dollar = Math.floor(calculatedChange / 1);
        calculatedChange = calculatedChange - sortedChange.dollar;
    }

    if(calculatedChange.toFixed(2) / .25 >= .25) {
        sortedChange.quarters = Math.floor(calculatedChange / .25);
        calculatedChange = calculatedChange - (sortedChange.quarters * .25);
    }

    if(calculatedChange.toFixed(2) / .1 >= .1) {
        sortedChange.dimes = Math.floor(calculatedChange / .1);
        calculatedChange = calculatedChange - (sortedChange.dimes * .1);
    }
    
    if(calculatedChange.toFixed(2) / .05 >= .05) {
        sortedChange.nickels = Math.floor(calculatedChange / .05);
        calculatedChange = calculatedChange - (sortedChange.nickels * .05);
    }

    if(calculatedChange.toFixed(2) / .01 >= .01) {
        sortedChange.pennies = Math.floor(calculatedChange.toFixed(2) / .01);
        calculatedChange = calculatedChange - (sortedChange.pennies * .01);
    }
// Applies final results to P element in HTML    
    $("#dollars-output").text(sortedChange.dollar);
    $("#quarters-output").text(sortedChange.quarters);
    $("#dimes-output").text(sortedChange.dimes);
    $("#nickels-output").text(sortedChange.nickels);
    $("#pennies-output").text(sortedChange.pennies);
}
// Passes in inputs to the calculate function
function handleClickEvent () {
    var amountDue = parseFloat($("#amount-due").val());
    var amountReceived = parseFloat($("#amount-received").val());
    var result = calculateChange(amountDue, amountReceived);
}

$("#calculate-change").click(handleClickEvent)
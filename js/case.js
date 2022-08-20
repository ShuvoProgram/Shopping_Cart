function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById("case-number-field"); // find input field
    const caseNumberString = caseNumberField.value; // find inner attribute case ( input = value )
    const previousCaseNumber = parseInt(caseNumberString); // convert string to number integer value

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1; // increase 1++ item
    } else {
        newCaseNumber = previousCaseNumber - 1;
    }
    return caseNumberField.value = newCaseNumber; // set value in newCaseNumber
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const displayResult = document.getElementById("total-case-price");
    displayResult.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function(){
    const caseTotal = updateCaseNumber(true);
    updateCaseTotalPrice(caseTotal);
    calculateSubTotal()

})
document.getElementById("btn-case-minus").addEventListener("click", function(){
    const caseTotal = updateCaseNumber(false);
    updateCaseTotalPrice(caseTotal);
    calculateSubTotal()

})
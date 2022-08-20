function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhone;
    if(isIncrease === true){
        newPhone = previousPhoneNumber + 1;
    } else {
        newPhone = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhone;
    return newPhone;
}

function updateTotalPrice(newPhonePrice){
    const totalPhonePrice = newPhonePrice * 1219;
    const displayResult = document.getElementById("total-price");
    displayResult.innerText = totalPhonePrice;
}

document.getElementById("btn-phone-plus").addEventListener("click", function(){
    const phonePrice = updatePhoneNumber(true);
    updateTotalPrice(phonePrice);
    calculateSubTotal();
})
document.getElementById("btn-phone-minus").addEventListener("click", function(){
    const phonePrice = updatePhoneNumber(false);
    updateTotalPrice(phonePrice);
    calculateSubTotal();
})
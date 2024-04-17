// set present total price
function setTotalPrice () {
    const previousTotal = previousTotalPrice();
    const presentTotal = previousTotal + 550;
    const element = document.getElementById('total-price');
    element.innerText = presentTotal;
}

// previous grand total price
function previousGrandTotal () {
    const element = document.getElementById('grand-total');
    const textValue = element.innerText;
    const numValue = parseInt(textValue);
    return numValue;
}

// set present grand total price
function setGrandTotal () {
    const previousTotal = previousGrandTotal();
    const presentTotal = previousTotal + 550;
    const element = document.getElementById('grand-total');
    element.innerText = presentTotal;
}
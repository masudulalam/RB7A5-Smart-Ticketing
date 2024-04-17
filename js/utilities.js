// Remove background color by element id
function removeBackgroundColorById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#F7F8F8]');
}

// Set background color by id
function setBackgroundColorById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]', 'text-white');
}

// // get seat left numbers 
// function getSeatLeftValue () {
//     const element = document.getElementById('total-seats');
//     const elementTextValue = element.innerText;
//     // console.log(typeof elementTextValue, elementTextValue);
//     const value = parseInt(elementTextValue);
//     // console.log(typeof value, value);
//     return value;
// }

// // set seat-left numbers 
// function setSeatLeftValue () {
//     const element = document.getElementById('total-seats');
//     element.innerText = getSeatLeftValue () - 1;
//     // console.log(element);
// }

// previous total price
function previousTotalPrice () {
    const element = document.getElementById('total-price');
    const textValue = element.innerText;
    const numValue = parseInt(textValue);
    return numValue;
}

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
function previousValue() {
    const element = document.getElementById('seat-numbers');
    const elementTextValue = element.innerText;
    const previousValue = parseInt(elementTextValue);
    // console.log(typeof previousValue, previousValue);
    return previousValue;
}

// get seat count numbers
function presentValue() {
    const currentNumbersOfSeat = previousValue() + 1;
    // console.log(currentNumbersOfSeat);
    return currentNumbersOfSeat;
}

// set seat count numbers update
function setUpdateValue() {
    document.getElementById('seat-numbers').innerText = presentValue();
}

// get inner text
function getInnerTextById() {
    const element = document.getElementById('a1');
    const text = element.innerText;
    return text;
}

function addDynamicEvent(event) {
    function changeColor(element) {
        element.style.backgroundColor = '#1DD100';
        element.style.color = 'white';
      }
    let seats = document.getElementsByClassName('seat');
    for (const seat of seats) {
        seat.addEventListener('click', function () {
            changeColor(this);
        })
    }

    // remove background color
    // removeBackgroundColorById();
    // set background color
    // setBackgroundColorById();

    // set seat count numbers update
    setUpdateValue();

    // get seat-left value
    getSeatLeftValue();
    // set seat-left value
    setSeatLeftValue();

    // append seat number
    const element = document.createElement('p');
    const text = getInnerTextById();
    element.append(text);
    document.getElementById('ticket-info').appendChild(element);
    // append class
    const classElement = document.createElement('p');
    classElement.innerText = 'Economy';
    document.getElementById('ticket-info').appendChild(classElement);
    // append price
    const priceElement = document.createElement('p');
    priceElement.innerText = '550';
    document.getElementById('ticket-info').appendChild(priceElement);

    // set Total Price
    setTotalPrice('total-price');

    // set Grand Total
    setGrandTotal();
}
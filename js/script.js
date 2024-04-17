// change background color

function changeColor(element) {
    element.style.backgroundColor = '#1DD100';
    element.style.color = 'white';
}
let seats = document.getElementsByClassName('seat-btn');
for (const seat of seats) {
    seat.addEventListener('click', function () {
        changeColor(seat);
    })
}

// get all seat-button
const allSeatBtn = document.getElementsByClassName('seat-btn');
// for seat count initial value
let count = 0;
let seatLeft = 40;
for (const button of allSeatBtn) {
    // add click event all seat-button
    button.addEventListener('click', function (event) {
        // seat count increases 1 by every click event
        count = count + 1;
        // set seat-count numbers by calling function
        setInnerText('seat-numbers', count);

        // seat-left decreases 1 by every click event
        seatLeft = seatLeft - 1;
        // set seat-left numbers by calling function
        setInnerText('total-seats', seatLeft);

        // set ticket number
        const ticketNumber = button.innerText;
        const paragraphOne = document.createElement('p');
        paragraphOne.innerText = ticketNumber;
        // set ticket class
        const paragraphTwo = document.createElement('p');
        paragraphTwo.innerText = 'Economy';
        // set ticket price
        const paragraphThree = document.createElement('p');
        paragraphThree.innerText = '550';
        // display ticket number, class & price 
        const div = document.createElement('div');
        div.appendChild(paragraphOne);
        div.appendChild(paragraphTwo);
        div.appendChild(paragraphThree);
        div.setAttribute('id', 'ticket-info-div')
        document.getElementById('ticket-info').appendChild(div);

        // set Total Price
        setTotalPrice();
        // set Grand Total
        setGrandTotal();

    })
}

// for set inner-text by given id & value
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function removeClassById () {
    const element = document.getElementById('a1');
    element.classList.remove('bg-[#F7F8F8]');
}

function previousValue () {
    const element = document.getElementById('seat-numbers');
    const elementTextValue = element.innerText;
    const previousValue = parseInt(elementTextValue);
    // console.log(typeof previousValue, previousValue);
    return previousValue;
}

function presentValue () {
    const currentNumbersOfSeat = previousValue () + 1;
    // console.log(currentNumbersOfSeat);
    return currentNumbersOfSeat;
}

function setUpdateValue () {
    document.getElementById('seat-numbers').innerText = presentValue ();
}

function addBackgroundColor () {
    removeClassById ();
    const element = document.getElementById('a1');
    element.classList.add('bg-[#1DD100]', 'text-white');
    setUpdateValue();
}
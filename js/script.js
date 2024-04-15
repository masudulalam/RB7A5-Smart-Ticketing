function removeClassById () {
    const element = document.getElementById('a1');
    element.classList.remove('bg-[#F7F8F8]');
}

function addBackgroundColor () {
    removeClassById ();
    const element = document.getElementById('a1');
    element.classList.add('bg-[#1DD100]', 'text-white');
}
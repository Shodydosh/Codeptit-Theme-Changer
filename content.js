console.log('Starting Theme Changer');

const Ele = document.querySelector('.student__submit') || null;
if (Ele !== null) Ele.id = 'submit';

// const site = window.location.hostname;
// console.log(site);
const Add_Custom_Style = (css) => (document.head.appendChild(document.createElement('style')).innerHTML = css);

// function injectButton() {
// Create the switch element
const switchElement = document.createElement('label');
switchElement.classList.add('switch');
switchElement.id = 'toggle-css';

const inputElement = document.createElement('input');
inputElement.type = 'checkbox';
inputElement.id = 'checkbox';
switchElement.appendChild(inputElement);

const spanElement = document.createElement('span');
spanElement.classList.add('slider');
spanElement.classList.add('round');
switchElement.appendChild(spanElement);

// Add the switch element to the HTML
document.querySelector('#nav__profile').appendChild(switchElement);

// Get the checkbox element
const checkbox = document.querySelector('#checkbox');

// Check if there is a "checked" key in LocalStorage
const isChecked = localStorage.getItem('checked');

if (isChecked === null) {
    // If "checked" is not found in LocalStorage, set checkbox value to false
    checkbox.checked = false;
} else {
    // If "checked" is found in LocalStorage, set checkbox value to its value
    checkbox.checked = JSON.parse(isChecked);
    if (checkbox.checked) document.querySelector('body').id = 'themeChanger';
}

checkbox.addEventListener('change', () => {
    // Set the "checked" key in LocalStorage to the new checkbox value
    localStorage.setItem('checked', checkbox.checked);

    if (checkbox.checked === true) {
        document.querySelector('body').id = 'themeChanger';
        console.log('inject css');
    } else {
        document.querySelector('body').removeAttribute('id');
        console.log('un-inject');
    }
});

var check = false;
setInterval(function () {
    if (document.getElementById('themeChanger') !== null && check === false) {
        document.getElementById('themeChanger').click();
        check = true;
    }
}, 1000);

console.log('Starting Theme Changer');

const Ele = document.querySelector('.student__submit') || null;
if (Ele !== null) Ele.id = 'submit';

document.addEventListener('DOMContentLoaded', function () {
    var body = document.getElementsByTagName('body');
    body.setAttribute('onload', "document.body.style.display='none';");
});

// function injectButton() {
//! Create the switch element
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

//! Create the loading element
const loadDiv = document.createElement('div');
loadDiv.innerHTML =
    '<div class="loader loader--style2" title="1">' +
    '<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" ' +
    'width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">' +
    '<path fill="#bd93f9" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">' +
    '<animateTransform attributeType="xml" ' +
    'attributeName="transform" ' +
    'type="rotate" ' +
    'from="0 25 25" ' +
    'to="360 25 25" ' +
    'dur="0.6s" ' +
    'repeatCount="indefinite"/>' +
    '</path>' +
    '</svg>' +
    '</div>';

//! Create the overlay element
const overlay = document.createElement('div');
overlay.classList.add('fullscreen-overlay');
overlay.id = 'overlay';

// Add the overlay element to the HTML
overlay.appendChild(loadDiv);
document.querySelector('#nav__profile').appendChild(overlay, () => {
    console.log(document.querySelector('fullscreen-overlay'));
});

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
        check = true;
    }
}, 1000);

const turnOffOverlay = function () {
    console.log(document.querySelector('fullscreen-overlay'));
    document.getElementsByClassName('fullscreen-overlay').classList.add = 'overlay-off';
    console.log('turned off');
};

turnOffOverlay();

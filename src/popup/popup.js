const closeButton = document.getElementById('close-btn');
closeButton.addEventListener('click', () => window.close());

// document.getElementById('toggle-theme').addEventListener('change', toggleCSS);

// function toggleExtension() {
//     chrome.management.getSelf(function (info) {
//         var newStatus = !info.enabled;
//         chrome.management.setEnabled(info.id, newStatus, function () {
//             document.getElementById('toggle').checked = newStatus;
//         });
//     });
// }

// function toggleCSS() {
//     var toggle = document.getElementById('toggle-theme');
//     if (toggle.checked) {
//         chrome.tabs.insertCSS({ file: 'main.css' });
//     } else {
//         chrome.tabs.removeCSS({ file: 'main.css' });
//     }
// }
const toggleCheckbox = document.getElementById('toggle-theme');

// toggleCheckbox.addEventListener('change', function () {
//     if (toggleCheckbox.checked) {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, { action: 'insert-css' });
//         });
//     } else {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, { action: 'remove-css' });
//         });
//     }
// });

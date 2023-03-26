console.log('background running...');

// function getStorageData(key) {
//     return new Promise(function (resolve, reject) {
//         chrome.storage.local.get(key, function (result) {
//             if (chrome.runtime.lastError) {
//                 reject(chrome.runtime.lastError);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// }

// function setStorageData(key, value) {
//     return new Promise(function (resolve, reject) {
//         var obj = {};
//         obj[key] = value;

//         chrome.storage.local.set(obj, function () {
//             if (chrome.runtime.lastError) {
//                 reject(chrome.runtime.lastError);
//             } else {
//                 resolve();
//             }
//         });
//     });
// }

// chrome.action.onClicked.addListener((tab) => {
//     console.log(tab);
//     chrome.storage.local.get('state', function (result) {
//         if (chrome.runtime.lastError) {
//             console.error(chrome.runtime.lastError);
//         } else {
//             // Pass the data to the main webpage using sendMessage
//             chrome.runtime.sendMessage({ data: result.state });
//         }
//     });
//     // getStorageData('state')
//     //     .then(function (result) {
//     //         if (result == undefined) {
//     //             setStorageData('state', false)
//     //                 .then(function () {
//     //                     console.log('Value saved successfully');
//     //                 })
//     //                 .catch(function (error) {
//     //                     console.error(error);
//     //                 });
//     //             result = false;
//     //         }
//     //         console.log(result);
//     //     })
//     //     .catch(function (error) {
//     //         console.error(error);
//     //     });
// });

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.type === 'myMessage') {
//         console.log('Received message:', message.data);
//         // Do something with the message data
//     }
// });

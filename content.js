console.log('Starting Theme Changer');
console.log(document.querySelector('.student__submit'));

const Ele = document.querySelector('.student__submit') || null;
if (Ele !== null) Ele.id = 'submit';

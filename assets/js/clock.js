// clock js
let box = document.querySelector('#box');
let hours = document.querySelector('.h');
let minutes = document.querySelector('.m');
let sec = document.querySelector('.s');
let circle = document.querySelector('#pbcircle');

setInterval(function(){
    let time = new Date();
    let h =time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    circle.style.width = (s / 60) * 100 + '%';
    box.innerHTML =` <h1>${ h > 12 ? zero(h -12) : zero(h)} :  ${zero(m)} : ${zero(s) } ${( zero(h) >= 12) ? 'PM' : 'AM'}</h1>`;
    
}, 100);


let zero = (zero) =>{
    return `${zero < 10 ? '0'+zero : zero }`
}
'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector('#home');
    //quick lazy fix to reload stuff while testing
    home.addEventListener('click', () => {
        /*this page is so light you don't even consider its reloading time as a performance issue, but it's a good practice to do it*/
        window.location.href = './index.html';
    });
    
});
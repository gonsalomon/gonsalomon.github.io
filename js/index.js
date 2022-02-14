'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector('#home');
    home.addEventListener('click', () => {
        window.location.href = './index.html';
    });
    let contact = document.querySelector('#contact');
    let content = document.querySelector('#content');
    contact.addEventListener('click', () => {
        if (contact.classList.contains('active')) {
            contact.classList.remove('active');
            content.innerHTML = '';
        } else {
            contact.classList.add('active');
            content.innerHTML = `<div class="col">
            <div class="row"><img class="tiny" src="./img/ig.svg"><a class="center" href="https://www.instagram.com/gonsalomonn/">Instagram</a></div>
            <div class="row"><img class="tiny" src="./img/mail.svg"><a class="center" id="mail">salomongonzalo8@gmail.com</a></div>
            </div>`;
            let mail = document.querySelector('#mail');
            mail.addEventListener('click', () => {
                window.location.href = 'mailto:salomongonzalo8@gmail.com';
            });
        }
    });
});
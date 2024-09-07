const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', functional() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

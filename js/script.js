const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.mobile_menu_wrapper'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

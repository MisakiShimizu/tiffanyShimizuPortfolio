// Hamburger Menu
const mobileMenu = document.getElementById('mobileMenu');
const mobile = document.querySelector('.logo ul');

mobileMenu.addEventListener('click', () => {
    mobile.classList.toggle('showMenu');
    if(!mobile.classList.contains('showMenu') ) {
        mobile.style.display = 'none';
    } else {
        mobile.style.display = 'flex';
    }
})


// // Window load event
const preloader = document.querySelector('.preloader');
const highlightWord = document.querySelector('.highlightWord');
const stop = 2500;
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.style.opacity = '0';
    }, stop);
    setTimeout( () => {
        preloader.style.display = 'none';
    }, 2800)
})


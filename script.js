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
// Remove transition
const img = document.querySelectorAll('img');
img.classList.remove('.transition');

// Scroll Animation
const observer = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            img.classList.add('transition');
            return;
        }
        img.classList.remove('transition');
    })
});

observer.observe(document.querySelector('.imgWrapper'));

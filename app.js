const parallex_el = document.querySelectorAll('.paralex');
let xValue = 0 , yValue = 0;

window.addEventListener('mousemove', (e) => {
    xValue = e.clientX - (window.innerWidth / 2);
    yValue = e.clientY - (window.innerHeight / 2);

    parallex_el.forEach((element) => {
        let speedx = element.dataset.speedx;
        let speedz = element.dataset.speedz;
        let isleft = parseFloat(getComputedStyle(element).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(element).left)) * isleft * 0.1;
        
    element.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * 0}px)) perspective(2000px) translateZ(${zValue * speedz}px)`;
    });

})

const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function moveToIndex(index) {
currentIndex = index;
track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
let newIndex = (currentIndex + 1) % images.length;
moveToIndex(newIndex);
});

prevButton.addEventListener('click', () => {
let newIndex = (currentIndex - 1 + images.length) % images.length;
moveToIndex(newIndex);
});

// Auto carousel: advance every 3 seconds (3000ms)
setInterval(() => {
let newIndex = (currentIndex + 1) % images.length;
moveToIndex(newIndex);
}, 3000);

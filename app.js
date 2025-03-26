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


const lights = document.querySelectorAll('.light');
const button = document.querySelector('.toggleButton');

let currentIndex = 0;

function switchLight() {
    switch (currentIndex) {
        case 0:
            lights[currentIndex].classList.remove('light--active');
            currentIndex = 1;
            lights[currentIndex].classList.add('light--active');
            break;
        case 1:
            lights[currentIndex].classList.remove('light--active');
            currentIndex = 2;
            lights[currentIndex].classList.add('light--active');
            break;
        case 2:
            lights[currentIndex].classList.remove('light--active');
            currentIndex = 0;
            lights[currentIndex].classList.add('light--active');
            break;
        default:
            break;
    }
}

button.addEventListener('click', switchLight);
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.images-slider img');

    if (images.length === 0) return;

    let currentIndex = 0;

    // make the first one active
    images[currentIndex].classList.add('active');

    const intervalTime = 5000;
    const nextImage = () => {
        images[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add('active');
    };

    setInterval(nextImage, intervalTime);
});

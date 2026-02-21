document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.images-slider img');

    if (images.length === 0) return;

    let currentIndex = 0;
    const intervalTime = 5000;

    const nextImage = () => {
        images[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add('active');
    };

    setInterval(nextImage, intervalTime);
});

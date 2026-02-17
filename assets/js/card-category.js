document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll(".card-category");

    cards.forEach(card => {
        card.addEventListener('click', e => {
            if (window.innerWidth < 768) {
                e.preventDefault();
                card.classList.toggle('active');
            }
        })
    })
})

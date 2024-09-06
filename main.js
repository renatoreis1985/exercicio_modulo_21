document.getElementById('trailerButton').addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('trailer').offsetTop,
        behavior: 'smooth'
    });
});

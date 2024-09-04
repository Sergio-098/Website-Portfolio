document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

fetch('AboutMe.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('about-content').innerText = data;
    })
    .catch(error => console.error('Error loading text file:', error));

document.addEventListener('DOMContentLoaded', function () {
    const logoText = document.querySelector('.logo-text');
    logoText.style.transition = 'all 0.5s ease-in-out';

    logoText.addEventListener('mouseover', function () {
        logoText.style.transform = 'scale(1.1)';
    });

    logoText.addEventListener('mouseout', function () {
        logoText.style.transform = 'scale(1)';
    });
});

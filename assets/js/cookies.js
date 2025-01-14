document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    // Comprobamos si ya se han aceptado las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
        // Aquí puedes añadir el código para activar las cookies que necesites
    });

    rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieConsent.style.display = 'none';
        // Aquí puedes añadir el código para desactivar las cookies
    });
});
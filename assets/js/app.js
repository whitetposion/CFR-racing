document.querySelector('.dropdown-btn').addEventListener('click', function() {
    var responsiveNav = document.querySelectorAll('.responsive-nav');
    for (var i = 0; i < responsiveNav.length; i++) {
        if (responsiveNav[i].style.display === 'block') {
            responsiveNav[i].style.display = 'none';
        } else {
            responsiveNav[i].style.display = 'block';
        }
    }
});
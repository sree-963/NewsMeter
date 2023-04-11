document.addEventListener("DOMContentLoaded", function () {
 
    window.addEventListener('scroll', function () {

        if (window.scrollY > 80) {
            document.getElementById('mainNav').classList.add('fixed-top' );
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            // mainNav.firstElementChild.firstElementChild.style.display = "block";
        } else {
            document.getElementById('mainNav').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
            // mainNav.firstElementChild.firstElementChild.style.display = "none";
        }
    });
});
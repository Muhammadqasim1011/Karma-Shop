document.addEventListener('DOMContentLoaded', function () {
    // Sticky Navbar
    window.onscroll = function () {myFunction()};

    var navbar = document.querySelector("nav");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    // Toggle menu open/close
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navUl.classList.toggle('open');
        menuIcon.classList.toggle('open');
    });

    // Handle dropdowns
    const dropdowns = document.querySelectorAll('.has-dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.preventDefault();
            e.currentTarget.parentElement.classList.toggle('open');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInside = e.target.closest('nav');
        if (!isClickInside) {
            dropdowns.forEach(dropdown => {
                dropdown.parentElement.classList.remove('open');
            });
            navUl.classList.remove('open');
            menuIcon.classList.remove('open');
        }
    });
});

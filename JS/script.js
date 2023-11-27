// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// handle menu link click
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        // close the menu when a link is clicked
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// scroll section
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.navbar a');
let header = document.querySelector('.header');

window.onscroll = () => {
    let scrollPosition = window.scrollY;

    // Toggle class 'sticky' based on scroll position
    header.classList.toggle('sticky', scrollPosition > 100);

    sections.forEach(sec => {
        let top = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
            // Remove 'active' class from all links
            navlinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the current section link
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};
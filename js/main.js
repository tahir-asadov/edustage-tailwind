

document.addEventListener('auxclick', function (e) {
    const body = document.getElementsByTagName('body')[0];
    if (e.button == 1) {
        if (body.classList.contains('bg')) {
            body.classList.remove('bg')
        } else {
            body.classList.add('bg')
        }
    }
})

const hamburger = document.querySelectorAll('.hamburger');
const overlay = document.querySelectorAll('.mobile-menu-overlay');
const close = document.querySelectorAll('.close');

function toggleMobileMenu() {
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('mobile-menu-open')) {
        body.classList.remove('mobile-menu-open')
    } else {
        body.classList.add('mobile-menu-open')
    }
}

if (hamburger[0]) {
    hamburger[0].addEventListener('click', function (e) {
        toggleMobileMenu();
    })
}

if (overlay[0]) {
    overlay[0].addEventListener('click', function (e) {
        toggleMobileMenu();
    })
}

if (close[0]) {
    close[0].addEventListener('click', function (e) {
        toggleMobileMenu();
    })
}


$(document).ready(function () {
    $('#course-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        nav: false,
        responsive: {
            0: {
                dots: true,
                nav: true,
                items: 1
            },
            600: {
                dots: true,
                nav: true,
                items: 2
            },
            1000: {
                dots: true,
                nav: true,
                items: 3
            }
        }
    })
    $('#client-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: false,
        responsive: {
            0: {
                dots: true,
                nav: false,
                items: 1
            },
            1024: {
                dots: true,
                nav: false,
                items: 2
            }
        }
    })
});

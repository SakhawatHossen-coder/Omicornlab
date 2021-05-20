//Hamburger Menu

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// let navBar = document.querySelector('#myLinks');

// navBar.addEventListener('click', myFunction());

// function myFunction() {
//     if (navBar.style.display === "block") {
//         navBar.style.display === 'none';
//     } else {
//         navBar.style.display === 'block';
//     }
// };

let navBar = document.getElementById("myLinks");
navBar.addEventListener('click', myFunction);

function myFunction() {
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
    }
};
// Image Slider
let carouselImages = document.querySelectorAll('.carousel-slide img');
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    // var x = document.getElementsByClassName("mySlides");
    if (n > carouselImages.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = carouselImages.length };
    for (i = 0; i < carouselImages.length; i++) {
        carouselImages[i].style.display = "none";
    }
    carouselImages[slideIndex - 1].style.display = "block";
}

upBtn = document.getElementById('myBtn');
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
    }

}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
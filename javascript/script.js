// javascript for open and close menu

const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const navMenu = document.querySelector(".nav-list");

if (openMenu) {
    openMenu.addEventListener("click", function() {
        navMenu.classList.add("activeMenu")
        const fixedScroll = document.querySelector("body");
        fixedScroll.classList.add("fixed");

    })
}

if (closeMenu) {
    closeMenu.addEventListener("click", function() {
        navMenu.classList.remove("activeMenu");
        const fixedScroll = document.querySelector("body");
        fixedScroll.classList.remove("fixed");
    })
};


// javascript for slider image and text
const images = document.querySelectorAll('.image');
const imageCount = images.length;
const slideText = document.querySelectorAll(".slidetext")
const textCount = slideText.length;
const nextBtn = document.querySelector('.nextBtn');
const previousBtn = document.querySelector('.previousBtn');

let count = 0;
console.log(textCount)

function showNext() {

    images[count].classList.remove('active');
    slideText[count].classList.remove("active");

    if (count < imageCount - 1) {
        count++;
    } else {
        count = 0
    };

    if (count < textCount - 1) {
        count++;
    } else {
        count = 0;
    };
    images[count].classList.add('active');
    slideText[count].classList.add("active");

}

function showPrevious() {
    images[count].classList.remove('active');
    slideText[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        count = imageCount - 1;
    };

    if (count > 0) {
        count--;
    } else {
        count = textCount - 1;
    };
    images[count].classList.add('active');
    slideText[count].classList.add("active");
}



// function keyPress(e) {
//     e = e || window.event;
//     if (e.keycode == "37") {
//         showPreviousImage();
//     } else if (e.keycode == "39") {
//         showNextImage();
//     }
// }

nextBtn.addEventListener("click", showNext);
previousBtn.addEventListener("click", showPrevious);
// document.addEventListener("keydown", keyPress);
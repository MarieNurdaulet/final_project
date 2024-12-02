const main_nav = document.querySelector('.navbar');
const menu = document.querySelector(".nav-links");
const menuItems = document.querySelectorAll(".linkItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const logo = document.querySelector(".logo");

const mediaQuery = window.matchMedia("(max-width: 799px)");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        logo.style.filter = "invert(13%) sepia(94%) saturate(6234%) hue-rotate(252deg) brightness(72%) contrast(141%)";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        closeIcon.style.filter = "invert(1)";
        logo.style.filter = "invert(1)";
    }
}

function handleMenuToggle(mediaQuery) {
    if (mediaQuery.matches) {
        // Window width is less than 800px
        hamburger.addEventListener("click", toggleMenu);
        menuItems.forEach((menuItem) => {
            menuItem.addEventListener("click", toggleMenu);
        });
    } else {
        // Remove event listeners if window is wider than 800px
        hamburger.removeEventListener("click", toggleMenu);
        menuItems.forEach((menuItem) => {
            menuItem.removeEventListener("click", toggleMenu);
        });
    }
}

handleMenuToggle(mediaQuery);

mediaQuery.addEventListener("change", handleMenuToggle);


window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        main_nav.classList.add('menuShadow');
    } else {
        main_nav.classList.remove('menuShadow');
    }
});

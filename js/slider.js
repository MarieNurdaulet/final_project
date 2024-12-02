let slideIndex = 1;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

showDivs(slideIndex);

prev.addEventListener("click", function () {
    plusDivs(-1);
});

next.addEventListener("click", function () {
    plusDivs(1);
});

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}


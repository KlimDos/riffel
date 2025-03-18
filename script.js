window.addEventListener("scroll", function () {
    const menu = document.querySelector(".menu");
    if (window.scrollY > 150) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
});

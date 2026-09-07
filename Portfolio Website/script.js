// ================================
// THEME TOGGLE
// ================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");

    themeIcon.textContent = isLight ? "☀" : "☾";

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

});


// ================================
// LOAD SAVED THEME
// ================================

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeIcon.textContent = "☀";

}


// ================================
// MOBILE MENU
// ================================

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuToggle.classList.toggle("active");

});


// ================================
// CLOSE MOBILE MENU
// ================================

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});



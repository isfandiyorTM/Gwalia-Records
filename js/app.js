// Nav links animation
const nav_links = document.querySelectorAll(".navigation a");

nav_links.forEach((link) => {
    link.addEventListener("click", () => {
        remove_link_class();
        link.classList.add("active");
    });
});

function remove_link_class() {
    nav_links.forEach((link) => {
        link.classList.remove("active");
    });
}

// Menu toggler
const menu_btn = document.getElementById("menu");
const menu = document.querySelector("header nav .container .navigation");
const shop_btn = document.querySelector(".shop");
const search_btn = document.querySelector(".search");

menu_btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    shop_btn.classList.toggle("active");
    search_btn.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    menu.classList.remove("active");
    shop_btn.classList.remove("active");
    search_btn.classList.remove("active");
});

// Slider
const slide_one = document.querySelector(".slide-one");
const slide_two = document.querySelector(".slide-two");
const slide_three = document.querySelector(".slide-three");
const slide_buttons = document.querySelectorAll(
    "header section .container .buttons button"
);

slide_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        remove_button_class();
        button.classList.add("active");

        if (button.id == "1") {
            slide_one.classList.remove("hide");
            slide_one.classList.add("active");
            slide_two.classList.remove("active");
            slide_two.classList.add("hide");
            slide_three.classList.remove("active");
            slide_three.classList.add("hide");
        }

        if (button.id == "2") {
            slide_one.classList.add("hide");
            slide_one.classList.remove("active");
            slide_two.classList.add("active");
            slide_two.classList.remove("hide");
            slide_three.classList.remove("active");
            slide_three.classList.add("hide");
        }

        if (button.id == "3") {
            slide_one.classList.add("hide");
            slide_one.classList.remove("active");
            slide_two.classList.remove("active");
            slide_two.classList.add("hide");
            slide_three.classList.add("active");
            slide_three.classList.remove("hide");
        }
    });
});

function remove_button_class() {
    slide_buttons.forEach((button) => {
        button.classList.remove("active");
    });
}
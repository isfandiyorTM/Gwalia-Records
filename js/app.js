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
// ------------------------------------------------------------------------------------------------------------
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

// ----------------------------------------------------------------------------------------------
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

// ----------------------------------------------------------------------------------------------------
// Sort types
const types_buttons = document.querySelectorAll(
    ".discs .discs-view .sorts .types button"
);

types_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        remove_types_class();
        button.classList.add("active");
    });
});

function remove_types_class() {
    types_buttons.forEach((button) => {
        button.classList.remove("active");
    });
}

// -------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
// Display cards
const card_container = document.querySelector(".card-container");

discs_list.forEach((disc) => {
    card_container.innerHTML += `
            <div class="card">
                <h2 class="sale">${disc.sale}</h2>
                <div class="image">
                    <img class="vinyl-img" src="${disc.img}" alt="${disc.name}">
                    <div class="buttons">
                        <button class="shop"><i class="fa-solid fa-cart-shopping"></i></button>
                        <button class="like"><i class="fa-solid fa-heart"></i></button>
                        <button class="search"><i class="fa-solid fa-search"></i></button>
                    </div>
                </div>
                <h2 class="vinyl-name">${disc.name}</h2>
                <h2 class="vinyl-price">${disc.prise}<span class="sale-prise">${disc.sale_prise}</span></h2>
            </div>
    `;
    const like_card = document.querySelectorAll(".card .buttons .like");
    like_card.forEach((like) => {
        like.addEventListener("click", () => {
            like.classList.toggle("active");
        });
    });

    const sales = document.querySelectorAll(".sale");
    sales.forEach((sale) => {
        if (sale.textContent != "false") {
            sale.classList.add("active");
        } else {
            sale.classList.add("hide");
        }
    });
    const sales_prise = document.querySelectorAll(".sale-prise");
    sales_prise.forEach((sale) => {
        if (sale.textContent != "false") {
            sale.classList.add("active");
        } else {
            sale.classList.add("hide");
        }
    });
});
const on_sale_btn = document.getElementById("sale");
on_sale_btn.addEventListener("click", () => {
    card_container.innerHTML = "";
    discs_list.forEach((disc) => {
        if (disc.sale !== false) {
            card_container.innerHTML += `
            <div class="card show">
                <h2 class="sale active">${disc.sale}</h2>
                <div class="image">
                    <img class="vinyl-img" src="${disc.img}" alt="${disc.name}">
                    <div class="buttons">
                        <button class="shop"><i class="fa-solid fa-cart-shopping"></i></button>
                        <button class="like"><i class="fa-solid fa-heart"></i></button>
                        <button class="search"><i class="fa-solid fa-search"></i></button>
                    </div>
                </div>
                <h2 class="vinyl-name">${disc.name}</h2>
                <h2 class="vinyl-price">${disc.prise}<span class="sale-prise active">${disc.sale_prise}</span></h2>
            </div>
    `;
            const like_card = document.querySelectorAll(".card .buttons .like");
            like_card.forEach((like) => {
                like.addEventListener("click", () => {
                    like.classList.toggle("active");
                });
            });
        }
    });
});

const all_discs_btn = document.getElementById("all");
all_discs_btn.addEventListener("click", () => {
    card_container.innerHTML = "";

    discs_list.forEach((disc) => {
        card_container.innerHTML += `
            <div class="card show">
                <h2 class="sale">${disc.sale}</h2>
                <div class="image">
                    <img class="vinyl-img" src="${disc.img}" alt="${disc.name}">
                    <div class="buttons">
                        <button class="shop"><i class="fa-solid fa-cart-shopping"></i></button>
                        <button class="like"><i class="fa-solid fa-heart"></i></button>
                        <button class="search"><i class="fa-solid fa-search"></i></button>
                    </div>
                </div>
                <h2 class="vinyl-name">${disc.name}</h2>
                <h2 class="vinyl-price">${disc.prise}<span class="sale-prise">${disc.sale_prise}</span></h2>
            </div>
    `;
        const like_card = document.querySelectorAll(".card .buttons .like");
        like_card.forEach((like) => {
            like.addEventListener("click", () => {
                like.classList.toggle("active");
            });
        });

        const sales = document.querySelectorAll(".sale");
        sales.forEach((sale) => {
            if (sale.textContent != "false") {
                sale.classList.add("active");
            } else {
                sale.classList.add("hide");
            }
        });
        const sales_prise = document.querySelectorAll(".sale-prise");
        sales_prise.forEach((sale) => {
            if (sale.textContent != "false") {
                sale.classList.add("active");
            } else {
                sale.classList.add("hide");
            }
        });
    });
});

const shop_btns = document.querySelectorAll(".card .buttons .shop");
const shop_count = document.querySelector(
    "nav .container .login-div .shop span"
);
let count = 0;
shop_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        count++;
        shop_count.innerHTML = count;
    });
});

// --------------------------------------------------------------------------------------------------------

// Scroll animation

const cards = document.querySelectorAll(".card-container .card");
const categories = document.querySelector(".categories");
const sorts = document.querySelector(".sorts");
const blog = document.querySelector("#blog");
const blog_container = document.querySelectorAll(
    "#blog .blogs-container .blog"
);
window.addEventListener("scroll", () => {
    const triggerBottom = (window.innerHeight / 5) * 4.5;

    cards.forEach((card) => {
        let card_top = card.getBoundingClientRect().top;
        if (card_top < triggerBottom) {
            card.classList.add("show");
        } else {
            card.classList.remove("show");
        }
    });

    const categories_top = categories.getBoundingClientRect().top;
    if (categories_top < triggerBottom) {
        categories.classList.add("show");
    } else {
        categories.classList.remove("show");
    }
    const sorts_top = sorts.getBoundingClientRect().top;
    if (sorts_top < triggerBottom) {
        sorts.classList.add("show");
    } else {
        sorts.classList.remove("show");
    }
    const blog_top = blog.getBoundingClientRect().top;
    if (blog_top < triggerBottom) {
        blog.classList.add("show");
    } else {
        blog.classList.remove("show");
    }

    blog_container.forEach((blog_container) => {
        const blog_container_top = blog_container.getBoundingClientRect().top;
        if (blog_container_top < triggerBottom) {
            blog_container.classList.add("show");
        } else {
            blog_container.classList.remove("show");
        }
    });
});

// Login / Register
const login_btns = document.querySelectorAll("#login-btn");
const register_btns = document.querySelectorAll("#register-btn");
const login_container = document.querySelector(".login-container");
const register_container = document.querySelector(".register-container");
const login_enter_btn = document.querySelector(".login");
const login_register = document.getElementById("login-register");
const login_close_btns = document.querySelectorAll("#close");
const login_close_background = document.querySelector(
    "#login-register .background"
);
login_enter_btn.addEventListener("click", () => {
    login_register.classList.add("show");
    document.body.style.overflowY = "hidden";
});

login_close_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        login_register.classList.remove("show");
        document.body.style.overflowY = "scroll";
    });
});

login_close_background.addEventListener("click", () => {
    login_register.classList.remove("show");
    document.body.style.overflowY = "scroll";
});

login_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        register_container.style.display = "none";
        login_container.style.display = "inline-block";
    });
});

register_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        register_container.style.display = "inline-block";
        login_container.style.display = "none";
    });
});
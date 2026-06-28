/*=====================================================
BREW HAVEN CAFE
Main JavaScript
======================================================*/

/* ==========================
LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});


/* ==========================
SCROLL PROGRESS BAR
========================== */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});


/* ==========================
BACK TO TOP BUTTON
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================
SMOOTH SCROLL
========================== */

/* ==========================
SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // Only smooth-scroll for section links like #about
        if (href !== "#" && href.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});

/* ==========================
ANIMATED COUNTERS
========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target") || +counter.innerText;

        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


/* ==========================
MOBILE MENU
========================== */

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ==========================
DARK MODE
========================== */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.classList.remove("fa-moon");

        themeToggle.classList.add("fa-sun");

    }

    else{

        themeToggle.classList.remove("fa-sun");

        themeToggle.classList.add("fa-moon");

    }

});


/* ==========================
MENU CARD HOVER EFFECT
========================== */

const cards = document.querySelectorAll(".menu-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


/* ==========================
NEWSLETTER
========================== */

const newsletter = document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🎉 Thank you for subscribing to Brew Haven Cafe!");

});

}


/* ==========================
RESERVATION FORM
========================== */

const reserveForm = document.querySelector(".reservation form");

if(reserveForm){

reserveForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Reservation request submitted successfully!");

reserveForm.reset();

});

}

/* ==========================
END OF SCRIPT.JS PART 1

NEXT:
slider.js

======================================================*/
// ===============================
// Dark Mode
// ===============================

const themeBtn = document.getElementById("theme-toggle");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark-mode");

themeBtn.textContent="☀️";

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

themeBtn.textContent="";

}else{

localStorage.setItem("theme","light");

themeBtn.textContent="";

}

});

// Search Popup

const searchBtn=document.getElementById("search-btn");
const searchBox=document.getElementById("search-box");
const closeSearch=document.getElementById("close-search");

if(searchBtn && searchBox){

searchBtn.onclick=()=>{

searchBox.classList.add("active");

}

closeSearch.onclick=()=>{

searchBox.classList.remove("active");

}

}
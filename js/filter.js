/*=========================================
BREW HAVEN CAFE
MENU FILTER
==========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {

button.addEventListener("click",()=>{

// Remove active class

filterButtons.forEach(btn=>{

btn.classList.remove("active");

});

// Add active class

button.classList.add("active");

const category = button.getAttribute("data-filter");

// Show All

if(category==="all"){

menuItems.forEach(item=>{

item.style.display="block";

});

return;

}

// Filter

menuItems.forEach(item=>{

if(item.classList.contains(category)){

item.style.display="block";

}

else{

item.style.display="none";

}

});

});

});


/*=========================================
SMOOTH APPEAR ANIMATION
==========================================*/

menuItems.forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="translateY(-10px) scale(1.03)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="translateY(0px) scale(1)";

});

});
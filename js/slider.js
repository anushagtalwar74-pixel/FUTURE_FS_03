/*=========================================
BREW HAVEN
SLIDER.JS
==========================================*/

// Testimonial Slider

const testimonials = document.querySelectorAll(".testimonial-card");

let current = 0;

function showTestimonials() {

    testimonials.forEach((card, index) => {

        if(index === current){

            card.style.display = "block";

            card.style.opacity = "1";

            card.style.transform = "scale(1)";

        }

        else{

            card.style.display = "none";

        }

    });

}

if(testimonials.length > 0){

showTestimonials();

setInterval(()=>{

current++;

if(current >= testimonials.length){

current = 0;

}

showTestimonials();

},4000);

}
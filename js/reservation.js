/*==================================================
BREW HAVEN CAFE
RESERVATION FORM VALIDATION
==================================================*/

const reservationForm = document.querySelector(".reservation form");

if(reservationForm){

reservationForm.addEventListener("submit", function(e){

e.preventDefault();

const name = reservationForm.querySelector("input[type='text']").value.trim();

const email = reservationForm.querySelector("input[type='email']").value.trim();

const phone = reservationForm.querySelector("input[type='tel']").value.trim();

const date = reservationForm.querySelector("input[type='date']").value;

const time = reservationForm.querySelector("input[type='time']").value;

const guests = reservationForm.querySelector("select").value;

if(name==="" || email==="" || phone==="" || date==="" || time===""){

alert("Please fill all the required fields.");

return;

}

const today = new Date();

const selectedDate = new Date(date);

if(selectedDate < today){

alert("Please choose a future date.");

return;

}

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

alert("Please enter a valid email address.");

return;

}

const phonePattern = /^[0-9]{10}$/;

if(!phone.match(phonePattern)){

alert("Phone number must contain exactly 10 digits.");

return;

}

alert(

"🎉 Reservation Confirmed!\n\n"

+

"Name : " + name +

"\nGuests : " + guests +

"\nDate : " + date +

"\nTime : " + time +

"\n\nThank you for choosing Brew Haven Cafe."

);

reservationForm.reset();

});

}
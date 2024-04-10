let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let timedp=document.getElementById('timed');
let showti=document.getElementById('showtime');
let showdate=document.getElementById('showdate');
let timedis="time";
const day = document.querySelector(".calendar-dates");

const currdate = document
	.querySelector(".calendar-current-date");

const prenexIcons = document
	.querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
let monthval="month";
// Function to generate the calendar
const manipulate = () => {

	// Get the first day of the month
	let dayone = new Date(year, month, 1).getDay();

	// Get the last date of the month
	let lastdate = new Date(year, month + 1, 0).getDate();

	// Get the day of the last date of the month
	let dayend = new Date(year, month, lastdate).getDay();

	// Get the last date of the previous month
	let monthlastdate = new Date(year, month, 0).getDate();

    // my
    let datedis=document.getElementById('disdate');
	let dateval=document.getElementById('dateval');

	// Variable to store the generated calendar HTML
	let lit = "";

	// Loop to add the last dates of the previous month
	for (let i = dayone; i > 0; i--) {
		lit +=
			`<li class="inactive">${monthlastdate - i + 1}</li>`;
	}

	// Loop to add the dates of the current month
	for (let i = 1; i <= lastdate; i++) {

		// Check if the current date is today
		let isToday = i === date.getDate()
			&& month === new Date().getMonth()
			&& year === new Date().getFullYear()
			? "active"
			: "";
		lit += `<li class="${isToday}">${i}</li>`;
	}

	// Loop to add the first dates of the next month
	for (let i = dayend; i < 6; i++) {
		lit += `<li class="inactive">${i - dayend + 1}</li>`
	}

	// Update the text of the current date element 
	// with the formatted current month and year
	currdate.innerText = `${months[month]} ${year}`;
    datedis.innerText= `${months[month]} ${year}`;
	monthval=`${months[month]} ${year}`;
	// update the HTML of the dates element 
	// with the generated calendar
	day.innerHTML = lit;
}

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

	// When an icon is clicked
	icon.addEventListener("click", () => {

		// Check if the icon is "calendar-prev"
		// or "calendar-next"
		month = icon.id === "calendar-prev" ? month - 1 : month + 1;

		// Check if the month is out of range
		if (month < 0 || month > 11) {

			// Set the date to the first day of the 
			// month with the new year
			date = new Date(year, month, new Date().getDate());

			// Set the year to the new year
			year = date.getFullYear();

			// Set the month to the new month
			month = date.getMonth();
		}

		else {

			// Set the date to the current date
			date = new Date();
		}

		// Call the manipulate function to 
		// update the calendar display
		manipulate();
	});
});
// let dates=document.querySelectorAll('ul');
// let lists=document.querySelector("li");


let butdisp=document.getElementById('buttons');
let ulElements = document.querySelectorAll('ul');
console.log(ulElements);
ulElements.forEach((ul) => {
    ul.addEventListener('click',()=>{
		console.log("clicked");
		let clickedUl = event.target.closest('ul'); // Get the clicked <ul> element
        let liElements = clickedUl.querySelectorAll('li'); // Get <li> elements within the clicked <ul>
		liElements.forEach((li) => {
            li.classList.remove('active');
        });

        // Add the 'active' class to the clicked <li> element
        event.target.classList.add('active');

		let activeLiValue = event.target.textContent; // or event.target.innerText

        // Do something with the value, for example, log it to the console
		dateval.innerText=activeLiValue;
		butdisp.style.display='block';
		showdate.innerText=activeLiValue+" "+monthval;
		timeanddate.innerText=activeLiValue+" "+monthval;
	})
});

let btncon=document.querySelectorAll('button');

    btncon.forEach((butt)=>{
        butt.addEventListener('click',()=>{
			// timedis=butt.value;
			timedp.innerText=butt.textContent;
            console.log(butt.value);
            // timedp.innerText=butt.textContent;
			showti.innerText=butt.value;
			console.log(showti.innerText);
			
			
        })
    })
	let name1=document.getElementById('name1');
	let timeanddate=document.getElementById('timeanddate');
let btnbt=document.getElementById("btnb");
btnbt.addEventListener('click',(event)=>{
    event.preventDefault();
    name1.innerText=document.getElementById("name").value;
	modal.style.display="none";
	let email=document.getElementById("email").value;
	let i1=document.getElementById("interest1").value;
	let i2=document.getElementById("interest2").value;
	let i3=document.getElementById("interest3").value;
	let i4=document.getElementById("message").value;
    
})

// using dayjs to set the date in the header section.
var currentDate = dayjs().format("DD-MMMM-YYYY");
// displaying the date to the page.
var displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentDate;
    // getting the current hour in 24 hour format.
var currentHour = dayjs().format("HH");
console.log(currentHour);

// getting all the time divs into an Obj.
var timeDivs = document.querySelectorAll('.time-div');

// Setting the classes on the timeDiv's past, present, and future
timeDivs.forEach(timeDiv => {
    var timeId = timeDiv.getAttribute('id');
    // Set the background color in the timeDiv elements for past, present, and future.
    if (currentHour == timeId) {
        timeDiv.classList.add('present');
    } else if (currentHour > timeId) {
        timeDiv.classList.add('past');
    } else {
        timeDiv.classList.add('future');
    }
})

// Getting the saveBtn's.
var saveBtn = document.querySelectorAll('.saveBtn');

// Adding an click event listener to the saveBtn's.
// sorting the time block text and text area text into variable to store to local storage.
saveBtn.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        // get the user input for the text area.
        var value = this.parentNode.querySelector('.time-block').value;
        console.log(value);
        // get the text of the time slot
        var getText = btn.parentNode.innerText;
        console.log(getText);
        time = getText.slice(0, 2);
        console.log(time);
        localStorage.setItem(time, value);
        var message = document.querySelector('#message')
        message.classList.remove('hide');

        setTimeout(function () {
            message.classList.add('hide');
        }, 3000);
    });
});

// Get the time-block data from localStorage and put it back on the page for 09.
let div09 = document.getElementById('09');
let textarea = div09.querySelector('.time-block');
textarea.value = localStorage.getItem('09');

// Get the time-block data from localStorage and put it back on the page for 09.
let div10 = document.getElementById('10');
textarea = div10.querySelector('.time-block');
textarea.value = localStorage.getItem('10');

// Get the time-block data from localStorage and put it back on the page for 09.
let div11 = document.getElementById('11');
textarea = div11.querySelector('.time-block');
textarea.value = localStorage.getItem('11');

// Get the time-block data from localStorage and put it back on the page for 09.
let div12 = document.getElementById('12');
textarea = div12.querySelector('.time-block');
textarea.value = localStorage.getItem('12');

// Get the time-block data from localStorage and put it back on the page for 09.
let div13 = document.getElementById('13');
textarea = div13.querySelector('.time-block');
textarea.value = localStorage.getItem('13');

// Get the time-block data from localStorage and put it back on the page for 09.
let div14 = document.getElementById('14');
textarea = div14.querySelector('.time-block');
textarea.value = localStorage.getItem('14');

// Get the time-block data from localStorage and put it back on the page for 09.
let div15 = document.getElementById('15');
textarea = div15.querySelector('.time-block');
textarea.value = localStorage.getItem('15');

// Get the time-block data from localStorage and put it back on the page for 09.
let div16 = document.getElementById('16');
textarea = div16.querySelector('.time-block');
textarea.value = localStorage.getItem('16');

// Get the time-block data from localStorage and put it back on the page for 09.
let div17 = document.getElementById('17');
textarea = div17.querySelector('.time-block');
textarea.value = localStorage.getItem('17');


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

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

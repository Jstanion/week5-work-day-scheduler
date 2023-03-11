// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // Add a listener for click events on the save button
  $('.saveBtn').on('click', function() {

    // Get the user input from the textarea element
    var userInput = $(this).siblings('.description').val();

    // Get the id of the time-block containing the button that was clicked
    var timeBlockId = $(this).parent().attr('id');
    
    // Save the user input in local storage using the id as the key
    localStorage.setItem(timeBlockId, userInput);
    });



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd MMM DD, YYYY'));
  console.log(today);
});

//Notes - 
  //use dayjs to reference each block to the current time and possibly set that value globally - not sure yet how to differentiate the span of time for each hour

  //add event listener for save button to store data in local storage

  //create a function that contians the following so it can be called for each time block
    //use a conditional statement for each time block to change the color of the container



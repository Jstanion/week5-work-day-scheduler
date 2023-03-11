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
  
    //grabs the current hour from dayjs
    var currentHour = dayjs().hour();
    
    // Function that applies the past, present, or future class to each time block
  $('.time-block').each(function() {
    
    // Takes the id and creates an array, the [1] grabs the number string from the array and parseInt changes the value from a string to a number
    var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

    // Conditional statement to compare the hour of the time-block with the current hour
    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
      } else if (timeBlockHour === currentHour) {
      $(this).addClass('present');
      } else {
      $(this).addClass('future');
      }
  });

  // Get any user input that was saved in localStorage and set the values of the corresponding textarea elements
  $('.time-block').each(function() {

    // Get the id of the time-block storing the data in local storage
    var timeBlockId = $(this).attr('id');

    // Get the user input from local storage based on the time-block id
    var userInput = localStorage.getItem(timeBlockId);

    // Display the user input value in the text are for the corresponding time-block
    $(this).children('.description').val(userInput);
    });

  // Display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd MMM DD, YYYY'));
});




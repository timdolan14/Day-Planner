// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Display date and time on top
$("#currentDay").text(moment().format("MMMM Do YYYY"));

var currentTime = dayjs.format(H);



function hourBlocking () {

$('.time-block').each(function () {

  var plannerBlock = $(".time-block").attr('id');

  // 'this' is referring to the time-block element in the HTML file (declared above)
  // Going into the HTML to find "time-block" and its ID
  // If the plannerBlock (current hour) is less than the currentTime (right now), 
  // Add past to the ID in the html
  
  if (plannerBlock < currentTime) {
    $(this).removeClass('future');
    $(this).removeClass('present');
    $(this).addClass('past');

    // If the plannerBlock (current hour) is equal to the currentTime (right now), 
    // Add present to the ID in the html

  } else if (plannerBlock === currentTime) {
    $(this).removeClass('future');
    $(this).removeClass('past');
    $(this).addClass('present');

    // if the plannerBlock (current hour) is greater than the currentTime (right now), 
    // add future to the ID in the html

  } else if (plannerBlock > currentTime) {
    $(this).addClass('future');
    $(this).removeClass('present');
    $(this).removeClass('past');
  }

  })

}

function planner () {

};

$(".saveBtn").on('click', function () {});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
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
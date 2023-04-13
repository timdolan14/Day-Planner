
// Display date and time on top
$("#currentDay").text(dayjs().format('dddd MMMM DD YYYY, h:mm A'));

var currentTime = dayjs().hour();

$('.time-block').each(function () {

  var plannerHour = parseInt($(this).attr('id').split("-")[1]);
  console.log(plannerHour);
  console.log(typeof plannerHour);
  console.log(typeof currentTime);

  // 'this' is referring to the time-block element in the HTML file (declared above)
  // Going into the HTML to find "time-block" and its ID
  // If the plannerHour(current hour) is less than the currentTime (right now), 
  // Add past to the ID in the html
  
  if (plannerHour < currentTime) {
    console.log("past");
    $(this).removeClass('future');
    $(this).removeClass('present');
    $(this).addClass('past');

    // If the plannerHour (current hour) is equal to the currentTime (right now), 
    // Add present to the ID in the html

  } if (plannerHour === currentTime) {
    console.log("present");
    $(this).removeClass('future');
    $(this).removeClass('past');
    $(this).addClass('present');

    // if the plannerHour (current hour) is greater than the currentTime (right now), 
    // add future to the ID in the html

  } if (plannerHour > currentTime) {
    console.log("future");
    $(this).addClass('future');
    $(this).removeClass('present');
    $(this).removeClass('past');
  }

  });


function savePlanner () {
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))
  $("#hour-18 .description").val(localStorage.getItem("hour-18"))
};

$(".saveBtn").on('click', function () {
  console.log("save");
  console.log($(this));
  console.log($(this).siblings(".description").val());
  console.log($(this).parent().attr("id"));
  var key = $(this).parent().attr("id");
  var endValue = $(this).siblings(".description").val();
  localStorage.setItem(key, endValue);
});

savePlanner();
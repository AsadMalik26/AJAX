/*  $(function () {
  $("#load").click(sendAJAX);
});

function sendAJAX() {
    console.log("AJAX resquest sending");
    // below is asyncronous call
    $.get("students.txt", handleResponse); //here 1st parameter is the relative path of the file, sencond paramete is the function which will handle the recieved file.
    // here 1st parameter of txt file actually the API Call (API last part), which we will discuss later when we study the APIs
    console.log("resquest sent");

}
function handleResponse(response) {
    console.log("response received");
    // console.log(response);
    // $("#results").empty(); 
    $("#results").append("<br>");
    $("#results").append(response);
}
  */
// modified code (simple/may be complex but clean and smaller)

$(function () {
  $("#load").click(function () {
    $.get("students.txt", function (response) {
      // $("#results").append("<br>");
      $("#results").empty();
      $("#results").append(response);
    });
  });
});


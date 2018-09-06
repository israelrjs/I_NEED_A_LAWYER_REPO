// Get references to page elements

var $lawyerName = $("#lawyerName");
var $type = $("#type");
var $zipCode = $("#zipCode");
var $phoneNumber = $("#phoneNumber");
var $State = $("#State");
var $IMG = $("#img");
var $password = $("#password");
var $email = $("#email");
var $matchPassword = $("#matchPassword");
var $submitBtn = $("#submit");
var $Ebox = $("#errors");
var $Search = $("#search");
var $zip = $("#zip");

var API = {
  saveLawyer: function(lawyers) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/lawyers",
      data: JSON.stringify(lawyers)
    });
  },
  getLawyers: function() {
    return $.ajax({
      url: "/api/lawyers",
      type: "GET"
    });
  },
  deleteLawyers: function(id) {
    return $.ajax({
      url: "/api/lawyers/" + id,
      type: "DELETE"
    });
  }
};

var handleFormSubmit = function(event) {
  event.preventDefault();

  var lawyer = {
    name: $lawyerName.val().trim(),
    type: $type.val().trim(),
    zipcode: $zipCode.val().trim(),
    phoneNumber: $phoneNumber.val().trim(),
    State: $State.val().trim(),
    img: $IMG.val().trim(),
    email: $email.val().trim(),
    password: $password.val().trim()
  };

  if (!lawyer.name) {
    alert("No Text fields must be left Empty!");
    return;
  }

  API.saveLawyer(lawyer);

  $lawyerName.val("");
  $type.val("");
  $zipCode.val("");
  $phoneNumber.val("");
  $State.val("");
  $email.val("");
  $password.val("");
  $matchPassword.val("");
  $IMG.val("");
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);

$Search.on("click", function() {
  var searchType = $("#type").val();
  console.log(searchType);

  $.get("/test/" + searchType, function(data) {
    // log the data to our console
    console.log(data);
  });
});

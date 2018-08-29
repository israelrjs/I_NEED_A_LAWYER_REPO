// Get references to page elements
var $exampleText = $("#example-text");
var $lawyerName = $("#lawyerName");
var $type = $("#type");
var $zipCode = $("#zipCode");
var $phoneNumber = $("#phoneNumber");
var $State = $("#State");
var $IMG = $("#inputGroupFile01");
var $exampleDescription = $("#example-description");

var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

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

var refreshLawyers = function() {
  API.getLawyers().then(function(data) {
    var $Lawyers = data.map(function(lawyers) {
      var $a = $("<a>")
        .text(lawyers.name)
        .attr("href", "/example/" + lawyers.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": lawyers.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($Lawyers);
  });
};

var handleFormSubmit = function(event) {
  event.preventDefault();

  var lawyer = {
    name: $lawyerName.val().trim(),
    type: $type.val().trim(),
    zipcode: $zipCode.val().trim(),
    phoneNumber: $phoneNumber.val().trim(),
    State: $State.val().trim(),
    img: $IMG
  };

  // if (!(lawyer.text && lawyer.description)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }

  API.saveLawyer(lawyer).then(function() {
    refreshExamples();
  });

  $lawyerName.val(""),
    $type.val(""),
    $zipCode.val(""),
    $phoneNumber.val(""),
    $State.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}
<a href="#" onclick="signOut();">
  Sign out
</a>;
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log("User signed out.");
  });
}

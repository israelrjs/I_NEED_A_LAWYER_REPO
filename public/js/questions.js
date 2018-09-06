var $Username = $("#Username");
var $Question = $("#Question");
var $Answer = $("#Answer");
var $Submitbutton = $("#submit");
var $Submitanswer = $("#submitAnswer");

var API = {
  saveQuestion: function(questions) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/questions",
      data: JSON.stringify(questions)
    });
  },
  getQuestions: function() {
    return $.ajax({
      url: "/api/questions",
      type: "GET"
    });
  },
  AnswerQuestions: function(id) {
    return $.ajax({
      url: "/api/questions/" + id,
      type: "POST"
    });
  }
};

var SubmitQuestion = function(event) {
  event.preventDefault();

  var Question = {
    Username: $Username.val().trim(),
    Question: $Question.val().trim(),
    Answer: $Answer.val().trim()
  };

  if (!Question.Username && Question.Question) {
    alert("Make Sure Fields Are Not Empty!");
    return;
  }

  API.saveQuestion(Question);
  API.getQuestions(Question);

  $Username.val("");
  $Question.val("");
  $Answer.val("");
};

var answertheQuestion = function() {
  var idQuestion = $(this)
    .parent()
    .attr("data-id");
  API.AnswerQuestions(idQuestion);
};

$Submitbutton.on("click", SubmitQuestion);
$Submitanswer.on("click", answertheQuestion);

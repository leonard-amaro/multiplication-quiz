// Generate a random number between 1 and 20
var firstNum = Math.floor(Math.random() * 10) + 1;
// Update the firstNum element with the randomly generated number
document.getElementById("firstNum").innerText = firstNum;

// Get the inner text of an HTML element with ID "secondNum"
var secondNum = parseInt(document.getElementById("secondNum").innerText);

// Multiply the firstNum and secondNum to get the answer
var answer = firstNum * secondNum;

// Put the answer randomly to ids' option1 to option4
var options = [answer, answer + 1, answer - 1, answer + 2];
options.sort(() => Math.random() - 0.5);

document.getElementById("option1").innerText = options[0];
document.getElementById("option2").innerText = options[1];
document.getElementById("option3").innerText = options[2];
document.getElementById("option4").innerText = options[3];

// Add a click event listener to all answer buttons
var answerButtons = document.querySelectorAll(".button-wrap button");
for (var i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function () {
    // Get the selected option
    var selectedOption = parseInt(this.querySelector("span").innerText);

    // Check if the selected option is correct
    if (selectedOption === answer) {
      // Update the result element with "CORRECT" and green color
      document.getElementById("result").innerText = "CORRECT";
      document.getElementById("result").classList.add("btn-success");
      document.getElementById("result").classList.remove("btn-danger");
      document.getElementById("refresh").classList.remove("hidden");
    } else {
      // Update the result element with "INCORRECT" and red color
      document.getElementById("result").innerText = "INCORRECT";
      document.getElementById("result").classList.add("btn-danger");
      document.getElementById("result").classList.remove("btn-success");
      document.getElementById("refresh").classList.remove("hidden");
    }
  });
}

const refreshBtn = document.getElementById("refresh");
refreshBtn.addEventListener("click", function () {
  location.reload();
});

const iconQuestion = document.querySelectorAll("img.icon");

const showAnswer = (e) => {
  let answerClassList = e.target.parentElement.nextElementSibling.classList;
  let answerToggle = answerClassList.toggle("hide");
  answerToggle
    ? (e.target.src = "assets/images/icon-plus.svg")
    : (e.target.src = "assets/images/icon-minus.svg");
};

iconQuestion.forEach((icon) => {
  icon.addEventListener("click", showAnswer);
});

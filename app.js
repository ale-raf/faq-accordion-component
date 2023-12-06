const container = document.querySelector("div.container");
const questions = [
  "What is Frontend Mentor, and how will it help me?",
  "Is Frontend Mentor free?",
  "Can I use Frontend Mentor projects in my portfolio?",
  "How can I get help if I'm stuck on a Frontend Mentor challenge?",
];
const answers = [
  "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
];

/**
 * TOGGLE ANSWER BY ADDING OR REMOVING CLASS
 * @param {event} event Event target
 * @param {image} icon Dynamic icon
 */
const toggleAnswer = (event, icon) => {
  let answer;

  event.target.classList.contains("faq-question")
    ? (answer = event.target.nextElementSibling)
    : (answer = event.target.parentElement.nextElementSibling);

  if (answer.classList.contains("faq-answer")) {
    let answerToggle = answer.classList.toggle("hide");
    answerToggle
      ? (icon.src = "assets/images/icon-plus.svg")
      : (icon.src = "assets/images/icon-minus.svg");
  }
};

/**
 * CREATE HTML ELEMENT
 * @param {element} tag HTML tag
 * @param {array} classList Element class
 * @param {string} text Element inner text
 * @param {element} parent Parent element
 * @returns Created element
 */
const createElement = ({ tag, classList, text = null, parent }) => {
  let element = document.createElement(tag);
  classList
    ? classList.forEach((className) => {
        element.classList.add(className);
      })
    : null;
  element.innerText = text;
  parent.appendChild(element);
  return element;
};

questions.forEach((question, index) => {
  let globalDiv = createElement({
    tag: "div",
    classList: ["faq-global"],
    parent: container,
  });

  let questionDiv = createElement({
    tag: "div",
    classList: ["faq-question"],
    parent: globalDiv,
  });

  let questionElement = createElement({
    tag: "p",
    text: question,
    parent: questionDiv,
  });

  let iconQuestion = createElement({
    tag: "img",
    parent: questionDiv,
  });
  iconQuestion.src = "assets/images/icon-plus.svg";

  let answerElement = createElement({
    tag: "p",
    classList: ["faq-answer", "hide"],
    text: answers[index],
    parent: globalDiv,
  });

  questionDiv.addEventListener("click", (e) => toggleAnswer(e, iconQuestion));
});

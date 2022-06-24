const answersElement = document.querySelector("#resultQuestion");
const question = document.querySelector("#question");
const buttonQuestion = document.querySelector("#buttonQuestion");

const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

function askQuestion() {
  if (question.value == "") {
    alert("Digite sua pergunta");
    return;
  }
  answersElement.style.opacity = 1;

  buttonQuestion.setAttribute("disabled", true);

  const resultAnswers = answers.length;
  const numberResult = Math.floor(Math.random() * resultAnswers);
  const questionValue = "<div>" + question.value + "</div>";

  answersElement.innerHTML = questionValue + answers[numberResult];

  setTimeout(function () {
    answersElement.style.opacity = 0;
    buttonQuestion.removeAttribute("disabled");
  }, 3000);
}

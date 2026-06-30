const questions = [
  {category: "Mobile", question: "How to access your app in mobile?", choices: ["gaming", "mobile", "login"],answer: "gaming"},

  {category: "Website", question: "How to access your website in mobile?", choices: ["gaming", "mobile", "login"], answer: "mobile"},

  {category: "Laptop", question: "How to access your web in laptop?", choices: ["gaming", "mobile", "login"],answer: "login"},

  {category: "Gaming", question: "How to access your game in mobile?", choices: ["gaming", "mobile", "login"],answer: "login"},

  {category: "Product", question: "How to access your product in mobile mobile?", choices: ["gaming", "mobile", "login"],answer: "mobile"}
]



function getRandomQuestion(q) {
  const indexValue = Math.floor(Math.random() * q.length)
  return q[indexValue]
}

console.log(getRandomQuestion(questions))


function getRandomComputerChoice(choices) {
  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

console.log(getRandomComputerChoice(questions[0].choices))

function getResults(question, computerchoice) {
  if(computerchoice === question.answer) {
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}

const randomQ = getRandomQuestion(questions);

const compchoice = getRandomComputerChoice(randomQ.choices);

const result = getResults(randomQ, compchoice);

console.log(result)

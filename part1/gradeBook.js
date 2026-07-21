function getAverage(array) {
  const numberOfArray = array.length; 
  const total = array.reduce((a,b) => {
    return a+b
  },0)

  const average = total / numberOfArray
  return average
}

function getGrade(score) {
  if(score == 100) {
    return "A+"
  } else if(score >= 90) {
    return "A"
  } else if(score >= 80) {
    return "B"
  } else if(score >= 70) {
    return "C"
  } else if(score >= 60) {
    return "D"
  } else{
    return "F"
  }
} 

function hasPassingGrade(score) {
  let gread = getGrade(score)
  if(gread == "F") {
    return false
  } else {
    return true
  }
}

function studentMsg(totalScore, studentScore) {
  const avg = getAverage(totalScore)
  const grade = getGrade(studentScore)
  const passOrFail = hasPassingGrade(studentScore)
  if(passOrFail == false) {
    return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`
  } else {
    return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`
  }
}

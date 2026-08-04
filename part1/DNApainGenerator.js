function pairElement(str) { // user give the input in the term of array 
  let result = [] // store the result 
  for(let val of str) { // take all value of array in val 
    if(val == "A") { // conditions to check or make the pair and push it to the result
      result.push(["A","T"])
    } else if(val == "T"){
      result.push(["T","A"])
    } else if(val == "C") {
      result.push(["C","G"]) 
    } else if(val == "G") {
      result.push(["G","C"])
    }
  }
  return result // return the result
}

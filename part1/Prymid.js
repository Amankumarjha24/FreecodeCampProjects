function pyramid(character, rows , check) {
  let result = '\n'

  if(!check) { 
    for(let i = 1; i <= rows; i++ ) {
      let space = " ".repeat(rows -i)
      let c = character.repeat(2*i -1) 
      result += space+c+"\n";
    }
  } else{
    for(let i = rows; i >= 1; i--) {
      let spaces = " ".repeat(rows - i);
      let c = character.repeat(2 * i - 1);
      result += spaces + c + "\n";
    }
  }
  return result

}

console.log(pyramid("o", 4, false))
console.log(pyramid("p", 5, true))

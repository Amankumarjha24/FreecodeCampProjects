function generatePassword(lengthOfPassword) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  // why i chose array insted of string of random characters | because the simple ans is i dont wanto to do much hard work if you can use property like length in string also if you can use indexing with string 
  // then why i should wast my time 

  let password = "" // if will going to take generated password 
  for(let i = 0; i < lengthOfPassword; i++) { // this loop runnes till the user length reached 
    let pas = Math.floor(Math.random() * chars.length) // why i use loop | if i didnt use it then math.random just only genrated only one random number but i need random number until the length of password reached
    password = password + chars[pas] // ex math.random generatd a random no like 3 and after that password contain the index of char 3 value in it the the loop goes to the i value of 1 if will do same thing again
  }
  return password // at the end i returned the password
}

const password = generatePassword(10)
console.log("Generated password: "+password)

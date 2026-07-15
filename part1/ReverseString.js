function reverseString(string) {
  const stringValue = string.split("")
  const reversedString = stringValue.reverse()
  const newString = reversedString.join("")
  return newString
}

console.log(reverseString("Aman"))

// I can do ihis by multiple methods like using spread(...) like const newString = [...string].reverse().join()
// I also can do this by a tredtional method where i can use (i) like in loop where the loops starts with the last index like i.lenngth -1 and put those all value of string att index of i in a variable it will automaticaly converted into reverse string

// Main conclusion is the you have multiple methods for doing thigs -- it's totly depends on you coice and :) and also computer choise in this case - spread is profecional method , and loop is treadtional but best for the memory.

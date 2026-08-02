// i dont know how mnay values or arras will user send thats why i use ...args 
function uniteUnique(...args) {
 let result = [] // it is the empty array it going to store the result 
 for(let value of args) { // fir loop goes to the user arguments if user aps multiple array like this [1,2,4,5] [1,4,5,] then it will store it in value like this [[1,2,4,5] [1,4,5,]] and value will provide each array 1 by 1
  for(let arrvalue of value) { // it will got the first array value , second , third etc because value have multiple arrays and value will provide it the arrsy 1 by 1 
    if(!result.includes(arrvalue)) { // if condition got the first aray and it is normal thing that result is empty thats why whole fist array will go to result but after that when value gives second array 
      // and arrvalue provide the value of second array if will check it then if it found the same value then it will skip that value and go forward checking 
      result.push(arrvalue) // if not found the push that value to the result array 
    }
  }
 }
 return result // here we got our ans 
}

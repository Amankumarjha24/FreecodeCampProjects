/*
1. function which find the missing letter 
2. check - where i stored all the letters form a to z 
3. i had a doubt if user only provide the uppercase input thats why first i changed user input into lowercase
4. then i converted the user input in array - like "abc" = ['a','b'...soOn]
5. i also converted my check variable values into array and assignit to in refinedCheck
6. in this state i run my loop where i assign i value to 0th index and the range would be user array length 
7. every character has it's unique char code - thats why i use charCodeAt(0) because i had to compare if there is a no letter or a missing letter than the difference between the latters will be grater then 1
8. fromCharCode convert the asci value into characters in this liek ex - if we had abz = 97,98,122 then which is missing absouly c is missing but how computer can know it thats i use 
9. if(next - current > 1 ) then convert the current + 1 value into character and then i got my ans 

ex - suppose that you hava abz then c is missing you already know what is the first character charcode = 97 right ? and next = should be 98 but what if there is 99 
then which character is missed it is current means first + 1  = 97 + 1 = 98 ans b ans then return it
*/
function fearNotLetter(string) {
  const check = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
  const convertToLowerCase = string.toLowerCase()
  const arrconverted = convertToLowerCase.split("")

  console.log(arrconverted)
  const refinedCheck = check.split(" ")

  for (let i = 0; i < arrconverted.length - 1; i++) {

  const current = arrconverted[i].charCodeAt(0);
  const next = arrconverted[i + 1].charCodeAt(0);

  if (next - current > 1) {
    return String.fromCharCode(current + 1);
  }

}
}

console.log(fearNotLetter("abce"))

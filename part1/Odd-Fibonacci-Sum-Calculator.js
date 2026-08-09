/*
  *Function sumFibs takes number and return it's odds numbers fibonacci sum 
  * a stors the inetial value - 0 and be store the next value 1 
  *  result stors the final result 
  * while condition run uitil the a th value reatch = or < to number
  * condition filtrise that number only which is odd and only add to it and our a contains the finial value 
  * next give the next value example first time a = 0 and b = 1 next would be 0 + 1 = 1 right then a = b will be a = 1 and b = next mesans 1 becasue our next has 1 
*/
function sumFibs(number) {
  let a = 0
  let b = 1
  let result = 0

  while(a <= number) {
    if(a % 2 !== 0) {
      result = result +a
    }
    let next = a + b

    a = b
    b = next
  }
  return result 
}

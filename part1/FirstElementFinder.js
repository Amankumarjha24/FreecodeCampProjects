function findElement(array, func) {
  for (let i = 0; i < array.length; i++) {
   
    if (func(array[i])) {
      return array[i]; 
    }
  }
 
  return undefined;
}


console.log(findElement([1, 3, 5, 8], num => num % 2 === 0)); // 8
console.log(findElement([1, 2, 3, 4], num => num > 2));       // 3

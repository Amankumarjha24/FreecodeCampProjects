function repeatStringNumTimes(string, times) {
  let repetedValue = ""
  for(let i = 0; i < times; i++) {
    repetedValue = repetedValue + string
  }
  return repetedValue
}
console.log(repeatStringNumTimes("A", 2))

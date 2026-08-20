function dropElements(array,fun) {
  const index = array.findIndex(fun)

  if(index === -1) {
    return []
  }

  return array.slice(index)
}

console.log(dropElements([1,2,3,4], function(n) {
  return n >= 3
}))

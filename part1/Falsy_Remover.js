function bouncer(data){

  return data.filter(Boolean) // it will filter the all boolean value and reutnr the reifned array 
}

console.log(bouncer([false, "B", "c"]))

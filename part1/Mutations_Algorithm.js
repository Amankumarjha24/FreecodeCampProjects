function mutation(value) {
  let first = value[0].toLowerCase();
  let second = value[1].toLowerCase();

  for(let i = 0; i < second.length; i++) {
    if(!first.includes(second[i])) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["Hello", "hello"]));

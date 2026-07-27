function titleCase(text){
  let refinedText = text.split(" ") // first store the array split convert our text in array or store it in array ex if you have text "Hello world" it will ["Hello", "world"]
  return refinedText.map(value=> value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()).join(" ")  //applyed map on array called refinedText and take array's each value ex world - and convert it's first 
  // letter to upper case with using charAt(0) and toUpperCase() then added the remning words by using slice(1) it's cut the value or deta or world according to its paremeter and then join the all things with " " space 
  

}

console.log(titleCase("I'm a little tea pot"))

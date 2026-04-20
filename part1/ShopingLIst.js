let lunches = []
function addLunchToEnd(list, value) {
  list.push(value) 
  console.log(value + " added to the end of the lunch menu.")
  return list
}
addLunchToEnd(["Pizza","Tacos"] , "Burger")

function addLunchToStart(list, value) {
  list.unshift(value)
  console.log(value + " added to the start of the lunch menu.")
  return list
}

function removeLastLunch(item) {
  if(item.length == 0) {
    console.log("No lunches to removed.")
    return item
  } else {
    let removedItem = item.pop();
    console.log(removedItem + " removed from the end of the lunch menu.")
    return item;
  }
}
removeLastLunch(["Shshi","Pizza","Noodls"])

function removeFirstLunch(item) {
  if(item.length == 0) {
    console.log("No lunches to remove.");
    return item
  } else {
    let removedItm = item.shift();
    console.log(removedItm + " removed from the start of the lunch menu.")
    return item;
  }
}
removeFirstLunch(["Suchi","Pizza","Burger"])

function getRandomLunch(value) {
  if(value.length == 0) {
    console.log("No lunches available.")
    return value
  } else {
    let i = Math.floor(Math.random() * value.length) 
    console.log("Randomly selected lunch: " + value[i])
    return value;
  }
}

function showLunchMenu(value) {
  if(value.length == 0) {
    console.log("The menu is empty.")
    return value;
  } else {
    let menu = value.join(", ")
    let finalmsg = "Menu items: " + menu;
    console.log(finalmsg)
    return finalmsg;
  }
}


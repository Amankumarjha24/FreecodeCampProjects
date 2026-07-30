
let inventory = [];


function findProductIndex(productName) {
  
  const searchName = productName.toLowerCase();
  
 
  return inventory.findIndex(product => product.name === searchName);
}


function addProduct(productObj) {
 
  const name = productObj.name.toLowerCase();
  const quantity = productObj.quantity;
  
 
  const index = findProductIndex(name);
  
  if (index !== -1) {
  
    inventory[index].quantity += quantity;
    console.log(`${inventory[index].name} quantity updated`);
  } else {
  
    inventory.push({ name: name, quantity: quantity });
    console.log(`${name} added to inventory`);
  }
}


function removeProduct(productName, quantityToRemove) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);
  

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }
  
  const currentProduct = inventory[index];
  
 
  if (currentProduct.quantity < quantityToRemove) {
    console.log(`Not enough ${currentProduct.name} available, remaining pieces: ${currentProduct.quantity}`);
  } else {
   
    currentProduct.quantity -= quantityToRemove;
   
    if (currentProduct.quantity === 0) {
      console.log(`Remaining ${currentProduct.name} pieces: ${currentProduct.quantity}`);
      inventory.splice(index, 1); 
    } else {
      console.log(`Remaining ${currentProduct.name} pieces: ${currentProduct.quantity}`);
    }
  }
}

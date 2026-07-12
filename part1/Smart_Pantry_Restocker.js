/**
 * Initial pantry inventory details
 */
const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

/**
 * Raw shipment data received as pipe-separated strings
 */
const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

/**
 * Parses raw shipment strings into formatted objects, filtering out duplicate SKUs.
 * @param {string[]} rawData - Array of raw shipment strings
 * @returns {Object[]} Array of parsed shipment items
 */
function parseShipment(rawData) {
  let newObj = [];
  let seenSkus = []; 

  for (let data of rawData) {
    let newArray = data.split("|");
    let currentSku = newArray[0];

    // Check for duplicate SKUs in the current shipment batch
    let isDuplicate = false;
    for (let sku of seenSkus) {
      if (sku === currentSku) {
        isDuplicate = true; 
        break; // Stop loop early if duplicate is found
      }
    }

    // Skip the item if the SKU has already been processed
    if (isDuplicate === true) {
      continue; 
    }

    // Add unique SKU to tracking array
    seenSkus.push(currentSku);

    // Convert quantity string to number
    let qtyNumber = Number(newArray[2]); 
    
    // Assign default storage zone if not provided
    let zoneValue = newArray[4];
    if (zoneValue === undefined || zoneValue === "") {
      zoneValue = "general"; 
    }

    // Push the formatted object into the result array
    newObj.push({
      sku: currentSku,
      name: newArray[1],
      qty: qtyNumber,
      expires: newArray[3],
      zone: zoneValue
    });
  }
  return newObj;
}

/**
 * Evaluates shipment items against current pantry and assigns appropriate actions.
 * @param {Object[]} pantry - Current pantry inventory
 * @param {Object[]} shipment - Parsed incoming shipment items
 * @returns {Object[]} Array of categorized actions (discard, restock, donate)
 */
function planRestock(pantry, shipment) {
  let actions = [];

  for (let item of shipment) {
    // Flag invalid or empty quantities for immediate disposal
    if (item.qty <= 0) {
      actions.push({ type: "discard", item: item });
    } else {
      // Verify if the item already exists in the current pantry inventory
      let foundInPantry = false;
      for (let pantryItem of pantry) {
        if (pantryItem.sku === item.sku) {
          foundInPantry = true;
          break; // Stop loop early if matching item is found
        }
      }

      // Categorize based on availability in pantry
      if (foundInPantry === true) {
        actions.push({ type: "restock", item: item });
      } else {
        actions.push({ type: "donate", item: item });
      }
    }
  }
  return actions;
}

/**
 * Groups planned actions by their respective storage zones.
 * @param {Object[]} actions - Array of evaluated actions
 * @returns {Object} Object with zones as keys and arrays of actions as values
 */
function groupByZone(actions) {
  let grouped = {};

  for (let action of actions) {
    let currentZone = action.item.zone;

    // Initialize the zone key with an empty array if it doesn't exist
    if (grouped[currentZone] === undefined) {
      grouped[currentZone] = [];
    }
    
    // Append the action to the corresponding zone array
    grouped[currentZone].push(action);
  }
  return grouped;
}

/**
 * Creates a deep copy of the pantry array to prevent mutating the original state.
 * @param {Object[]} pantry - Original pantry inventory array
 * @returns {Object[]} A fresh deep copy of the pantry array
 */
function clonePantry(pantry) {
  let newPantryCopy = [];
  
  for (let item of pantry) {
    // Map existing properties into a new object instance
    let itemCopy = {
      sku: item.sku,
      name: item.name,
      qty: item.qty,
      expires: item.expires,
      zone: item.zone
    };
    newPantryCopy.push(itemCopy);
  }
  return newPantryCopy;
}

// --- Execution Pipeline ---
const clonedPantry = clonePantry(pantry);
const parsedShipment = parseShipment(rawData);
const restockPlan = planRestock(clonedPantry, parsedShipment);
const finalGroupedResult = groupByZone(restockPlan);

// Output the final grouped results to console
console.log(finalGroupedResult);

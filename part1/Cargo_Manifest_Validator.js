function normalizeUnits(manifest) {
  const newManifest = {...manifest}

  if(newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }
  return newManifest;
}

function validateManifest(manifest) {
  const errors = {}
  const properties = ['containerId','destination','weight','unit','hazmat']

  properties.forEach(prop => {
    if(!(prop in manifest)) {
      errors[prop] = "Missing"
    }
  });
  if('containerId' in manifest) {
    const id = manifest.containerId;

    if(typeof id !== 'number' || Number.isNaN(id) || !Number.isInteger(id) || id <=0) {
      errors.containerId  = "Invalid";
    }
  }

  if('destination' in manifest) {
    const dest = manifest.destination;
    
    if(typeof dest !== 'string' || dest.trim() === '') {
      errors.destination = "Invalid";
    }
  }
  if('weight' in manifest) {
    const w = manifest.weight;

    if(typeof w !== 'number' || Number.isNaN(w) || w <= 0) {
      errors.weight = "Invalid";
    }
  }
  if('unit' in manifest) {
    const u = manifest.unit;
    if(u !== 'kg' && u !=='lb') {
      errors.unit = "Invalid";
    }
  }
  if('hazmat' in manifest) {
    const hz = manifest.hazmat;
    if(typeof hz !== 'boolean') {
      errors.hazmat = "Invalid"
    }
  }
  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest)

  if(Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`)
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}

normalizeUnits({
  containerId: 55,
  destination: "Carmel",
  weight: 400,
  unit: "lb",
  hazmat: false
})

validateManifest({
  containerId: 0,
  destination: 405,
  weight: -84,
  unit: "pounds",
  hazmat: 'no'
})
validateManifest({
  containerId: 1,
  destination: "Santa Cruz",
  weight: 304,
  unit: "kg",
  hazmat: false
})

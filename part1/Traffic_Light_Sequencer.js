const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  // Requirement 8: Check for No phases
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  // Requirement 7: Check for Fault
  if (config.fault) {
    console.log("Faulted phase!");
    return;
  }

  // Requirement 4, 5, 6
  for (let i = 0; i < cycles; i++) {
    for (let phase of config.phases) {
     
      if (phase.duration <= 0) {
      
        console.log("Invalid phase detected");
        
      } else {
      console.log("Switching to " + phase.color + " for " + phase.duration + " s");
      }
    }
  }
}

function generateTimeline(config, cycles) {
  let timeline = [];
  let elapsed = 0;

  for (let i = 0; i < cycles; i++) {
    for (let phase of config.phases) {
      elapsed += phase.duration;
      timeline.push(elapsed);
    }
  }
  return timeline;
}



/**
 * i = 2
 * i <= 2 + 1 = 3 , 0,1,2,3
 * 
 */

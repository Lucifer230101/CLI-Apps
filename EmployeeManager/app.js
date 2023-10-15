const readlineSync = require("readline-sync");

console.log("Welcome to Lucifers Dome.Inc.");
console.log(
  "We are a game developing corporation riding up our way to deliver best gaming experience."
);
console.log(
  "Please choose the serial number of the service you want to avail."
);
console.log("\n");

const employeeData = [
  {
    name: "Saurav Garje",
    designation: "Full Stack Developer",
    place: "Pune",
  },
  {
    name: "Kartik Patil",
    designation: "Java Developer",
    place: "Bangalore",
  },
];

const services = [
  {
    serviceProvided: [
      "Request a specific game to be devloped.",
      "Enquire about a Employee.",
      "Just passing by, Thank you for asking",
    ],
    question: "What can we help you with today?",
  },
];

const gameRequirements = [
  "What is the genre of the game you are requesting to be developed?",
  "Is the game suppossed to be multiplayer or single player?",
  "Is the game Offline or Online?",
  "Do you have any other specifics to be noted about the required game?",
];

function gameDev(required) {
  const requirements = [];
  for (var i = 0; i < required.length; i++) {
    let rqr = readlineSync.question(required[i]);
    requirements.push(rqr);
  }
  console.log(requirements);
  choice(services[0].serviceProvided, services[0].question);
}

function enquire(uName, employees) {
  let found = false;
  for (var i = 0; employeeData.length; i++) {
    if (employees[i].name.toLowerCase() === uName.toLowerCase()) {
      console.log(
        "He works as a:" +
          employees[i].designation +
          " at " +
          employees[i].place
      );
      found = true;
      break;
    }
  }
  if (!found) {
    console.log(
      "Oh! Sorry but we don't have anyone with that name working with us."
    );
  }
  choice(services[0].serviceProvided, services[0].question);
}

function choice(serviceProvided, question) {
  let userChoice = readlineSync.keyInSelect(serviceProvided, question);
  console.log("You want to: ", serviceProvided[userChoice]);
  console.log("\n");
  if (userChoice === -1) {
    // User selected "cancel"
    console.log("You've canceled the operation. Goodbye!");
    return;
  }
  if (
    serviceProvided[userChoice].toLowerCase() ===
    serviceProvided[1].toLowerCase()
  ) {
    let userEmployee = readlineSync.question("Who are you looking for?");
    enquire(userEmployee, employeeData);
  }
  if (
    serviceProvided[userChoice].toLowerCase() ===
    serviceProvided[0].toLowerCase()
  ) {
    console.log(
      "Please respond to the questions below to get a clear understanding of your request."
    );
    console.log("\n");
    gameDev(gameRequirements);
  } else {
    console.log("Thank You for Visiting Lucifer's Dome.Inc.");
    console.log("We humbly await your next visit!");
  }
}

choice(services[0].serviceProvided, services[0].question);

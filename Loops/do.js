let choice;

do {
  console.log("\n🍽️ Welcome Fatu's Kitchen!");
  console.log("Please choose an item from the menu:");
  console.log("1. Pizza ");
  console.log("2. Burger ");
  console.log("3. Drink ");
  console.log("4. Exit ");

  choice = prompt("Enter your choice (1-4):");

  switch (choice) {
    case "1":
      console.log("You ordered a delicious Pizza! ");
      break;
    case "2":
      console.log("You ordered a tasty Burger! ");
      break;
    case "3":
      console.log("You ordered a cold Drink! ");
      break;
    case "4":
      console.log("Thank you for visiting! See you next time!");
      break;
    default:
      console.log("Invalid choice. Please select a number from 1 to 4.");
  }
} while (choice !== "4");


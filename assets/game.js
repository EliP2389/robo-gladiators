// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);
//console.log(enemyNames.length);
//for(var i = 0; i < enemyNames.length; i++) {
  // console.log(enemyNames[i]);
   // console.log(i);
   // console.log(enemyNames[i] + " is at" +  i  + " index ");
//}

var fight = function(enemyName) {
    // fight function statements
    //Alert players that they are starting the round
    //window.alert("Welcome to Robot Gladiators!");
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0){

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// if player choses to fight, then fight
 if (promptFight === "fight" || promptFight === "FIGHT"){

// if player choses to "skip" confirm and then stop the loop
} if (promptFight === "skip" || promptFight === "SKIP"){
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
    }     
}

    // remove enemy's health by subtracting the amount set in the playerAttack variable
 enemyHealth = enemyHealth - playerAttack;
 // Log a resulting message to the console so we know that it worked.
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");

 // check enemy's health
  if (enemyHealth <= 0){
      window.alert(enemyName + " has died!");
      
// award player money for winning
playerMoney = playerMoney + 20;

// leave while() loop since enemy is dead
break;

} else {
      window.alert(enemyName + " still has " + enemyHealth + " health left. ");
  }


// remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");


  // check player's health
  if (playerHealth <= 0) {
      window.alert(playerName + " has died ");
      break;
  }
  else {
      window.alert(playerName + " still has " + playerHealth + " health left. ");
    }
  }
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    //call fight function with enemy-robot
    fight(pickedEnemyName);
}
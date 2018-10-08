// A variable that ouputs a random number for the users target number
let targetNumber = Math.floor(Math.random() * 101) + 19;

// We target the "number-to-guess" element from the html and we add a .text 
// method that will display the actual number as text on the html
$("#number-to-guess").text(targetNumber);

// Generate random numbers for the 4 crystals 
let blueCrystal = Math.floor(Math.random() * 11) + 1;
let redCrystal = Math.floor(Math.random() * 11) + 1;
let goldCrystal = Math.floor(Math.random() * 11) + 1;
let whiteCrystal = Math.floor(Math.random() * 11) + 1;

let wins = 0;
let losses = 0;
let userScore = 0;

// Create a function to target the specific variables I want to reset each time the user wins or loses
function reset() {
	// Reset the target number with a random number
	targetNumber = Math.floor(Math.random() * 101) + 19;
	// target the number-to-guess id to display the new random number eveytime this function is called 
	$("#number-to-guess").text(targetNumber);

	// Reset each crystals values with a random number
	blueCrystal = Math.floor(Math.random() * 11) + 1;
	redCrystal = Math.floor(Math.random() * 11) + 1;
	goldCrystal = Math.floor(Math.random() * 11) + 1;
	whiteCrystal = Math.floor(Math.random() * 11) + 1;
	userScore = 0;
	// We target the score id from the html so eveytime this reset function is called it clears/removes the users previous score from the display
	$('#score').text(userScore);

};

// On click function that targets the first blue crystal. When the blue crystal is clicked the userScore will 
// take its current value and add the blueCrystal random # it generates from the above code ln. 10 

$("#crystalOne").on('click', function () {

	// userScore = its current value plus the randomly generated number blueCrystal holds
	userScore += blueCrystal;

	// we target the score id in the html and apply the text method to display the number on sceen
	$('#score').text(userScore);

	// Conditional that checks if userScore is equal the games target number and if so...
	// Alert the user they won, than add a win to the wins variable; and finally target the wins id in the html so we can display to the user 
	if (userScore == targetNumber) {
		alert('Congratulations you won this round');
		wins++;
		$('#wins').text(wins);
		// Runs the reset function above
		reset();
	// If conditional is falsy (the users score went over the target number), than alert user of their lost; add a loss to the losses variable 
	// target the losses id in the html and display the losses counter to user 
	} else if (userScore > targetNumber) {
		alert('You lost this round.');
		losses++;
		$('#losses').text(losses);
		reset();

	}
});


// On click function that targets the second red crystal. When the red crystal is clicked the userScore will 
// take its current value and add the redCrystal random # it generates from the above code ln. 11 

$("#crystalTwo").on('click', function () {

	// userScore = its current value plus the randomly generated number redCrystal holds
	userScore += redCrystal;

	// we target the score id in the html and apply the text method to display the number on sceen
	$('#score').text(userScore);

	// Conditional that checks if userScore is equal the games target number and if so...
	// Alert the user they won, than add a win to the wins variable; and finally target the wins id in the html so we can display to the user 
	if (userScore == targetNumber) {
		alert('Congratulations you won this round');
		wins++;
		$('#wins').text(wins);
		// Runs the reset function above
		reset();
		// If conditional is falsy (the users score went over the target number), than alert user of their lost; add a loss to the losses variable 
		// target the losses id in the html and display the losses counter to user 
	} else if (userScore > targetNumber) {
		alert('You lost this round.');
		losses++;
		$('#losses').text(losses);
		reset();

	}
});
// On click function that targets the third gold crystal. When the gold crystal is clicked the userScore will 
// take its current value and add the goldCrystal random # it generates from the above code ln. 13 

$("#crystalThree").on('click', function () {

	// userScore = its current value plus the randomly generated number goldCrystal holds
	userScore += goldCrystal;

	// we target the score id in the html and apply the text method to display the number on sceen
	$('#score').text(userScore);

	// Conditional that checks if userScore is equal the games target number and if so...
	// Alert the user they won, than add a win to the wins variable; and finally target the wins id in the html so we can display to the user 
	if (userScore == targetNumber) {
		alert('Congratulations you won this round');
		wins++;
		$('#wins').text(wins);
		// Runs the reset function above
		reset();
		// If conditional is falsy (the users score went over the target number), than alert user of their lost; add a loss to the losses variable 
		// target the losses id in the html and display the losses counter to user 
	} else if (userScore > targetNumber) {
		alert('You lost this round.');
		losses++;
		$('#losses').text(losses);
		reset();

	}
});
// On click function that targets the fourth white crystal. When the white crystal is clicked the userScore will 
// take its current value and add the whiteCrystal random # it generates from the above code ln. 14 

$("#crystalFour").on('click', function () {

	// userScore = its current value plus the randomly generated number whiteCrystal holds
	userScore += whiteCrystal;

	// we target the score id in the html and apply the text method to display the number on sceen
	$('#score').text(userScore);

	// Conditional that checks if userScore is equal the games target number and if so...
	// Alert the user they won, than add a win to the wins variable; and finally target the wins id in the html so we can display to the user 
	if (userScore == targetNumber) {
		alert('Congratulations you won this round');
		wins++;
		$('#wins').text(wins);
		// Runs the reset function above
		reset();
		// If conditional is falsy (the users score went over the target number), than alert user of their lost; add a loss to the losses variable 
		// target the losses id in the html and display the losses counter to user 
	} else if (userScore > targetNumber) {
		alert('You lost this round.');
		losses++;
		$('#losses').text(losses);
		reset();

	}
});


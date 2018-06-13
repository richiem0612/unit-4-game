$(document).ready(function () {
	var targetNumber = Math.floor(Math.random() * 101) + 19;

	$("#number-to-guess").text(targetNumber);

	var blueCrystal = Math.floor(Math.random() * 11) + 1;
	var redCrystal = Math.floor(Math.random() * 11) + 1;
	var goldCrystal = Math.floor(Math.random() * 11) + 1;
	var whiteCrystal = Math.floor(Math.random() * 11) + 1;

	var counter = 0;
	var wins = 0;
	var losses = 0;

// Here I create a function where I target specific variables I want to reset each time the user wins or loses
	function reset(){
		targetNumber = Math.floor(Math.random() * 101) + 19;
		$("#number-to-guess").text(targetNumber);
		blueCrystal = Math.floor(Math.random() * 11) + 1;
		redCrystal = Math.floor(Math.random() * 11) + 1;
		goldCrystal = Math.floor(Math.random() * 11) + 1;
		whiteCrystal = Math.floor(Math.random() * 11) + 1;
		counter = 0;
		$("#score").text(counter);
	}


	$("#crystalOne").on('click', function() {
		counter += blueCrystal;
		$("#score").text(counter); 
		if (counter == targetNumber){
			alert('Congratulations, you won this round!');
			wins++;
			document.querySelector("#wins").innerHTML = wins;

			reset();
		}
		else if (counter > targetNumber){
			alert('You lost this round. Better luck next game!');
			losses++;
			document.querySelector("#losses").innerHTML = losses;
			
			reset();
		}
	})

	$("#crystalTwo").on('click', function() {
		counter += redCrystal;
		$("#score").text(counter); 
		if (counter == targetNumber){ 
			alert('Congratulations, you won this round!');
			wins++;
			document.querySelector("#wins").innerHTML = wins;

			reset();
		}
		else if (counter > targetNumber){
			alert('You lost this round. Better luck next game!');
			losses++;
			document.querySelector("#losses").innerHTML = losses;

			reset();
		} 
	})

	$("#crystalThree").on('click', function() {
		counter += goldCrystal;
		$("#score").text(counter);
		if (counter == targetNumber){
			alert('Congratulations, you won this round!');
			wins++;
			document.querySelector("#wins").innerHTML = wins;

			reset();
		}
		else if (counter > targetNumber){
			alert('You lost this round. Better luck next game!');
			losses++;
			document.querySelector("#losses").innerHTML = losses;

			reset();
		}
	})

	$("#crystalFour").on('click', function() {
		counter += whiteCrystal;
		$("#score").text(counter);
		if (counter == targetNumber){
			alert('Congratulations, you won this round!');
			wins++;
			document.querySelector("#wins").innerHTML = wins;
		
			reset();
		}
		else if (counter > targetNumber){
			alert('You lost this round. Better luck next game!');
			losses++;
			document.querySelector("#losses").innerHTML = losses;

			reset();
		}
	})

});
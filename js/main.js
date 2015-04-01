// Show numbers from 0-100
// 	Within those numbers, find number divisible by 3
// 		Print fizz if number is divisible by 3

// 	Within those numbers, find numbers divisible by 5
// 		Print buzz if number is divisible by 5

$(document).ready(function() {



for(var i=0; i<101; i++){

	var y = 0 + (i*20);

    if (i%5 == 0 && i%3 == 0){
	$('#numbers').append("fizzbuzz ");
	}

	else if (i%3 == 0){
	$('#numbers').append("fizz ");
	}

	else if (i%5 == 0) {
	$('#numbers').append("buzz ");
	}

	else{
	$('#numbers').append(i + " ");
	}
	
}

});
$(document).ready(function() {

	var squares = 16;  //starting value
	var containerWidth = parseInt($('.rave-container').css("width"));
	var cellCalculation = (containerWidth/squares);

	drawRaveGrid();

	$('.new-grid').click(function() {
		getInput();
	});

	$('.clear').click(function() {
		$('.rave-cell').css("background-color","#000");
	});


// Get input from user to generate a new drawing space
function getInput() {
	var input = prompt("Enter a resolution size for the drawing (1-80): ");
	$('.rave-container').empty();
	squares = input;

	drawRaveGrid();

};


var colors = ["#83dcd5", "#00fff8", "#61ff91", "#f9fe44", "#f92b2f", "#d2ff7d", 
				"#f6fc2d", "#00ebb3", "#ff0049", "#ff38d1", "#ff4922", "#ff0049", 
				"#ff4171", "#e2fe4d", "#ff6d35"];

// Draw rave-mode grid
function drawRaveGrid() {
	cellCalculation = (containerWidth/squares);

	for (var i = 0; i < squares; i++) {
		$('.rave-container').append('<div class="rave-row' + i + '"></div>');
		$('.' + thisRow).height(cellCalculation);

		// Add the cells to the row
		var thisRow = "rave-row" + i;

		for (var j = 0; j < squares; j++) {
			$('.' + thisRow).append('<div class="rave-cell"></div>');
		};

	};

	$('.rave-cell').height(cellCalculation);	
	$('.rave-cell').width(cellCalculation);	

	$('.rave-cell').mouseover(function() {
		var random = colors[Math.floor(Math.random() * 9)];
		$(this).css("background-color", random);
	});
};

});
$(document).ready(function() {

	var squares = 16;  // starting value
	var containerWidth = parseInt($('.container').css("width"));
	var cellCalculation = (containerWidth/squares);

	drawGrid();

	$('.new-grid').click(function() {
		getInput();
	});

	$('.clear').click(function() {
		$('.cell').css("background-color","white");
	});


// Get input from user to generate a new drawing space
function getInput() {
	var input = prompt("Enter a resolution size for the drawing (1-80): ");
	$('.container').empty();
	squares = input;

	drawGrid();
};


// Draw free-draw grid
function drawGrid() {

	cellCalculation = (containerWidth/squares);

	for (var i = 0; i < squares; i++) {
		$('.container').append('<div class="row' + i + '"></div>');
		$('.' + thisRow).height(cellCalculation);

		// Add the cells to the row
		var thisRow = "row" + i;

		for (var j = 0; j < squares; j++) {
			$('.' + thisRow).append('<div class="cell"></div>');
		};

	};

	$('.cell').height(cellCalculation);	
	$('.cell').width(cellCalculation);	

	$('.cell').mouseover(function() {
		$(this).css("background-color","black");
	});

};



});
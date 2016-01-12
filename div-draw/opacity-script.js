$(document).ready(function() {

	var squares = 16;  // starting value
	var containerWidth = parseInt($('.opacity-container').css("width"));
	var cellCalculation = (containerWidth/squares);

	drawGrid();

	$('.new-grid').click(function() {
		getInput();
	});

	$('.clear').click(function() {
		$('.op-cell').css("background-color","white");
	});


// Get input from user to generate a new drawing space
function getInput() {
	var input = prompt("Enter a resolution size for the drawing (1-80): ");
	$('.opacity-container').empty();
	squares = input;

	drawGrid();
};


// Draw opacity grid
function drawGrid() {

	cellCalculation = (containerWidth/squares);

	for (var i = 0; i < squares; i++) {
		$('.opacity-container').append('<div class="row' + i + '"></div>');
		$('.' + thisRow).height(cellCalculation);

		// Add the cells to the row
		var thisRow = "row" + i;

		for (var j = 0; j < squares; j++) {
			$('.' + thisRow).append('<div class="op-cell"></div>');
		};

	};

	$('.op-cell').height(cellCalculation);	
	$('.op-cell').width(cellCalculation);	

	$('.op-cell').mouseover(function() {
		var color = $(this).css('background-color');
			if (color == 'rgb(255, 255, 255)') {
				$(this).css("background-color", "#8f00e9");
				$(this).css("opacity", 0.1);
			} else {
				var opacity = parseFloat($(this).css('opacity'));
		  		var newOpacity = opacity + 0.1;
		  		$(this).css("opacity", newOpacity);
			};
		
	});

};

});
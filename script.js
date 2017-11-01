$(document).ready(function() {

  var nsquares = 64;
	var defaultColor = true;
	var mouseDown = 0;
	document.body.onmousedown = function() {
		++mouseDown;
	}
	document.body.onmouseup = function() {
		--mouseDown;
	}

  fillGrid(nsquares);

  $("#set").click(function() {
    var input = prompt("How many squares per side to make the new grid?");
    nsquares = input;
    clearAndSet();
  });

  $("#clear").click(function() {
    clearAndSet();
  });

	$("#random").click(function() {
		if (defaultColor) {
			defaultColor = false;
		} else {
			defaultColor = true;
		}
		clearAndSet();
  });

  draw();

	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

  function clearAndSet() {
    $("#container").empty();
    fillGrid(nsquares);
    draw();
    $('.cell').css('height', 960 / nsquares + 'px');
    $('.cell').css('width', 960 / nsquares + 'px');
  }

  function draw() {

		if (defaultColor) {

			$(".cell").mouseover(function() {
				if (mouseDown) {
					$(this).css("background-color", "#E91E63");
				}
			});

		} else {
			$(".cell").mouseover(function() {
				if (mouseDown) {
					$(this).css("background-color", getRandomColor());
				}
			});
		}
  }

  function fillGrid(squares) {
    for (var i = 0; i < squares; i++) {
      $("<div/>", {
        "id": "row" + i,
        "class": "cell"
      }).appendTo("#container");
      for (var j = 0; j < squares; j++) {
        $("<div/>", {
          "class": "cell",
          //text: j + 1,
        }).appendTo("#row" + i);
      }
    }
  }
});

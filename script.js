$(document).ready(function() {

  var nsquares = 16;

  fillGrid(nsquares);

  $("#set").click(function() {
    var input = prompt("How many squares per side to make the new grid?");
    nsquares = input;
    clearAndSet();
  });

  $("#clear").click(function() {
    clearAndSet();
  });

  draw();

  function clearAndSet() {
    $("#container").empty();
    fillGrid(nsquares);
    draw();
		$('.cell').css('height', 512/nsquares + 'px');
		$('.cell').css('width', 512/nsquares + 'px');
  }

  function draw() {
    $("div").mouseover(function() {
      $(this).css("background-color", "red");
    });
  }

  function fillGrid(squares) {
    for (var i = 0; i < squares; i++) {
      $("<div/>", {
        "id": "row" + i,
        "class": "rows"
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

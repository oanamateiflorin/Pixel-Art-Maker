const table = $('#pixel_canvas');

function makeGrid() {
  const height = parseInt($('#input_height').val());
  const width = parseInt($('#input_width').val());
  for (let i = 0; i < height; i++) {
    table.append('<tr></tr>');
  }
  for (let i = 0; i < width; i++) {
    $('tr').append('<td></td>');
  }
}

function clearGrid() {
  table.html('');
}

function coloring() {
  $('td').mousedown(function(event) {
    switch (event.which) {
        case 1:
          const color = $("input[type='color']").val();
          $(this).css('background-color', color);
          break;
        case 3:
          $(this).css('background-color', 'white');
          break;
    }
  });
}

$(document).ready(function(){
  $('#sizePicker').submit(function(i){
    i.preventDefault();
    clearGrid();
    makeGrid();
    coloring();
  });
});
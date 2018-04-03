function getRow(grid, rowIndex){
  return grid[rowIndex]
}

function getColumn(grid, columnIndex){
  var currentColumn = []
  for (var i = 0; i < grid.length; i++){
    currentColumn.push(grid[i][columnIndex])
  }
  return currentColumn
}
function getSubgrid(grid, x, y) {
  x *= 3;
  y *= 3;
  var section = [];
  for (var i = x; i < x + 3; i++) {
    for (var j = y; j < y + 3; j++) {
      section.push(puzzle[i][j]);
    }
  }
  return section;
}

function includes1to9(grid){
  for (var i = 1; i <= grid.length; i++){
    if (grid.indexOf(i) === -1){
      return false
    }
  }
  return true
}

function sudokuIsValid(grid){
  for (var i = 0; i < 9; i++){
    var checkRow = includes1to9(getRow(grid, i));
    var checkColumn = includes1to9(getColumn(grid, i));
    if (checkRow === false || checkColumn === false){
      return false
    }
  }
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      var checkSubgrid = includes1to9(getSubgrid(grid, i, j))
      //console.log(checkSubgrid)
      if(checkSubgrid === false){
        return false 
      }
    }
  }
 return true
}

sudokuIsValid(p8zzle);

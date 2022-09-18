
const drawingColor = document.querySelector('#color_picker');

const drawingContainer = document.querySelector('.drawing-container');

const btnMinusSquarePerSide = document.querySelector('.btn-minus');
const btnPlusSquarePerSide = document.querySelector('.btn-plus');
const gridCellSizeInputValue = document.querySelector('#grid-cell-size');

const resetGrid = document.querySelector('.btn-reset');

const eraseGridCell = document.querySelector('.btn-eraser');

const drawingGridCellsBoundary = document.querySelector('.btn-toggle-grid');

// drawing grid width
const drawingContainerWidth = 450;

// draw 16x16 grid 
const gridCell = () => {
  const gridSize = parseInt(gridCellSizeInputValue.value);
  // single cell size
  const cellSize = drawingContainerWidth / gridSize;

  drawingContainer.innerHTML = '';
  
  for(let cellRow = 0; cellRow < gridSize; cellRow++) {
    for(let cellCol = 0; cellCol < gridSize; cellCol++) {
      gridCellContainer = document.createElement('div');
      gridCellContainer.classList.add('drawing-grid')

      gridCellContainer.style.width = `${cellSize}px`;
      gridCellContainer.style.height = `${cellSize}px`;

      
      drawingContainer.appendChild(gridCellContainer);
    }
  }
}

gridCell();

let dragAndDraw = true;

// draw on board by dragging mouse
drawingContainer.addEventListener('mousedown', () => {
  dragAndDraw = false;
});
drawingContainer.addEventListener('mousemove', (e) => {
  if(dragAndDraw == false) {
    e.target.style.backgroundColor = drawingColor.value;
  }
});
drawingContainer.addEventListener('mouseup', () => {
  dragAndDraw = true;
});

// reduce current sq. per side from grid by 1 
btnMinusSquarePerSide.addEventListener('click', () => {
  let currentGridSquarePerSide = parseInt(gridCellSizeInputValue.value);

  if(currentGridSquarePerSide > 0) {
    gridCellSizeInputValue.value = currentGridSquarePerSide - 1;
    gridCell();
  }
  
})

// add current sq. per side from grid by 1 
btnPlusSquarePerSide.addEventListener('click', () => {
  let currentGridSquarePerSide = parseInt(gridCellSizeInputValue.value);

  if(currentGridSquarePerSide < 100) {
    gridCellSizeInputValue.value = currentGridSquarePerSide + 1;
    gridCell();
  }
})

// change grid square per side on user input
gridCellSizeInputValue.addEventListener('change', () => {
  if(gridCellSizeInputValue.value < 0 || gridCellSizeInputValue.value > 100) {
    alert('Please enter a value between 0 and 100!')
  }
  else {
    gridCell();
  }
})

// reset drawing grid
resetGrid.addEventListener('click', () => {
  gridCell();
})

eraseGridCell.addEventListener('click', () => {
  drawingColor.value = '#ffffff';
})

//toggle grid
drawingGridCellsBoundary.addEventListener('click', () => {
  const gridCells = document.querySelectorAll('.drawing-grid')

  gridCells.forEach(cell => {
    cell.classList.toggle('hide-drawing-grid')
  })
  
})
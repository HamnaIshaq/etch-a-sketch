
const drawingColor = document.querySelector('#color_picker');

const drawingContainer = document.querySelector('.drawing-container');

const btnMinusSquarePerSide = document.querySelector('.btn-minus');
const btnPlusSquarePerSide = document.querySelector('.btn-plus');
const gridCellSizeInputValue = document.querySelector('#grid-cell-size');

// drawing grid width
const drawingContainerWidth = 700;

// draw 16x16 grid 
const gridCell = () => {
  const gridSize = parseInt(gridCellSizeInputValue.value);
  console.log(gridSize)
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

// draw on grid
drawingContainer.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = drawingColor.value;
})

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
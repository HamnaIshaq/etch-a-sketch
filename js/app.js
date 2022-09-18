
const drawingColor = document.querySelector('#color_picker');

const drawingContainer = document.querySelector('.drawing-container');

// for testing
const gridSize = 16;
// drawing grid width
const drawingContainerWidth = 700;
// single cell size
const cellSize = drawingContainerWidth / gridSize;

// draw 16x16 grid 
const gridCell = () => {
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



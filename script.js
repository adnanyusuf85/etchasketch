let playingBoard = document.getElementById("playingboard");
let eraseButton = document.getElementById("reset-game");
eraseButton.addEventListener('click', ()=>styleCells(boardCells,'rgb(0,0,0)'));

let gridSizeInput = document.getElementById("grid-size");
gridSizeInput.addEventListener('click', gridSizeChange);

let boardSize = 64;
const eventClick = new Event("click");
gridSizeInput.dispatchEvent(eventClick);


function createBoard(numOfRows, numOfColumns, boardElement) 
{
    for (let y = 0; y < numOfRows; y++) 
    {
        let row = document.createElement('div');
        row.classList.add("board_row");
        boardElement.appendChild(row);

        for (let x = 0; x < numOfColumns; x++) 
        {
            let cellborder = document.createElement('div');
            cellborder.classList.add("board_cell");
            let cell = document.createElement('div');
            cell.classList.add('board_cell_inner');
            cellborder.appendChild(cell);
            row.appendChild(cellborder);
        }
    }
}

function paintCell(event)
{   
    let presentOpacity = Number(event.srcElement.style.opacity);
    event.srcElement.style.opacity = 0.3  + presentOpacity;
}

function styleCells(cells, color, size)
{
    cells.forEach(boardCell => {
        boardCell.style.backgroundColor = color;
        boardCell.style.opacity = 0;       
        boardCell.style.width = (640/size-2).toString() + "px";
        boardCell.style.height = (640/size-2).toString() + "px";
    });
    
}

function addMouseOverEventToCells(cells)
{
    cells.forEach(boardCell => {
        boardCell.addEventListener("mouseenter",paintCell);
    });

}

function gridSizeChange(event)
{
    let newBoardSize = event.srcElement.value;
    if (newBoardSize == boardSize)
    {
        return;
    }

    
    playingBoard.innerHTML ='';
    createBoard(boardSize,boardSize, playingBoard);
    let boardCells = playingBoard.querySelectorAll('.board_cell_inner');
    styleCells(boardCells, 'rgb(0,0,0)',boardSize);
    addMouseOverEventToCells(boardCells);
}


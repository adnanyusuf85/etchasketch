let playingBoard = document.getElementById("playingboard");

createBoard(16, 32, playingBoard);
let boardCells = playingBoard.querySelectorAll('.board_cell_inner');
styleCells(boardCells, 'rgb(0,0,0)');
addMouseOverEventToCells(boardCells);

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
    event.srcElement.style.opacity = 0.1  + presentOpacity;
}

function styleCells(cells, color)
{
    cells.forEach(boardCell => {
        boardCell.style.backgroundColor = color;
        boardCell.style.opacity = 0;       
        boardCell.style.width = "16px";
        boardCell.style.height = "16px";
    });
    
}

function addMouseOverEventToCells(cells)
{
    cells.forEach(boardCell => {
        boardCell.addEventListener("mouseenter",paintCell);
    });

}
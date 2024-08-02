let playingBoard = document.getElementById("playingboard");

createBoard(16, 16, playingBoard);

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
            cell.style.backgroundColor = "rgba(0,0,0)";
            cell.style.opacity = 0.1;
            cell.addEventListener("mouseenter",paintCell);

            cellborder.appendChild(cell);
            row.appendChild(cellborder);
        }
    }
}

function paintCell(event)
{   
    let presentOpacity = Number(event.srcElement.style.opacity);
    event.srcElement.style.opacity = 0.1 + presentOpacity;
    console.log(event.srcElement.style.opacity)
}
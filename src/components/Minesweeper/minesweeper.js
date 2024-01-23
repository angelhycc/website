"use strict";

const FLOWER = "\u273f";
const FLAG = "\u2691";
const MINE = "\u25CF";
const BOMB = -6;

let numRows = 14;
let numCols = 18;
let numBombs = 40;

let model = [...Array(numRows)].map(e => Array(numCols).fill(0));
let revealCount = 0;
//let  revealed = false;

document.addEventListener("DOMContentLoaded", function(event) {
    let field = document.getElementById("field");
    for (let cell of field.children) {
        cell.addEventListener("click", leftClick);
        cell.addEventListener("contextmenu", rightClick);
    }
});

function leftClick(event) {
    let cell = event.target;
    reveal(cell);
}

function rightClick(event) {
    event.preventDefault();
    let cell = event.target;

    if (cell.classList.contains("active")) {
        if (cell.textContent == "") {
            cell.textContent = FLAG;
        } else {
            cell.textContent = "";
        }
    }
}

function reveal(cell) {
    if (cell.classList.contains("active") && cell.textContent != FLAG) {
        if (revealCount == 0) {
            initBoard(cell);
        }

        cell.classList.remove("active");
        updateCellContent(cell);
        revealCount++;
        if (revealCount == numRows * numCols - numBombs) {
            revealAllFlowers();
        }

        let row = rowOfCell(cell);
        let col = colOfCell(cell);
        if (model[row][col] == 0) {
            revealNeighbors(row, col);
        }
    }
}

function revealNeighbors(row, col) {
    let rowi = row;
    let colj = col;
        for (let r = rowi - 1; r <= rowi + 1; r++) {
            for (let c = colj - 1; c <= colj + 1; c++) {
                if (r >= 0 && r < numRows && c >= 0 && c < numCols) {
                    reveal(cellAtRowCol(r, c));
                }
            }
        }
}

function initBoard(firstCell) {
    placeBombs(firstCell);
    setNumbers();
}

function placeBombs(firstCell) {
    for (let i = 0; i < numBombs; i++) {
            let row = parseInt((Math.random() * numRows), 10);
            let col = parseInt((Math.random() * numCols), 10);
            if (model[row][col] != BOMB && (row < rowOfCell(firstCell)-1 || row > rowOfCell(firstCell)+1 || col < colOfCell(firstCell)-1 || col> colOfCell(firstCell)+1)) {
                model[row][col] = BOMB;
            } else {
                i--;
            }
        }
    // TODO: Implement rowOfCell(cell) and colOfCell(cell) to get the row and column of a cell
    // TODO: Use parseInt((Math.random() * num), 10) to generate a random int between 0 and num
    // TODO: Make sure that no bombs are in or adjacent to the firstCell 
}

function setNumbers(firstCell) {
    for (let rowi = 0; rowi < model.length; rowi++) {
            for (let colj = 0; colj < model[rowi].length; colj++) {
                if (model[rowi][colj] == BOMB) {
                    for (let row = rowi - 1; row <= rowi + 1; row++) {
                        for (let col = colj - 1; col <= colj + 1; col++) {
                            if (row >= 0 && row <= model.length - 1 && col >= 0 && col <= model[0].length - 1) {
                                if (model[row][col] != BOMB) {
                                    model[row][col] += 1;
                                }
                            }
                        }
                    }
                }
            }
        }
}



function updateCellContent(cell) {
    let row = rowOfCell(cell);
    let col = colOfCell(cell);

    let content = model[row][col];
    switch (content) {
        case BOMB:
            content = MINE;
            cell.style.color = "black";
            cell.style.background = "red";
            revealAllBombs();
            break;
        case 0:
            content = "";
            break;
        case 1:
            cell.style.color = "blue";
            break;
        case 2:
            cell.style.color = "green";
            break;
        case 3:
            cell.style.color = "red";
            break;
        case 4:
            cell.style.color = "purple";
            break;
        case 5:
            cell.style.color = "maroon";
            break;
        case 6:
            cell.style.color = "turquoise";
            break;
        case 7:
            cell.style.color = "black";
            break;
        case 8:
            cell.style.color = "grey";
            break;
    }
    cell.textContent = content;
}

function revealAllFlowers() {
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            if (model[r][c] == BOMB) {
                let cell = cellAtRowCol(r, c);
                cell.textContent = FLOWER;
                cell.style.color = "fuchsia";
            }
        }
    }
}

function revealAllBombs() {
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            if (model[r][c] == BOMB) {
                let cell = cellAtRowCol(r, c);
                cell.classList.remove("active");
                cell.textContent = MINE;
                cell.style.color = "black";
                cell.style.background = "red";
            }
        }
    }
}

function rowOfCell(cell) {
    let index = Array.from(cell.parentElement.children).indexOf(cell);
    return Math.floor(index/numCols)
    // TODO: return the row of a cell given its index in a 1-dimensional collection
    // TODO: Use console.log() to help debug
}

function colOfCell(cell) {
    let index = Array.from(cell.parentElement.children).indexOf(cell);
    return index%numCols
    // TODO: return the column of a cell given its index in a 1-dimensional collection
    // TODO: Use console.log() to help debug
}

function cellAtRowCol(row, col) {
    let field = document.getElementById("field");
    return field.children.item(row * numCols + col);
}

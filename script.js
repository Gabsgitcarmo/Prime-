const board = document.getElementById('board');

// Cria o tabuleiro
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
        board.appendChild(square);

        // Adiciona a peça na posição inicial
        if (row === 0 && col === 0) {
            const piece = document.createElement('div');
            piece.classList.add('piece');
            piece.onclick = () => movePiece(piece, row, col);
            square.appendChild(piece);
        }
    }
}

// Função para mover a peça
function movePiece(piece, row, col) {
    const newRow = row + 1;
    const newCol = col + 1;

    const newSquare = board.children[newRow * 8 + newCol];
    if (newSquare && newSquare.classList.contains('black') && newSquare.children.length === 0) {
        newSquare.appendChild(piece);
    } else {
        alert("Movimento inválido!");
    }
}
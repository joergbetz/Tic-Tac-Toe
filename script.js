let fields = [];
let symbol = 'cross';
let winner = '';
let move = 0;
let gameOver = false;


function selectField(id) {
    if (!fields[id] && !gameOver) {
        if (symbol == 'cross') {
            symbol = 'circle';
        } else {
            symbol = 'cross';
        }
        fields[id] = symbol;
        document.getElementById(`${symbol}${id}`).classList.remove('d-none');
    }
    searchWinner(symbol);
}

function searchWinner(symbol) {
    xSearch(symbol);
    ySearch(symbol);
    crossSearch(symbol);
    nextPlayer(symbol);
    checkDraw();
    if (move == 9) {
        gameOver = true;
        gameOverScreen(move);
    }
    if (winner !== "") {
        gameOver = true;
        gameOverScreen(winner);
    }

}

function xSearch(symbol) {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[2]) {
        winner = symbol;
        document.getElementById('line4').style.transform = 'rotate(90deg) scale(1.0)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[5]) {
        winner = symbol;
        document.getElementById('line5').style.transform = 'rotate(90deg) scale(1.0)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[8]) {
        winner = symbol;
        document.getElementById('line6').style.transform = 'rotate(90deg) scale(1.0)';
    }
    return winner;
}

function ySearch(symbol) {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[6]) {
        winner = symbol;
        document.getElementById('line1').style.transform = 'scale(1.0)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[7] != undefined) {
        winner = symbol;
        document.getElementById('line2').style.transform = 'scale(1.0)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[8] != undefined) {
        winner = symbol;
        document.getElementById('line3').style.transform = 'scale(1.0)';
    }
    return winner;
}

function crossSearch(symbol) {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[8]) {
        winner = symbol;
        document.getElementById('line8').style.transform = 'scale(1.0)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[6]) {
        winner = symbol;
        document.getElementById('line7').style.transform = 'scale(1.0)';
    }
    return winner;
}

function nextPlayer(symbol) {
    if (symbol == 'circle') {
        document.getElementById('player1').classList.add('player-inactive');
        document.getElementById('player2').classList.remove('player-inactive');
    }
    if (symbol == 'cross') {
        document.getElementById('player1').classList.remove('player-inactive');
        document.getElementById('player2').classList.add('player-inactive');
    }
}

function checkDraw() {
    move++;
    return move;
}

function gameOverScreen(x) {
    setTimeout(function () {
        document.getElementById('game-over').classList.remove('d-none');
        document.getElementById('restart-btn').classList.remove('d-none');
        document.getElementById('winner').classList.remove('d-none');
    }, 1000);
    if (x == 'cross'){
        winner = 'Der Gewinner ist Spieler 2';
    }

    if (x == 'circle'){
        winner = 'Der Gewinner ist Spieler 1';
    }
    
    if (x == 9){
        winner = `Das Spiel endet unentschieden.`
    }
    document.getElementById('winner').innerHTML = `${winner}`;
}

function restart() {
    fields = [];
    symbol = 'cross';
    winner = '';
    move = 0;
    gameOver = false;
    clearAll();
}

function clearAll() {
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
    document.getElementById('winner').classList.add('d-none');
    for (let j = 0; j < 9; j++) {
        document.getElementById(`circle${j}`).classList.add('d-none');
        document.getElementById(`cross${j}`).classList.add('d-none');
    }

    for (let j = 1; j < 9; j++) {
        document.getElementById(`line${j}`).style.transform = 'scale(0.0)';
    }
}

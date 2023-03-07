let fields = [];
let symbol = 'cross';
let winner = '';


function selectField(id) {
    if (!fields[id]) {
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

function searchWinner(symbol){
    xSearch(symbol);
    ySearch(symbol);
    crossSearch(symbol);
    nextPlayer(symbol);
    if (winner !== ""){
        console.log ("Der Gewinner ist " + winner)   ;
    }
    
}

function xSearch(symbol){
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[2]){
        winner = symbol;        
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[5]){
        winner = symbol;
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[8]){
        winner = symbol;
    }
    return winner;
}

function ySearch(symbol){
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[8]){
        winner = symbol;
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[6]){
        winner = symbol;
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[6]){
        winner = symbol;
    }
    return winner;
}

function crossSearch(symbol){
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[7] != undefined){
        winner = symbol;
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[8] != undefined){
        winner = symbol;
    }
    return winner;
}

function nextPlayer(symbol){
    if (symbol == 'circle'){
        document.getElementById('player1').classList.add('player-inactive');
        document.getElementById('player2').classList.remove('player-inactive');
    }
    if (symbol == 'cross'){
        document.getElementById('player1').classList.remove('player-inactive');
        document.getElementById('player2').classList.add('player-inactive');
    }    
    }
    

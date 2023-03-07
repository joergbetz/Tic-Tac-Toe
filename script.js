let fields = [];
let symbol = 'cross';


function selectField(id){
    if (symbol == 'cross'){
        symbol = 'circle';
    }else{
        symbol = 'cross';
    }
    if (fields[id] === undefined){
        fields[id] = symbol;
        document.getElementById(`${symbol}${id}`).classList.remove('d-none');
    }
    
}
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowSets = Array.from({length: 9}, ()=> new Set());
    const colSets = Array.from({length: 9}, ()=> new Set());
    const subGrid = Array.from({length: 3},() => Array.from({length:3}, () => new Set()));

    for(let r=0; r<9; r++){
        for(let c=0; c<9; c++){
            const num = board[r][c];

            if(num === ".") continue;

            if(rowSets[r].has(num)) return false;
            if(colSets[c].has(num)) return false;
            if(subGrid[Math.floor(r/3)][Math.floor(c/3)].has(num)) return false;


            rowSets[r].add(num);
            colSets[c].add(num);
            subGrid[Math.floor(r/3)][Math.floor(c/3)].add(num);
        }
    }

    return true;

};
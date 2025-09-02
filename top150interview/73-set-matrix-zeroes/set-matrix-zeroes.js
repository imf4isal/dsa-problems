/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if (!matrix || matrix.length === 0 || !matrix[0] || matrix[0].length === 0) {
        return;
    }

    let m = matrix.length;
    let n = matrix[0].length;

    let first_row_zero = false;
    for(let i=0; i<n; i++){
        if(matrix[0][i] === 0) {
            first_row_zero = true;
            break;
        }
    }

    let first_col_zero = false;
    for(let i=0; i<m; i++){
        if(matrix[i][0] === 0) {
            first_col_zero = true;
            break;
        }

    }


    for(let r = 1; r < m; r++){
        for(let c = 1; c < n; c++){
            if(matrix[r][c] === 0){
                matrix[0][c] = 0;
                matrix[r][0] = 0;
            }
        }
    }

    for(let r = 1; r < m; r++){
        for(let c = 1; c < n; c++){
            if(matrix[r][0] === 0 || matrix[0][c] === 0){
                matrix[r][c] = 0;
            }
        }
    }

    if(first_row_zero === true){
        for(let i = 0; i < n; i++){
            matrix[0][i] = 0;
        }
    }

      if(first_col_zero === true){
        for(let i = 0; i < m; i++){
            matrix[i][0] = 0;
        }
    }

};
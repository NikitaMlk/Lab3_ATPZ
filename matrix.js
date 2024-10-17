class Matrix {
    constructor(n) {
        this.matrix = this.get_matrix(n);
    }

    get_matrix(n) {
        var arr = [];
        for (var i = 0; i < n; i++) {
            arr[i] = [];
            for (var j = 0; j < n + 1; j++) {
                arr[i][j] = 0;
            }
        }
        return arr;
    }

    printm() {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                process.stdout.write(this.matrix[i][j] + ' ');
            }
            console.log('\n');
        }
    }

    get_rows() {
        return this.matrix.length;
    }

    get_cols() {
        return this.matrix.length + 1;
    }

    mull_add(i, j, d) {
        for (let k = 0; k < this.get_cols(); k++) {
            let t = d * this.matrix[j][k];
            this.matrix[i][k] = this.matrix[i][k] + t;
        }
    }

    exists_wrong_row() {
        for (let i = 0; i < this.get_rows(); i++) {
            let zero = true;
            for (let j = 0; j < this.get_rows(); j++) {
                if (this.matrix[i][j] != 0) {
                    zero = false;
                    break;
                }
            }
            if (zero == true && this.matrix[i][this.get_rows()] != 0) {
                return true;
            }
        }
        return false;
    }

    exists_zero_row() {
        for (let i = 0; i < this.get_rows(); i++) {
            let zero = true;
            for (let j = 0; j < this.get_cols(); j++) {
                if (this.matrix[i][j] != 0) {
                    zero = false;
                    break;
                }
            }
            if (zero == true) {
                return true;
            }
        }
        return false;
    }

    swap_with_nonzero_row(i) {
        for (let j = i + 1; j < this.get_rows(); j++) {
            if (this.matrix[j][i] != 0) {
                for (let k = 0; k < this.get_cols(); k++) {
                    let temp = this.matrix[i][k];
                    this.matrix[i][k] = this.matrix[j][k];
                    this.matrix[j][k] = temp;
                }
            }
        }
    }

    get(i, j) {
        return this.matrix[i][j];
    }

    set(i, j, d) {
        this.matrix[i][j] = d;
    }
}

module.exports = Matrix;

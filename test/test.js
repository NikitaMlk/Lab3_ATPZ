import { expect } from 'chai';
import Matrix from '../matrix.js';

describe('Matrix', () => {
    let matrix;

    beforeEach(() => {
        matrix = new Matrix(3); // 3x4 matrix
    });

    it('should create a matrix with correct dimensions', () => {
        expect(matrix.get_rows()).to.equal(3);
        expect(matrix.get_cols()).to.equal(4);
    });

    it('should initialize matrix with zeros', () => {
        for (let i = 0; i < matrix.get_rows(); i++) {
            for (let j = 0; j < matrix.get_cols(); j++) {
                expect(matrix.get(i, j)).to.equal(0);
            }
        }
    });

    it('should set and get matrix values', () => {
        matrix.set(0, 0, 5);
        expect(matrix.get(0, 0)).to.equal(5);
    });

    it('should perform mull_add operation correctly', () => {
        matrix.set(0, 0, 2);
        matrix.set(1, 0, 1);
        matrix.mull_add(0, 1, 2);
        expect(matrix.get(0, 0)).to.equal(4); // 2 + 2*1 = 4
    });

    it('should detect wrong row', () => {
        matrix.set(0, 0, 0);
        matrix.set(0, 1, 0);
        matrix.set(0, 2, 0);
        matrix.set(0, 3, 5); // This row is (0, 0, 0, 5)
        expect(matrix.exists_wrong_row()).to.be.true;
    });

    it('should detect zero row', () => {
        matrix.set(1, 0, 0);
        matrix.set(1, 1, 0);
        matrix.set(1, 2, 0);
        matrix.set(1, 3, 0); // This row is (0, 0, 0, 0)
        expect(matrix.exists_zero_row()).to.be.true;
    });

    it('should swap rows with nonzero element correctly', () => {
        matrix.set(1, 0, 3);
        matrix.swap_with_nonzero_row(0);
        expect(matrix.get(0, 0)).to.equal(3); // After swapping, first row should start with 3
    });
});

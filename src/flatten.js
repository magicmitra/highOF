/**
 * 
 * @param {*} matrix -> array of data to be passed
 * @returns flatterned array with all elements of original array
 */
const flatten = (matrix) => {
    /**
     * matrix is an array of arrays, 
     * concat the accumulator on every iteration of reduce.
     */

    const flatArray = matrix.reduce((accum, curr) => accum.concat(curr));
    return flatArray
}

module.exports = {
    flatten,
}
/**
 * 
 * @param {Number} value -> Integer
 * @param {*} test -> halts execution if false (condition)
 * @param {*} update -> gotta move closer to terminating the loop
 * @param {*} body -> call for successful test
 */
const ownLoop = (value, test, update, body) => {
    /**
     * values of test and update are known here
     */
    // we're allowed to use a for loop
    for(let init = value; condition(test(init)); init = antiInfinite(update(init))) {
        body(init);
    };
    return;
}

// check condition 
// this bitch needs to know the value aside from the test
function condition(test) {
    return test ? true : false;
}

// move closer to loop terminator
// this needs to know the previous value
function antiInfinite(update) {
    return update;
}

module.exports = {
    ownLoop,
}
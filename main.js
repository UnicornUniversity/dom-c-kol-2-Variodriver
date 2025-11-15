/**
 * The main function which calls the application.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    let sum = 0;

    let currentModifier = 1
    let currentNumberIndex = inputNumber.length;

    while (currentNumberIndex > 0) {
        currentNumberIndex--;
        sum += currentModifier * Number.parseInt(inputNumber[currentNumberIndex])
        currentModifier *= 2;
    }

    return sum.toString();
}

/**
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
    return [2];
}

/**
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
    return [10];
}

// Exercise 5: Arrays
// Complete each function according to the instructions

/**
 * Task 1: Create Number Array
 * Create and return an array containing the numbers 1, 2, 3, 4, 5
 * @returns {number[]} Array containing [1, 2, 3, 4, 5]
 */
function createNumberArray() {
  // TODO: Create and return an array with numbers 1 through 5
  const numbers = [1, 2, 3, 4, 5];
  return numbers;
}

/**
 * Task 2: Add to End
 * Add an element to the end of an array and return the new array
 * Do not modify the original array
 * @param {any[]} array - The original array
 * @param {any} element - The element to add
 * @returns {any[]} New array with element added to the end
 */
function addToEnd(array, element) {
  // TODO: Create a new array with the element added to the end
  // Hint: Use spread operator [...array, element] or concat()
  const newArray = [...array, element];
  return newArray;
}

/**
 * Task 3: Remove from Start
 * Remove and return the first element from an array
 * Do not modify the original array
 * @param {any[]} array - The original array
 * @returns {any} The first element of the array
 */
function removeFromStart(array) {
  // TODO: Return the first element of the array
  // Hint: Use array[0] or array indexing
  const first = array[0];
  return first;
}

/**
 * Task 4: Find Largest
 * Find and return the largest number in an array
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The largest number in the array
 */
function findLargest(numbers) {
  // TODO: Find and return the largest number
  // Hint: Use Math.max() with spread operator or a loop
  let max = numbers[0];
  numbers.map((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}

/**
 * Task 5: Filter Even Numbers
 * Filter an array to only include even numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} New array containing only even numbers
 */
function filterEvenNumbers(numbers) {
  // TODO: Filter the array to only include even numbers
  // Hint: Use filter() method and modulo operator (%)
  let number = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {
      number.push(element)
    }
  }
  return number;
}

/**
 * Task 6: Sum Array
 * Calculate and return the sum of all numbers in an array
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The sum of all numbers
 */
function sumArray(numbers) {
  // TODO: Calculate the sum of all numbers in the array
  // Hint: Use reduce() method or a loop
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += element;    
  }
  return sum;
}



// DO NOT MODIFY: Export functions for testing
module.exports = {
  createNumberArray,
  addToEnd,
  removeFromStart,
  findLargest,
  filterEvenNumbers,
  sumArray,
};

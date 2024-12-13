

// answer question no 1

function calculateDifference(a, b) {
    return a - b;
}

console.log(calculateDifference(10, 5)); 
console.log(calculateDifference(5, 10));  




// answer question no 2

function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(5));  



// answer question no 3

function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMin([10, 5, 8, 20, 2]));  
console.log(findMin([45, 23, 89, 12]));  




// answer question no 4

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([10, 5, 8, 20, 2]));  
console.log(filterEvenNumbers([1, 3, 5, 7]));       
console.log(filterEvenNumbers([4, 6, 9, 12]));      



// answer question no 5

function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

console.log(sortArrayDescending([10, 5, 8, 20, 2]));  
console.log(sortArrayDescending([1, 3, 5, 7]));      
console.log(sortArrayDescending([4, 6, 9, 12]));      



// answer question no 6

function lowercaseFirstLetter(str) {
    if (str.length === 0) {
        return str; 
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello")); 
console.log(lowercaseFirstLetter("JavaScript")); 
console.log(lowercaseFirstLetter("WORLD"));  
console.log(lowercaseFirstLetter(""));  




// answer question no 7


function findAverage(arr) {
    if (arr.length === 0) {
        return 0;  
    }
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
console.log(findAverage([10, 5, 8, 20, 2])); 
console.log(findAverage([1, 2, 3, 4, 5]));   
console.log(findAverage([45, 23, 89, 12]));  
console.log(findAverage([]));                



// answer question no 8

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
console.log(isLeapYear(2020));  
console.log(isLeapYear(1900));  
console.log(isLeapYear(2000));  
console.log(isLeapYear(2023));  

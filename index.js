//Given an array of strings, use a function to reverse all
//  the elements in the string in ascending order and 
// the specific elements in descending order
function reverseStrings(arr){
        
        let ascendingArr = arr.sort();
        
        let reversedArr = ascendingArr.map(str => str.split('').reverse().join(''));
        
        return reversedArr;
    }
    
    let inputArray = ["apple", "banana", "grape", "pear"];
    console.log(reverseStrings(inputArray)); 
//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative,
//  else zero
    function checkNumbers(arr) { 
         return arr.map(num => {
        if (num > 0) return "positive";
        else if (num < 0) return "negative";
        else return "zero";
    });
}

let nums = [1, -3, 0, 5, -2];
console.log(checkNumbers(nums));


//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of
//  employee objects sorted by their salary in ascending order.
function sortBySalary(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
}

let employees = [
    { id: 1, name: "John", salary: 50000 },
    { id: 2, name: "Jane", salary: 60000 },
    { id: 3, name: "Tom", salary: 40000 }
];

console.log(sortBySalary(employees));

//Write a function that accepts an array of numbers and uses the forEach() method 
// to console.log each number multiplied by 2.

function multiplyByTwo(arr) {
    arr.forEach(num => {
        console.log(num * 2);
    });
}

let numbers = [1, 2, 3, 4];
multiplyByTwo(numbers);

//Write a function that takes in an array of numbers and consoles the 
// first four items multiplied by 8 and the last two added by 5. Console the array with the new values

    
function mixedArray(arr) {
    const result = arr.map((num, index) => {
      if (index < 4) return num * 8;
      else if (index >= arr.length - 2) return num + 5;
      return num;
    });
    console.log(result);
    return result;
  }
  
  
  mixedArray([1, 2, 3, 4, 5, 6]);
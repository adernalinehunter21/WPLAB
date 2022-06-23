// function splitIntoChunk(arr, chunk) {
//   while (arr.length > 0) {
//     let tempArray;
//     tempArray = arr.splice(0, chunk);
//     console.log(tempArray)
//   }
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunk = 2;
// splitIntoChunk(array, chunk);
function insertAt(array, index, ...elementsArray) {
  array.splice(index, 0, ...elementsArray);
}

var num = [1, 2, 3, 6, 7, 8];
console.log("The array is", num);
console.log("\n--------\nAdding 4 and 5 before 6 in the above array");

insertAt(num, 3, 4, 5);

console.log("After adding elements the array is", num);

function leap_year_range(st_year, end_year) {
  var year_range = [];
  for (var i = st_year; i <= end_year; i++) {
    year_range.push(i);
  }
  var new_array = [];

  year_range.forEach(function (year) {
    if (test_LeapYear(year)) new_array.push(year);
  });

  return new_array;
}

function test_LeapYear(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return year;
  } else {
    return false;
  }
}

console.log(leap_year_range(2000, 2012));
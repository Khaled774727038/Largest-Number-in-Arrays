function largestOfFour(arr) {
    var result = [];
  
    for (var i = 0; i < arr.length; i++) {
      var maxNumber = arr[i][0]; // Assume the first element is the largest
  
      for (var j = 1; j < arr[i].length; j++) {
        // Compare each element in the sub-array
        if (arr[i][j] > maxNumber) {
          maxNumber = arr[i][j];
        }
      }
  
      result.push(maxNumber); // Add the largest number to the result array
    }
  
    return result;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  // that will print the largest number from every index that contain an array which are: [5, 27, 39, 1001]
  
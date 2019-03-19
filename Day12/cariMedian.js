function cariMedian(arr) {
  var indexMid = 0;
  var median = 0;
  var arrLength = arr.length

  if (arrLength % 2 == 0){
  	indexMid = arrLength / 2
  	median = (arr[indexMid] + arr[indexMid - 1]) / 2
  } else {
  	indexMid = Math.round(arrLength / 2) - 1
  	median = arr[indexMid]
  }

  return median;

}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
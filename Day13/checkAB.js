function checkAB(num) {
var index1 = 0;
var index2 = 0;
var secondAlphabet = '';

  for (var i = 0; i < num.length; i++) {
  	if(num[i]==='a'||num[i]==='b'){
  		index1 = i;
  		// console.log('index1 = ' + index1)
  		// console.log(num[index1])
  		break;
  	}
  }

  index2 = index1 + 4
  // console.log('index2 = ' + index2)

  if (num.charAt(index2)==='b'||num.charAt(index2)==='a') {
  	// console.log(num[index2])
  	return true
  } else {
  	// console.log(num[index2])
  	return false
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
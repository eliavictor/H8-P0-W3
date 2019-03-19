function urutkanAbjad(str) {
var alphabet = '';
var alphabetList = 'abcdefghijklmnopqrstuvwxyz'
var arrAlphabet = []
var output = ''
var wordSorted = ''

  for (var i = 0; i < str.length; i++) {
  	alphabet = str[i];
  	var index = alphabetList.indexOf(alphabet)
  	arrAlphabet.push(index)
  }

  arrAlphabet.sort(function(a, b){return a-b});

  for (var i = 0; i < arrAlphabet.length; i++) {
  	output = alphabetList.charAt(arrAlphabet[i])
  	wordSorted += output
  }

  return wordSorted
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
function ubahHuruf(kata) {
var alphabet = '';
var alphabetList = 'abcdefghijklmnopqrstuvwxyz';
var alphabetChanged = ''
var output = '';

  for (var i = 0; i < kata.length; i++) {
	 alphabet = kata[i]
	 var index = alphabetList.indexOf(alphabet) + 1
	 var alphabetChanged = alphabetList.charAt(index)
	 	output += alphabetChanged
  }

return output

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx 
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
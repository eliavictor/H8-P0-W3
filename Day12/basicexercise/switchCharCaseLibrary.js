/**
 [Instruction]
 Ubah huruf kecil menjadi besar, dan besar menjadi kecil.
 dilarang menggunakan .toUpperCase() dan .toLowerCase()
 gunakan teknik alphabet library!
 */

function switchCharCase(words) {
   var alphabet = '';
   var alphabetList = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ  ';
   var changedChar = '';
   var output = '';

  for (var i = 0; i < words.length; i++) {
  	alphabet = words[i];
  	var index = alphabetList.indexOf(alphabet)
  	if (index%2 === 0) {
  		index = index+1
  	} else {
  		index = index-1
  	}
  	changedChar += alphabetList[index]
  }

  return changedChar

}

console.log(switchCharCase('aXBcEf')); //AxbCeF
console.log(switchCharCase('sAyA buKAN AnAK AlAy')); //SaYa BUkan aNak aLaY
function changeVocals (str) {
	var alphabet = '';
   	var alphabetList = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
   	var changedChar = '';
   	var output = '';

  for (var i = 0; i < name.length; i++) {
  	alphabet = name[i];
  	var index = alphabetList.indexOf(alphabet)

  	if (index < 0) {
      	changedChar = alphabet;
    } else {
    	changedChar = alphabetList[index+2]
    }

    output += changedChar
  }

  return output
}

function reverseWord (str) {
  //code di sini
}

function setLowerUpperCase (str) {
  //code di sini
}

function removeSpaces (str) {
  //code di sini
}

function passwordGenerator (name) {
   changeVocals();
}

console.log(passwordGenerator('aaBBcc')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
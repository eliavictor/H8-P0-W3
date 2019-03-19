function digitPerkalianMinimum(angka) {
var min = 0;
var output = []
var strI = 0;
var strJ = 0;
  for (var i = 0; i <= angka; i++) {
  	var j = 0;
  	if (angka % i == 0) {
  		j = angka / i
  		strI = String(i)
  		strJ = String(j)
  		output.push(strI.length + strJ.length)
  		}
	}
	min = Math.min.apply(null, output)
	return min
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
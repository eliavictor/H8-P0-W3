function naikAngkot(arrPenumpang) {

	if(arrPenumpang == undefined){
     return arrPenumpang
 }

  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var harga = 0;
  var output = []
  var tarif = 2000;
  
  for (var i = 0; i < arrPenumpang.length; i++) {
  	var object = {
  	'penumpang': arrPenumpang[i][0],
  	'naikDari': arrPenumpang[i][1],
  	'tujuan':  arrPenumpang[i][2],
  	'bayar':  harga,
  	}

  	for (var z = 0; z < rute.length; z++) {
  		if (object.naikDari === rute[z]) {
  			var start = 0
  			start = z
  		}
  		if (object.tujuan === rute[z]) {
  			var end = z
  		}
  	}

  	harga = tarif * (end - start);
  	output.push(object)
  	object.bayar =  harga
  }
  return output
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
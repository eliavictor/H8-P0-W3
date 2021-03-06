/*
======================
Lowest Global Median
======================

[INSTRUCTIONS]

lowestGlobalMedian adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka rata-rata dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka rata-rata yang paling rendah.

[EXAMPLE]
lowestGlobalMedian([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai rata-rata dari firstArr = 1
nilai rata-rata dari secondArr = 12.25

karena 1 < 12.25, maka function lowestGlobalMedian akan me-return 1.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.
*/

/*
Pseducode/ algoritma anda di sini
	Start
	Input firstArr dan secondArr
	Hitung rata -  rata dari masing - masing array
	Simpan hasil hitungan kedalam median1 dan median2
	Jika median1 > median2 maka output adalah median2, apabila median 2 > median1 maka output adalah median1
	Tampilkan output
	End
*/

function lowestGlobalMedian(firstArr, secondArr) {
	var median1 = 0;
	var median2 = 0;
	var output = 0;
	var i = 0;
	var j = 0;


	while(i < firstArr.length){
		median1 = median1 + firstArr[i];
		i++
	}

	for (var i = 0; i < secondArr.length; i++) {
		median2 = median2 + secondArr[i];
		j++
	}

	median1 = median1 / firstArr.length;
	median2 = median2 / secondArr.length;

	if (median1 > median2) {
		output = median2;
	} else {
		output = median1;
	}

	return output
}

console.log(lowestGlobalMedian([1, 1, 1] , [8, 15, 17, 9])); // 1
console.log(lowestGlobalMedian([4, 8, 9, 12] , [33, 88, 99 ,11])); // 8.25
console.log(lowestGlobalMedian([1, 2, 5, 2, 2] , [67, 45, 55])); // 2.4
console.log(lowestGlobalMedian([6, 5, 13, 23], [6, 2, 4, 10, 8, 2])); // 5.33
console.log(lowestGlobalMedian([5, 11, 18, 6], [3, 1, 8, 13])); // 6.25

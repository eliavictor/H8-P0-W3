function shoppingTime(memberId, money) {
  if (memberId === undefined||memberId===''){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }
  if (money < 50000){
    return 'Mohon maaf, uang tidak cukup'
  }

  var itemList = [
  {barang: 'Sepatu Stacattu',
  harga: 1500000},
  {barang: 'Baju Zoro',
  harga: 500000}, 
  {barang: 'Baju H&N', 
  harga: 250000},
  {barang: 'Sweater Uniklooh', 
  harga: 175000},
  {barang: 'Casing Handphone', 
  harga: 50000}];

  var firstMoney = money;
  var itemPurchased = [];
  var output = 0;
  var object = {};

  object.memberId = memberId;
  object.memberMoney = firstMoney;
  object.memberPurchased = itemPurchased;

  for (var i = 0; i < itemList.length; i++) {
    if (money >= itemList[i].harga) {
    itemPurchased.push(itemList[i].barang)
    money = money - itemList[i].harga
  }
  }

  // if (money >= itemList[0].harga) {
  //   itemPurchased.push(itemList[0].barang)
  //   money = money - itemList[0].harga
  // }
  // if (money >= itemList[1].harga) {
  //   itemPurchased.push(itemList[1].barang)
  //   money = money - itemList[1].harga
  // }
  // if (money >= itemList[2].harga) {
  //   itemPurchased.push(itemList[2].barang)
  //   money = money - itemList[2].harga
  // }
  // if (money >= itemList[3].harga) {
  //   itemPurchased.push(itemList[3].barang)
  //   money = money - itemList[3].harga
  // }
  // if (money >= itemList[4].harga) {
  //   itemPurchased.push(itemList[4].barang)
  //   money = money - itemList[4].harga
  // }

  object.memberChange = money;

  return object

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
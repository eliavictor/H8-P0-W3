function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    var arrSepatu = [];
    var arrBaju = [];
    var arrSweater = [];

    var amountSepatu = 0;
    var amountBaju = 0;
    var amountSweater = 0;
    var stockSepatu = listBarang[0][2];
    var stockBaju = listBarang[1][2];
    var stockSweater = listBarang[2][2];

    if (shoppers.length == 0){
      return '[]'
    }

    for (var i = 0; i < shoppers.length; i++){
      if (shoppers[i].product === listBarang[0][0] && shoppers[i].amount <= stockSepatu){
        arrSepatu.push(shoppers[i].name);
        amountSepatu += shoppers[i].amount;
        stockSepatu -= amountSepatu;
      }
      if (shoppers[i].product === listBarang[1][0] && shoppers[i].amount <= stockBaju){
        arrBaju.push(shoppers[i].name);
        amountBaju += shoppers[i].amount;
        stockBaju -= amountBaju;
      }
      if (shoppers[i].product === listBarang[2][0] && shoppers[i].amount <= stockSweater){
        arrSweater.push(shoppers[i].name);
        amountSweater += shoppers[i].amount;
        stockSweater -= amountSweater;
      }
    }
    var output=[]
    output.push({
      product:listBarang[0][0],
      shoppers:arrSepatu,
      leftOver:listBarang[0][2] - amountSepatu,
      totalProfit:listBarang[0][1] * amountSepatu
    });
    output.push({
      product:listBarang[1][0],
      shoppers:arrBaju,
      leftOver:listBarang[1][2] - amountBaju,
      totalProfit:listBarang[1][1] * amountBaju
    });
    output.push({
      product:listBarang[2][0],
      shoppers:arrSweater,
      leftOver:listBarang[2][2] - amountSweater,
      totalProfit:listBarang[2][1] * amountSweater
    });

    return output;
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]
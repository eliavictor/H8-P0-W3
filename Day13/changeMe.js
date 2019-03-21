function changeMe(arr) {
  for(i = 0; i < arr.length; i++){
    var object = {};
    object.firstName = arr[i][0];
    object.lastName = arr[i][1];
    object.gender = arr[i][2];
    if(arr[i][3] === undefined){
      object.age = 'Invalid Birth Year';
    }else{
      object.age = 2019-arr[i][3];
    }
    console.log((i+1) + '. ' + object.firstName + ' ' + object.lastName + ' :')
    console.log(object)
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// changeMe([]); // ""
function activityNotifications(expenditure, d) {
	var notification = 0;
	var indexLength = expenditure.length - d;

	for(i = 0; i < indexLength; i++){
  	var activityArr = []

  		for(j = i; j < d + i; j++){
  			activityArr.push(expenditure[j])
  		}

  	activityArr.sort()
    var median = 0
      
      if(activityArr.length % 2 === 0){
      	median = activityArr[Math.floor(activityArr.length / 2) - 1 ] +  activityArr[Math.floor(activityArr.length / 2)] / 2
      } else {
        median = activityArr[(activityArr.length+1) / 2]
      }

      var todayExp =  expenditure[d + i]
      if (todayExp >= median * 2){
        notification++
      }
  }
  return notification
}

	

//TEST CASES
console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)) // 2
console.log(activityNotifications([1, 2, 3, 4, 4], 4)) // 0
console.log(activityNotifications([10, 20, 30, 40, 50], 3)) // 1
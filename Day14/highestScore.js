function highestScore (students) {
  var arrScores = []
  var highestScore = 0;
  var clas = []
  clas.push(students[0].class)
  for (var i = 0; i < students.length; i++) {
    arrScores.push(students[i].score)

    arrScores.sort(function(a, b){return a - b});
    highestScore = arrScores[arrScores.length-1]
    // console.log(students[j].class)
    if (clas[0] !== students[i].class) {
      clas.push(students[i].class)
    }
    //   if (students[i].score === highestScore) {
    //   var output = {
    //    studentsclass: {'name': students[i].name, 'score': students[i].score}
    //   }
    // }
}

  return clas
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


// console.log(highestScore([])); //{}
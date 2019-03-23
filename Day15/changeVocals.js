function changeVocals (str) {
    
    var vocal = "aiueo"
    var vocalBig = "AIUEO"
    var changed = "bjvfp"
    var changedBig = "BJVFP"
    var newStr = "";
    
    for(i=0;i<str.length;i++){
        var found = false;
        for(j=0;j<vocal.length;j++){
            if(str[i]===vocal[j]){
                newStr += changed[j];
                found = true;
            } else
            if(str[i]===vocalBig[j]){
                newStr += changedBig[j];
                found = true;
            }
        }
        if(found === false){
            newStr += str[i];
        }
        
    }
return newStr;
  }
  
  function reverseWord (str) {
    var reverse ="";
    for(i=str.length-1;i>=0;i--){
        reverse += str[i]
    }
    return reverse;
  }
  
  function setLowerUpperCase (str) {
    var temp ="";

var small = "abcdefghijklmnopqrstuvwxyz"
var big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(i=0;i<str.length;i++){
        for(j=0;j<small.length;j++){
            if(str[i] === small[j]){
                temp += big[j]
            }
            else if (str[i] === big[j]){
                temp += small[j];
            }
            
            }
            if (str[i] === " "){
                temp +=" ";
        }
          
    }
return temp;
  }
  
  function removeSpaces (str) {
    var removeSpc = "";
    for(i=0;i<str.length;i++){
        if(str[i] !== " "){
            removeSpc += str[i];
        }
    }
    return removeSpc;
  }
  
  function passwordGenerator (name) {
      if(name.length < 5){
          return "Minimal karakter yang diinput harus 5 karakter"
      }
    var changedVocals = changeVocals(name);
    var reversedWord = reverseWord(changedVocals);
    var loweredCase = setLowerUpperCase(reversedWord);
    var removedSpaces = removeSpaces(loweredCase);
    return removedSpaces;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

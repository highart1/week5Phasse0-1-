function changeVocals (str) {
    //code di sini
    var vokal = 'aAiIuUeEoO'
    var konsonan = 'bBjJvVfFpP'
    var tampungWord = ''

    for(var i=0; i<str.length; i++){
        var found = false
        for(var j=0; j<vokal.length; j++){
            if(str[i] == vokal[j]){
                tampungWord += konsonan[j]
                found = true
            }
        }
        if(found == false){
            tampungWord += str[i]
        }
    }
    return tampungWord
  }
  
  function reverseWord (str) {
    //code di sini
    var tampungWord = ''
    for(var i=str.length - 1; i>= 0; i--){
        tampungWord += str[i]
    }
    return tampungWord
  }
  
  function setLowerUpperCase (str) {
    //code di sini

    var tampungWord = []
    for(var j=0; j<str.length; j++){
    if(str[j] == str[j].toLowerCase()){
        tampungWord.push(str[j].toUpperCase())
    } else {
        tampungWord.push(str[j].toLowerCase())
    }
  }
  return tampungWord
}
  
  function removeSpaces (str) {
    //code di sini
    var tampungWord = ''
    for(var k=0; k<str.length; k++){
        if(str[k] != ' '){
            tampungWord += str[k]
        }
    }
    return tampungWord
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length <= 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var reChangeVokal = changeVocals(name)
    var recReverse = reverseWord(reChangeVokal)
    var reCSet = setLowerUpperCase(recReverse)
    var recRemove = removeSpaces(reCSet)
    return recRemove
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
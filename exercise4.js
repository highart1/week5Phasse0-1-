function totalDigitRekursif(angka) {
    // you can only write your code here!
    var str = angka.toString()

    if(str.length == 1){
        return parseInt(str)
    }else {
        return parseInt(str[0]) + totalDigitRekursif(parseInt(str.slice(1, angka.length)))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5
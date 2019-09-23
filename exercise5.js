function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var str = angka.toString()
  if(str.length == 1){
      return parseInt(str)
  } else {
      return kaliTerusRekursif(parseInt(str[0] * kaliTerusRekursif(parseInt(str.slice(1, angka.length)))))
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
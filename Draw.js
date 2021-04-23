let kotak = nilai => {
    let hasil = "";
    for (let x = 0; x < nilai; x++) {
        for (let y = 0; y < nilai; y++) {
        hasil += "* ";
        }
        hasil += "\n";
    }
    return hasil;
}
console.log("Menggambar Kotak");
console.log(kotak(5));

let segitiga = nilai => {
    let hasil = "";
    for(let x = 0; x < nilai ; x++ ) {
        for(let y = 0; y <= x ; y++ ) {
        hasil += "* ";
        }
        hasil += "\n";
    }
return hasil;
}
console.log("Menggambar Segitiga");
console.log(segitiga(5));

let segitigaterbalik = nilai =>{
    let hasil = "";
    for(let x = nilai; x > 0 ; x-- ) {
        for(let y = 0; y < x ; y++ ) {
        hasil += "* ";
        }
        hasil += "\n";
    }
return hasil;
}
console.log("Menggambar Segitiga Terbalik");
console.log(segitigaterbalik(5));

let selangseling = nilai =>{
    let hasil ="";
    let nomer = 0;
    for(let x = nilai; x > 0 ; x-- ) {
        for (let y = 0; y < nilai; y++) {
        nomer++;
        if(nomer % 2 == 0) {
            hasil += "! ";	
        }
        else {
            hasil += "* ";
        }
        }
        hasil += "\n";
    }
return hasil;
}
console.log("Menggambar Selang-Seling");
console.log(selangseling(5));  

let kotakpola = nilai =>{
    let hasil = "";
  for (let x = 0; x < nilai; x++) {
    for (let y = 0; y < nilai; y++) {
     if (x % 2 == 1 && y== 1 || x % 2 == 0 && y== 2  )  {
        hasil += "! ";
      } else {
        hasil += "* ";
      }
    }
    hasil += "\n";
  }
  return hasil;
}

console.log("Menggambar Kotak Pola");
console.log(kotakpola(5));  

// soal 1
var nilai = 99;
  
if (nilai >=85){
   console.log("A");
}
else if (nilai >=75 && nilai < 85){
   console.log("B");
}
else if (nilai >=65 && nilai < 75){
   console.log("c");
}
else if (nilai >=55 && nilai < 65){
   console.log("D");
}
else{
   console.log("E");
}

//soal 2
var tanggal = 5;
var bulan = 4;
var tahun = 1999;
switch(bulan) {
  case 1: { 
      console.log(tanggal+' '+' Januari'+' '+tahun); 
        break; 
    }
  case 2: { 
      console.log(tanggal+' '+' Februari'+' '+tahun);
        break; 
    }
  case 3: { 
      console.log(tanggal+' '+' Maret'+' '+tahun);
        break;
     }
  case 4: { 
      console.log(tanggal+' '+' April'+' '+tahun);
       break; 
    }
  case 5: {
       console.log(tanggal+' '+' Mei'+' '+tahun);
        break;
     }
  case 6: { 
      console.log(tanggal+' '+' Juni'+' '+tahun);
       break; 
    }
  case 7: {
       console.log(tanggal+' '+' Juli'+' '+tahun);
        break;
    }
  case 8: {
       console.log(tanggal+' '+' Agustus'+' '+tahun);
        break; 
    }
  case 9: {
       console.log(tanggal+' '+' September'+' '+tahun);
        break;
    }
  case 10: {
       console.log(tanggal+' '+' Oktober'+' '+tahun);
        break;
    }
  case 11: { 
      console.log(tanggal+' '+' November'+' '+tahun);
       break;
    }
  case 12: {
       console.log(tanggal+' '+' Desember'+' '+tahun);
        break; 
    }
  default:  {
       console.log('Tidak terjadi apa-apa');
     }
}

//soal 3
function n(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '# ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(n(3));

function n(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '# ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(n(7));

//soal 4
var m = 10;
var x = "";
var c = 0;
var baris = "";
for (var a = 1; a <= m; a++) {
  c++;
  switch (c) {
    case 1: {
      baris = a + " - I love programming";
        break;
    }
    case 2: {
      baris = a + " - I love Javascript";
        break;
    }
    case 3: {
      baris = a + " - I love VueJS";
        break;
    }
  }
  console.log(baris);
  if (a % 3 == 0) {
    for (var s = 1; s <= a; s++) {
      x += "=";
    }
    console.log(x);
    x = "";
    c = 0;
  }
}


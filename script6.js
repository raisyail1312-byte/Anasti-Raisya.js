let dataString ="data string";
console.log(dataString);

// 1. escaping string (\' \" \\ \n \r \b \f")
let data1 = 'ulum berkata"apa kabar dunia?"';
console.log(data1);
let data2 =" berkata\'kabar baik\'";
console.log(data2);
let data3 ="aulia berjalan jalan di tepi pantai,\nkeren";
console.log(data3);

// 2.literasi string (template literasi string)
let namaDepan ="aulia";
let namaBelakang = "putri";
let umur = 1;
let namaLengkap = umur + " " + namaBelakang + " " + namaBelakang;
console.log (namaLengkap);

//lebih elehan supaya ini tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);
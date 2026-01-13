// jadi ini adalah komen, jadi bebas aja

// 1. variabel dengan let
let nama ="Anasti Raisya Ilmi";

// tampilan data
console.log(nama);

// kita ubah nilai variabel nama
nama = "Putri Faradibah Ilmiya";
console.log(nama);

// 2. variabel dengen var
var namaDepan = "Anasti";
console.log(namaDepan);
namaDepan = "Putri";
console.log(namaDepan);

// kelakuan dari let
let namaBelakang = "Ilmi";
{
        let namaBelakang ="Ilmiya";
        console.log(namaBelakang);
}
console.log(namaBelakang);

//kelakuan dari var
var namaTengah = "Raisya";
{
        var namaTengah = "Faradibah";
        console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus tanpa keyword akan jadi var
gorengan = "bala-bala";
{
                gorengan = "combro"
}
console.log (gorengan);

// 3. const
const TTL = "12 januari 2026";
console.log(TTL);

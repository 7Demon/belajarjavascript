// alert("helo world");
// console.log('hello world');
// var test = prompt("siapa nama kamu");
// alert('nama kamu adalah '+test);

// perbandingan
// let usia = Number(prompt('berapa usia mu'));
// if (usia >= 1 && usia <= 15){
//     usia = 'masih kecil';
// }else{
//     usia = 'dewasa';
// }
// alert('umur kamu adalah '+ usia);

// menampilkan saldo akhir
// let a = Number(prompt('saldo awal'));
// let b = Number(prompt('saldo tambahan'));
// alert(`saldo akhir kamu adalah ${b+a}`);

// looping for
for (let i = 0; i < 5; i = i + 1){
    console.log('belajar javascript');
}

// looping dengan array
let angka = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < angka.length ; i++){
    console.log(angka[i]);
}

//looping while dan do while
let a = 0
while (a < 5){
    a++
    console.log('hello world')
}// while dijalan mengecek kondisi nya terlebih dahulu lalu menjalan perintah

do{
    a++
    console.log('ini pake do while')// menjalankan perintah dulu baru mengecek kondisi
}while(a < 5)

//menampilkan hari sekarang
day = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
let hari = new Date().getDay();
let hariIni = day[hari]
console.log('hari ini adalah '+ hariIni);
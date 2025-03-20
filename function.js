// menghitung luas dengan menggunakan function
function luasLingkaran(r){
    const luas = Math.PI * r * r
    console.log(luas)
}
console.log("luas lingkaran")
luasLingkaran(8)

function LuasSegitiga(a, t){
    const luas = a * t / 2
    console.log(luas)
}
console.log("luas Segitiga")
LuasSegitiga(10, 11)

function LuasPp(p, l){
    const luas = p * l
    console.log(luas)
}
console.log("luas Persegi panjang")
LuasPp(10, 11)

// menghitung total gaji selama 1 bulan
const nama = prompt("masukkan nama:")
const gajiHarian = Number(prompt("jumlah gaji harian :"))
const hariKeja = Number(prompt("Jumlah Hari Kerja"))

function gaji(){
    const totalGaji = gajiHarian * hariKeja
    alert(`Nama ${nama} total gaji anda adalah Rp.${totalGaji}`)
    
}
gaji()
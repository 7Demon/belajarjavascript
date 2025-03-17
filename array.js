let b = ["👨🏾" , "👨🏼", "👨🏽", "👨", "👨🏻"]

let a = b.includes("👨🏽")// apakah array b mengandung emot tersebut
const sorted_b = b.sort() // mengurutkan

console.log(`Urutannya adalah ${sorted_b}`)
console.log(a)
if (a){
    let c = b.indexOf('👨🏽') // mengetahui posisi index data array
    let indxBf = c - 1
    let indxAf = c + 1
    const Bf = b[indxBf]
    const Af = b[indxAf]
    console.log(c)
    console.log(`emoji sebelum emoji 👨🏽 adalah ${Bf}`)
    console.log(`emoji setelah emoji 👨🏽 adalah ${Af}`)
}else{
    console.log("emoji tidak ada")
}

let arrayB = [10, '❤️', '👨🏾', '😂', 'saya', {angka : function(){console.log("1, 2, 3")}}, [10, 'halo']]//array campuran

arrayB[5].angka()// memanggil function dalam array
console.log(arrayB[0])
console.log(arrayB[6])//memanggil array dalam array
console.log(arrayB[6][0])

// merge array / meggabungkan array

let s = [10, 5, 8, 9]
let c = [5, 8, 0, 24]

const mergeArray = s.concat(c) //concat menggabungkan array
console.log(mergeArray)

/*for (list of mergeArray)//memecah array yang menghasilkan urutan dari isi array
    console.log(list)

for (i in mergeArray) console.log(i)// menghasilkan index dari array nya
*/
mergeArray.map((value, index)=> console.log(value, index)) // menampilkan isi array dan juga indexnya

const data = [
    { nama: "Andi", usia: 25, jenisKelamin: "Laki-laki" },
    { nama: "Budi", usia: 30, jenisKelamin: "Laki-laki" },
    { nama: "Citra", usia: 27, jenisKelamin: "Perempuan" },
    { nama: "Dewi", usia: 22, jenisKelamin: "Perempuan" },
    { nama: "Eko", usia: 35, jenisKelamin: "Laki-laki" }
];
data.map((values)=>{console.log(values.nama)}) // menampilkan nama dari data dalam array
data.map((values)=>{console.log(values.nama, values.jenisKelamin)}) // menampilkan nama dan jenis kelamin dari data dalam array
// data.map((b)=>{console.log(b)})//menampilkan semua data dari array

data.sort((a, b)=>a.usia - b.usia).map((values)=>{console.log(values)})// menampilan data array dan mengurutkan berdasarkan usia
console.log('---------------------batas----------------------------')
data.filter((a)=>a.usia>=30).map((values)=>{console.log(values)})// memfilter hanya menampilkan yang usianya diatas atau sama dengan 30
console.log('---------------------batas----------------------------')
data
    .sort((s, x)=>s.usia-x.usia)
    .filter((v)=>v.usia>=25)
    .map((values)=>{console.log(values)})//mengurutkan dan memfilter hanya menampilkan yang usianya diatas atau sama dengan 25
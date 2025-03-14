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
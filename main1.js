document.title = 'belajar javascript' // mengubah elemen html melalui javascript

const body = document.body

const h1 = document.createElement('h1')
h1.textContent = '<marquee> nama saya tono</marquee>'// digunakan untuk menampikan teks murni tidak bisa tag html

const a = document.createElement('p')
a.innerHTML = '<marquee> nama saya tini </marquee>'// bisa menggunakan tag html

const b = document.createElement('b')
b.innerText = '<marquee> nama saya tana </marquee>'// tidak bisa menggunakan tag html tidak bisa menampilkan elemen tersembunyi

body.append(h1)
body.append(a)
body.append(b)

const helo = document.getElementById('helo')// menambahkan style css dari javascript
helo.style.textAlign = 'center'
helo.style.font = 'Poppins'

const teks = 'Hello World'


function test(){
    helo.style.background ='blue'//function merubah warna
}
function hover(){
    helo.textContent = 'HALO DUNIA'
}
function semula(){
    helo.textContent = teks
}

// membuat function ketika tombol disentuh mouse akan muncul text lalu ketika mouse keluar dari area tombol maka bg text berubah
const p = document.createElement('p')
p.textContent = "nama saya joni"
function munculText(){
    body.append(p)
}
function gantiBG(){
    p.style.background = 'aqua'
}
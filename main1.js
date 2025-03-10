document.title = 'belajar javascript' // mengubah elemen html melalui javascript

const body = document.body

const h1 = document.createElement('h1')
h1.textContent = '<marquee> nama saya tono</marquee>'// digunakan untuk menampikan teks murni tidak bisa tag html

const p = document.createElement('p')
p.innerHTML = '<marquee> nama saya tini </marquee>'// bisa menggunakan tag html

const b = document.createElement('b')
b.innerText = '<marquee> nama saya tana </marquee>'// tidak bisa menggunakan tag html tidak bisa menampilkan elemen tersembunyi

body.append(h1)
body.append(p)
body.append(b)
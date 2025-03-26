const token = Math.random()*999999
const data = ["apel", "melon", "jeruk"]
console.log(token)

function login(username){
    return {token, username}
}
function getUser(token){
    if(token) return {apiKey: "api12345"}
}
function getData(apiKey){
    if(apiKey) return data
}

const log = login("rama")
console.log(log)

const {apiKey} = getUser(log)
console.log(apiKey)

const dataUser = getData(apiKey)
console.log(dataUser)


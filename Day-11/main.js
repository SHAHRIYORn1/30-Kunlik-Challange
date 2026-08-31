const letters = ['A','B','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z','O‘','G‘','Sh','Ch','ng'];
let password = ""
let passwordTeg = document.querySelector('.password')

function absAdd(arr, qiymat) {
  let r = Math.floor(Math.random() * letters.length)  
  return qiymat += arr[r]
}

function sonAdd(qiymat) {
  let r = Math.floor(Math.random() * 10)  
  return qiymat += r.toString()
} 

function generete() {
    password = ""

    for (let i = 0; i < 12; i++) {
    let random = Math.floor(Math.random() * 2)

        if (random == 0) {
            password = absAdd(letters, password)
        }else{
            password = sonAdd(password)
        }
    }

    passwordTeg.textContent = "Password: " + password
}

function copy() {
    if (password != "") {
        navigator.clipboard.writeText(password)
        alert("Parol Copy bo'ldi...")
    }else{
        alert("Birinchi parol generatsiya qiling...")
    }
}
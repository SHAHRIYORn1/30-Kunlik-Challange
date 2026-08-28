const products = [
    {
        id: 1,
        name: "Apple",
        price: 2,
        count: 1
    },
    {
        id: 2,
        name: "Banan",
        price: 3,
        count: 1
    },
    {
        id: 3,
        name: "Limon",
        price: 1,
        count: 1
    },
    {
        id: 4,
        name: "WaterMelon",
        price: 5,
        count: 1
    }
]

let productContainer = document.querySelector('.products-container')
let added = document.querySelector('.added')
let total = document.querySelector('.total')
let cart = []

function render() {
    products.forEach(product => {
        let productCreated = document.createElement('div')

        productCreated.innerHTML = 
        `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addCart(${product.id})">Add Cart</button>
        `
        productContainer.appendChild(productCreated)
        
    });
}

render()

function addCart(id) {
    let currentProduct = products.find(product => product.id == id)
    let cartItem  = cart.find(product => product.id == id)
    if (cartItem) {
        cartItem.count++
    }else{
        cart.push(currentProduct)
    }

    renderCart()
    totalPrice()
}

function renderCart() {
    added.innerHTML = ''
    cart.forEach(c => {
    let p = document.createElement('p')
    p.textContent = `${c.name} x${c.count} $${c.count * c.price}`

    added.appendChild(p)
    })
}

function totalPrice() {
    let t = cart.reduce((summa, item) => summa + (item.count * item.price) ,0)
    total.textContent = `Total $${t}`
}
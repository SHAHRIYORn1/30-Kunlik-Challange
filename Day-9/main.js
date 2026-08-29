const products = ["Olma", "Banan", "Uzum", "Nok"]
let mahsulotlarContainer = document.querySelector('.mahsulotlar')
let input = document.querySelector('input')

function render(arr) {
    arr.forEach(product => {
        let p = document.createElement('p')

        p.textContent = product

        mahsulotlarContainer.appendChild(p)
    });
}

render(products)

input.addEventListener('input', () => {
    mahsulotlarContainer.innerHTML = ''
    let inpValue = input.value

    let newArr = products.filter(product => product.toLowerCase().includes(inpValue.toLowerCase()))

    render(newArr)
})
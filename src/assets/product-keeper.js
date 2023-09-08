const key = "products"

function getProducts() {
    return JSON.parse(localStorage.getItem(key) ?? '[]')
}

function setProducts(value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export { getProducts, setProducts };
const systemproduct = document.getElementById('systemproduct')
const viewmore = document.getElementById('viewmore')
const prokind = document.getElementById('prokind')
const sortedproducts = document.getElementById('sortedproducts')
const productform = document.getElementById('productform')
const customerEmail = document.getElementById('customerEmail')
const customerPassword = document.getElementById('customerPassword')

function getProducts() {
    let page = 1
    let limit = 3
   
    axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/products?page=${page}&limit=${limit}`)
    .then(res =>{
        products = res.data
        products.map(item => {
            let product = document.createElement('div')
            product.className = "proBox col-sm-12 col-md-12 col-lg-4 col-xl-4"
            product.innerHTML = `
            <img src="${item.image}" alt="">
            <p>"${item.name}"</p>
            <p>"${item.price}"</p>
            <button onclick="AddtoBasket(${item.id})">Add to cart</button>
            `
            systemproduct.appendChild(product)
        })
        page++
    })
}
getProducts();
viewmore.addEventListener('click',getProducts);

function AddtoBasket(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(products.find(item => item.id == id))
    localStorage.setItem('cart',JSON.stringify(cart))
}

function sortedProduct(){
    sortedproducts.innerHTML = ''
    systemproduct.style.display = 'none'
    sortedproducts.style.display = 'flex'
    let selectvalue = prokind.value 

    if(selectvalue === "1"){
        let page = 1
        let limit = 3
   
    axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/products?page=${page}&limit=${limit}`)
    .then(res =>{
        products = res.data
        let sortPro = products.sort((a,b) => a.price-b.price)
        sortPro.map(item => {
            let product = document.createElement('div')
            product.className = "proBox col-sm-12 col-md-12 col-lg-4 col-xl-4"
            product.innerHTML = `
            <img src="${item.image}" alt="">
            <p>"${item.name}"</p>
            <p>"${item.price}"</p>
            <button onclick="AddtoBasket(${item.id})">Add to cart</button>
            `
            sortedproducts.appendChild(product)
        })
        page++
    })
    }
}

prokind.addEventListener('change',sortedProduct)

function sortedProducts(){
    sortedproducts.innerHTML = ''
    systemproduct.style.display = 'none'
    sortedproducts.style.display = 'flex'
    let selectvalue = prokind.value 

    if(selectvalue === "2"){
        let page = 1
        let limit = 3
   
    axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/products?page=${page}&limit=${limit}`)
    .then(res =>{
        products = res.data
        let sortPro = products.sort((a,b) => b.price-a.price)
        sortPro.map(item => {
            let product = document.createElement('div')
            product.className = "proBox col-sm-12 col-md-12 col-lg-4 col-xl-4"
            product.innerHTML = `
            <img src="${item.image}" alt="">
            <p>"${item.name}"</p>
            <p>"${item.price}"</p>
            <button onclick="AddtoBasket(${item.id})">Add to cart</button>
            `
            sortedproducts.appendChild(product)
        })
        page++
    })
    }
}

prokind.addEventListener('change',sortedProducts)


productform.addEventListener('submit',function(event){
    event.preventDefault();
    axios.post('https://65680f2a9927836bd97406ef.mockapi.io/products',{
        customerEmail:customerEmail.value,
        customerPassword:customerPassword.value
})
})
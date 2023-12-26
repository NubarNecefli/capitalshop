const systemproducts = document.getElementById('systemproducts')

function getBasket(){
    systemproducts.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) =>{
        let removeproducts = document.createElement('div')
        removeproducts.className = 'removepro col-sm-12 col-md-12 col-lg-4 col-xl-4'
        removeproducts.innerHTML=`
        <img src="${item.image}" alt="">
        <p>"${item.name}"</p>
        <p>"${item.price}"</p>
        <button onclick="removefromBasket(${index})">Remove from cart</button>`
        systemproducts.appendChild(removeproducts)
    })
}
getBasket();

function removefromBasket(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()
}




// let form = document.getElementById("form");
// form.addEventListener("submit", formFunc)

// function formFunc(e){
//     e.preventDefault()
//     let inp = document.getElementById("inp");
//     let val = inp.value;
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     let data = cart.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()))
//     display(data)
// }




// const name = document.getElementById ('name');
// const surname = document.getElementById ('surname');
// const submit = document.getElementById ('myform');

// submit.addEventListener('submit', function (event) {
//   event.preventDefault();

//   fetch('https://65680f2a9927836bd97406ef.mockapi.io/products', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//    name:name.value,
//    surname:surname.value,
//    myform: myform.value,
//       }),
//   })
//   .then((response) => response.json()) 
//   .then(data =>{
//       console.log( data );
//   })
// })




// function updateData(id) {

//   console.log(id);
// }

// function deleteData(id) {
//   fetch(`https://65680f2a9927836bd97406ef.mockapi.io/products`, {
//       method: 'DELETE',
//   })
//       .then(response => response.json())
//       .then(data => {
//           console.log( data);
//           getAllData(); 
//       })
//       .catch(error => console.error('Error deleting data:', error));
//     }
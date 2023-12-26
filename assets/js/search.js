let form = document.getElementById("form");
form.addEventListener("submit", formFunc);
   
function formFunc(e) {
  e.preventDefault();
  let inp = document.getElementById("inp");
  let val = inp.value;

  
  fetch("https://65680f2a9927836bd97406ef.mockapi.io/products")
    .then(response => response.json())
    .then(data => {
      
      let cart = data || [];
      let filteredData = cart.filter(item => item.title.toLowerCase().includes(val.toLowerCase()));
      display(filteredData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function display(data) {
  console.log(data);
}


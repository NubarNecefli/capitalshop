const name = document.getElementById ('name');
const surname = document.getElementById ('surname');
const submit = document.getElementById ('myform');

submit.addEventListener('submit', function (event) {
  event.preventDefault();

  fetch('https://65680f2a9927836bd97406ef.mockapi.io/products', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
   name:name.value,
   surname:surname.value,
   myform: myform.value,
      }),
  })
  .then((response) => response.json()) 
  .then(data =>{
      console.log( data );
  })
})




function updateData(id) {

  console.log(id);
}

function deleteData(id) {
  fetch(`https://65680f2a9927836bd97406ef.mockapi.io/products`, {
      method: 'DELETE',
  })
      .then(response => response.json())
      .then(data => {
          console.log( data);
          getAllData(); 
      })
      .catch(error => console.error('Error deleting data:', error));
    }
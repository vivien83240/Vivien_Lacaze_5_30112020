function afficheProduit (){
    let panier = localStorage.getItem('panier');
    //let lentillesChoice = localStorage.getItem('lentilles');
    panier = JSON.parse(panier);
    //lentillesChoice = JSON.parse(lentillesChoice);
    let tabProduit = document.getElementById('tableau-produit');

    if (panier && tabProduit){
        tabProduit.innerHTML ='';
        Object.values(panier).map(product =>{
        tabProduit.innerHTML += `
            <tr>
                <td align="left" class="titre-produit"><img src="${product.imageUrl}" alt="Photo de camera - ${product.name}"> <span>${product.name}</span></td>
                <td> ${product.lenses} </td>
                <td>1</td>
                <td> ${product.price} € </td>
                <td><i class="fas fa-trash-alt" id="icon-suppr"></i></td>
            </tr>`
        });
    } else{
        tabProduit.innerHTML =`
        <tr>
            <td colspan="5">Il n'y a aucun produit dans votre panier</td>
        </tr>`
    }   
}

function prixTotal(){

    let prixTotal = localStorage.getItem('prixTotal');
    let total = document.getElementById('total');
    
    if (prixTotal && total){
        total.innerHTML = `
            <tr>
                <th colspan="5">SOUS-TOTAL &nbsp &nbsp &nbsp ${prixTotal} € </th>
            </tr>`
    } else{
        total.innerHTML =`
            <tr>
                <th colspan="5">SOUS-TOTAL &nbsp &nbsp &nbsp 0 € </th>
            </tr>`
    }   
}

afficheProduit();
prixTotal();


/*const form = document.getElementById("form");

const postForm = body => {
  return fetch('http://localhost:3000/api/cameras/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const body = JSON.stringify(Object.fromEntries(new FormData(e.target)));

  const res = await postForm(body);
  const data = await res.json();

  console.log(data.json);
};

form.addEventListener('submit', handleSubmit);*/



/*
async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
    return response.json();
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = form.action;
    console.log(url)
    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({ url, formData });
        console.log({ responseData });
    } catch (error) {
        console.error(error);
    }
}

let myForm = document.getElementById("form");
myForm.addEventListener('submit', handleFormSubmit);

*/


let form = document.getElementById("form");

form.addEventListener('submit', function (e) {   
    e.preventDefault();

    let data = new FormData(form);
    console.log(data.get('firstName'))

    let myContact = {
        firstName : data.get('firstName'),
        lastName : data.get('lastName'), 
        address : data.get('address'), 
        city : data.get('city'),
        email : data.get('email')
    }
    
    let myObject = {
        contact : myContact,
        products : [ '5be1ed3f1c9d44000030b061' ]
    }


    fetch('http://localhost:3000/api/cameras/order', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(myObject)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.error(error);
    })

});
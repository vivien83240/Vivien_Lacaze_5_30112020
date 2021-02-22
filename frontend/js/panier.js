let panier = localStorage.getItem('panier');
panier = JSON.parse(panier);

function afficheProduit (){
    //let panier = localStorage.getItem('panier');
    //panier = JSON.parse(panier);
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


let form = document.getElementById("form");

form.addEventListener('submit', function (e) {   
    e.preventDefault();

    let data = new FormData(form);

    let myContact = {
        firstName : data.get('firstName'),
        lastName : data.get('lastName'), 
        address : data.get('address'), 
        city : data.get('city'),
        email : data.get('email')
    }
    
    let myObject = {
        contact : myContact,
        products : panier
    }

    console.log(panier);

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



///////////////////   TABLEAU PANIER   ///////////////////

let panier = localStorage.getItem('panier');
panier = JSON.parse(panier);

function afficheProduit (){
    let tabProduit = document.getElementById('tableau-produit');

    if (panier && tabProduit){
        tabProduit.innerHTML ='';
        Object.values(panier).map(product =>{
        tabProduit.innerHTML += `
            <tr>
                <td align="left" class="titre-produit"><img src="${product.imageUrl}" alt="Photo de camera - ${product.name}"> <span>${product.name}</span></td>
                <td> ${product.lenses} </td>
                <td>1</td>
                <td> ${product.price / 100} € </td>
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


///////////////////   FORMULAIRE   ///////////////////


let form = document.getElementById("form");
let buttonForm = document.getElementById('form-button');

form.addEventListener('submit', function (e) {   
    e.preventDefault();
    
    if(verifInput() != null){
        console.log("Envoi autorisée !");
        sendForm();

        //sessionStorage.setItem("order", data);
        document.forms["form"].action = './confirmation-de-commande.html';

        //myContact = {};
        //products = [];
        //localStorage.clear();
    }else{
        console.log("Envoi échoué !");
    };
});

function verifInput() {
    let checkMessage = "";
    
    let firstNameForm = document.getElementById('firstName').value;
    let lastNameForm = document.getElementById('lastName').value;
    let addressForm = document.getElementById('address').value;
    let cityForm = document.getElementById('city').value;
    let emailForm = document.getElementById('email').value;

    let regexNumber = /[0-9]/;
    let regexSpecialCharacter = /[§!@#$%^&*(),.?":{}|<>]/;
    let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/y;

    
    if (regexNumber.test(firstNameForm) == true || regexSpecialCharacter.test(firstNameForm) == true || firstNameForm == ""){
        checkMessage = "Vérifier ou renseigner votre prénom";
    } else {
        console.log("Prénom : OK !");
    };

    if (regexNumber.test(lastNameForm) == true || regexSpecialCharacter.test(lastNameForm) == true || lastNameForm == ""){
        checkMessage = checkMessage + "\n" + "Vérifier ou renseigner votre nom";
    } else {
        console.log("Nom : OK !");
    };

    if (regexSpecialCharacter.test(addressForm) == true || addressForm == ""){
        checkMessage = checkMessage + "\n" + "Vérifier ou renseigner votre adresse";
    } else {
        console.log("Adresse : OK !");
    };

    if (regexNumber.test(cityForm) == true || regexSpecialCharacter.test(cityForm) == true || cityForm == ""){
        checkMessage = checkMessage + "\n" + "Vérifier ou renseigner votre ville";
    } else {
        console.log("Ville : OK !");
    };

    if (regexEmail.test(emailForm) == false){
        checkMessage = checkMessage + "\n" + "Vérifier ou renseigner votre email";
    } else {
        console.log("Email : OK !");
    };

    if (checkMessage != ""){
        alert("Il est nécessaire de :" + "\n" + checkMessage);
    }
    else{
        let myContact = {
            firstName : firstNameForm,
            lastName : lastNameForm,
            address : addressForm,
            city : cityForm,
            email : emailForm
        };
        console.log(myContact);
        return myContact;
    };
};

//function verifPanier(){
//
//};

function sendForm(){
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
        sessionStorage.setItem("order", JSON.stringify(data));
    }).catch(function (error) {
        console.error(error);
    })
};



//Récuperer l'id de l'url
const urlParams = new URLSearchParams(window.location.search)
const myIdProduit = urlParams.get('idProduit')

let url = 'http://localhost:3000/api/cameras/'+myIdProduit

fetch( url , {method: 'GET'})
.then((data) => {
    return data.json();
}).then((product) => {

    let produitImg = document.getElementById('produit__img');
    produitImg.innerHTML = `<img src="${product.imageUrl}" alt="Photo de camera - ${product.name}" />`

    let produitText = document.getElementById('produit__text');
    produitText.innerHTML = `<h1> ${product.name} </h1>
                            <div class="produit__text--prix"> ${product.price} € </div>
                            <p> ${product.description}</p>
                            <div class="produit__text--option">
                            Lentilles :
                                <select name="lenses" id="lenses">
                                </select>
                            </div>
                            <button class="addToCart" type="button"> Ajouter au panier </button>`

    let lenses_html = document.getElementById('lenses');
    
    product.lenses.forEach(lense =>{
        lenses_html.innerHTML += `<option value="${lense}">${lense}</option>`   
    });


    let addToCart = document.querySelectorAll(".addToCart");
    

    for (let i=0; i < addToCart.length; i++) {
        addToCart[i].addEventListener("click", () => {
            addProduits(product);
            prixTotal(product);
        })
    }

    function addProduits(product){

        let panier = localStorage.getItem('panier');
        panier = JSON.parse(panier);
        
        if (panier != null) {
            panier = {
                ...panier,
                [product.name]: product
            }  
        } else {
            panier = {
                [product.name]: product
            }
        } 

        localStorage.setItem('panier', JSON.stringify(panier));
    }

    function prixTotal(product){

        let panierTotal = localStorage.getItem('prixTotal');

        if (panierTotal != null) {
            panierTotal = parseInt(panierTotal);
            localStorage.setItem("prixTotal", panierTotal + product.price);
        } else {
            localStorage.setItem("prixTotal", product.price);
        } 
    }

})


// [
//     {"lenses":["35mm 1.4","50mm 1.6"],"_id":"5be1ed3f1c9d44000030b061","name":"Zurss 50S","price":49900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/vcam_1.jpg"},
//     {"lenses":["35mm 1.4","50mm 1.6"],"_id":"5be1ed3f1c9d44000030b061","name":"Zurss 50S","price":49900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/vcam_1.jpg"},
// ]


let elt = document.getElementById('produit');
console.log(elt)
elt.innerHTML =''

let myIdProduit = '5be1ed3f1c9d44000030b061'
let url = 'http://localhost:3000/api/cameras/'+myIdProduit

fetch( url , {method: 'GET'})
.then((data) => {
    return data.json();
}).then((product) => {
    console.log(product)
    console.log(product.name)
    console.log(product.imageUrl)

    //products.forEach(product =>{
    //    console.log(product.name)
    //    console.log(product.imageUrl)

        elt.innerHTML += `  <li class="produit__img">
                                <img src="${product.imageUrl}" alt="Photo de camera - ${product.name}" />
                            </li>
                            <li class="produit__text">
                                <h1> ${product.name} </h1>
                                <div class="produit__text--prix"> ${product.price} € </div>
                                <p> ${product.description}</p>
                                <div class="produit__text--option">Option</div>
                                <button class="" type="button"> Ajouter au panier </button>
                            </li>`
    //})
})
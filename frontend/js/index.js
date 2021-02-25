

let elt = document.getElementById('produits');
elt.innerHTML =''


fetch( 'http://localhost:3000/api/cameras/' , {method: 'GET'})
.then((data) => {
    return data.json();
}).then((products) => {
    console.log(products)
    products.forEach(product =>{

        elt.innerHTML += `<li>
                <a href="produit.html?idProduit=${product._id}">  
                <img src="${product.imageUrl}" alt="Photo de camera - ${product.name}" />
                <ul class="carte__ctn">
                    <li class="carte__ctn--text">
                        <h2> ${product.name} </h2>
                        <p> ${product.price / 100} € </p>
                    </li>
                    <li class="carte__ctn--panier">
                        <i class="fas fa-cart-arrow-down"></i>
                    </li> 
                </ul>                                             
                </a>           
            </li>`
    })

})
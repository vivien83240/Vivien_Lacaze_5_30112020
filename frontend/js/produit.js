

// let elt = document.getElementById('produits');
// console.log(elt)
// elt.innerHTML =''

// elt.innerHTML = 'Hello world';
let myIdProduit = '5be1ed3f1c9d44000030b061'
let url = 'http://localhost:3000/api/cameras/'+myIdProduit

fetch( url , {method: 'GET'})
.then((data) => {
    return data.json();
}).then((product) => {
    console.log(product)
    console.log(product.name)
    console.log(product.imageUrl)

    // products.forEach(product =>{
    //     console.log(product.name)
    //     console.log(product.imageUrl)

    //     elt.innerHTML += `<li>
    //             <a href="produit.html?idProduit=${product._id}">  
    //             <img src="${product.imageUrl}" alt="Photo de camera - ${product.name}" />
    //             <ul class="carte__ctn">
    //                 <li class="carte__ctn--text">
    //                     <h2> ${product.name} </h2>
    //                     <p> ${product.price} € </p>
    //                 </li>
    //                 <li class="carte__ctn--panier">
    //                     <i class="fas fa-cart-arrow-down"></i>
    //                 </li> 
    //             </ul>                                             
    //             </a>           
    //         </li>`
    // })

})
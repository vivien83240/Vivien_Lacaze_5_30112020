//Récuperer l'id de l'url
const urlParams = new URLSearchParams(window.location.search)
const myIdProduit = urlParams.get('idProduit')

let url = 'http://localhost:3000/api/cameras/'+myIdProduit

fetch( url , {method: 'GET'})
.then((data) => {
    return data.json();
}).then((product) => {

    let elt = document.getElementById('produit');
    elt.innerHTML = `  <li class="produit__img">
                            <img src="${product.imageUrl}" alt="Photo de camera - ${product.name}" />
                        </li>
                        <li class="produit__text">
                            <h1> ${product.name} </h1>
                            <div class="produit__text--prix"> ${product.price} € </div>
                            <p> ${product.description}</p>
                            <div class="produit__text--option">
                            Lentilles :
                                <select name="lenses" id="lenses">
                                </select>
                            </div>
                            <button class="" type="button"> Ajouter au panier </button>
                        </li>`

    let lenses_html = document.getElementById('lenses');
    
    product.lenses.forEach(lense =>{
        lenses_html.innerHTML += `<option value="${lense}">${lense}</option>`
    })

    // localStorage.setItem('panier', 'Mes produits');
    // let panier = localStorage.getItem('panier');
    // console.log(panier)

    // localStorage.removeItem('panier');
    // panier = localStorage.getItem('panier');
    // console.log(panier)

    // if(panier){
    //     console.log('j\'ai un panier')
    // }else{
    //     console.log('je n\'ai pas de panier')
    //     localStorage.clear();
    // }

})


// [
//     {"lenses":["35mm 1.4","50mm 1.6"],"_id":"5be1ed3f1c9d44000030b061","name":"Zurss 50S","price":49900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/vcam_1.jpg"},
//     {"lenses":["35mm 1.4","50mm 1.6"],"_id":"5be1ed3f1c9d44000030b061","name":"Zurss 50S","price":49900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/vcam_1.jpg"},
// ]
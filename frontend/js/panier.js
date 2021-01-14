
fetch( 'http://localhost:3000/api/cameras/' , {method: 'GET'})
.then((data) => {
    return data.json();
}).then((product) => {
   
    function afficheProduit (){
        let panier = localStorage.getItem('panier');
        panier = JSON.parse(panier);
        let tabProduit = document.getElementById('tableau-produit');

        if (panier && tabProduit){
            tabProduit.innerHTML ='';
            Object.values(panier).map(product =>{
                tabProduit.innerHTML += `
                <tr>
                    <td align="left"><img src="${product.imageUrl}" alt="Photo de camera - ${product.name}"> ${product.name}</td>
                    <td>1</td>
                    <td> ${product.price} € </td>
                    <td><i class="fas fa-trash-alt"></i></td>
                </tr>`
            });
        } else{
            tabProduit.innerHTML =`
            <tr>
                <td colspan="4">Il n'y a aucun produit dans votre panier</td>
            </tr>`
        }   
    }

    afficheProduit();

})
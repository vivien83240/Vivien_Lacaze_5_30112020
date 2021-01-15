
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
                    <td align="left" class="titre-produit"><img src="${product.imageUrl}" alt="Photo de camera - ${product.name}"> <span>${product.name}</span></td>
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

    function prixTotal(){

        let prixTotal = localStorage.getItem('prixTotal');
        let total = document.getElementById('total');
    
        if (prixTotal && total){
            total.innerHTML = `
                <tr>
                        <th colspan="4">SOUS-TOTAL &nbsp &nbsp &nbsp ${prixTotal} € </th>
                </tr>`
        } else{
            total.innerHTML =`
            <tr>
                        <th colspan="4">SOUS-TOTAL &nbsp &nbsp &nbsp 0 € </th>
            </tr>`
        }   
    }

    afficheProduit();
    prixTotal();

})
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


let elt = document.getElementById('test');
console.log(elt)

elt.innerHTML = 'Hello world';


fetch( 'http://localhost:3000/api/cameras/' , {method: 'GET'})
.then((data) => {
    return data.json();
}).then((products) => {
    console.log(products)

    products.forEach(product =>{
        console.log(product.name)
        console.log(product.imageUrl)

        elt.innerHTML += `<img width="200px" src="${product.imageUrl}">`; 
    })

})
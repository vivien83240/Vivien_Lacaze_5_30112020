
commandeOk();

function commandeOk(){

	if(sessionStorage.getItem("order") != null){
        let order = JSON.parse(sessionStorage.getItem("order"));
        let congrats = document.getElementById('congrats');
        congrats.innerHTML = '';
        congrats.innerHTML += `
            <h1>Félicitations ${order.contact.firstName} !<br/>
            Votre commande N° ${order.orderId} à été validé.
            </h1>
            <p>Votre commande sera expédiée prochainement.</p>`
        sessionStorage.removeItem("order");
    }else{
        alert("Vous n'avez pas passé de commande, vous allez être redirigé vers l'accueil.");
        document.location.href = "./index.html";
    };
};
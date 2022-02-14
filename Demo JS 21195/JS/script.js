
/*
var mon_formulaire= document.getElementById("mon_form");
mon_formulaire.addEventListener("submit",verif_form);



function verif_form(event){

    alert("Vous avez cliqué sur envoyer");
}

*/

var mon_formulaire= document.getElementById("envoi");
mon_formulaire.addEventListener("click",verif_form);


var nom_saisi= document.getElementById("nom");






var filtre_nom = new RegExp("^[a-z]+$");









function verif_form(event){

    //alert("Vous avez cliqué sur envoyer !!!!");
    

    ///////////////////////////////////////////////
    //vérification du nom
    ///////////////////////////////////////////////

    var resultat = filtre_nom.test(nom_saisi.value);

    //alert("resultat vaut :"+resultat);
    
    if(nom_saisi.value==""){

        alert("Veuillez renseigner votre nom !");

        event.preventDefault();

    }

    else if (!resultat){


        alert("Veuillez renseigner correctement votre nom !");
        event.preventDefault();
       

    }


    






































}
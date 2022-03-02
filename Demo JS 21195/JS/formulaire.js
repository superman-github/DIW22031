function VerifForm(event) {

    console.log("ok");

    var monnom = document.getElementById("nom").value;
    var monprenom = document.getElementById("prenom").value;
    var montel = document.getElementById("tel").value;

    var messageErreur = ""
    console.log(messageErreur);

    var test_texte = new RegExp("^[a-zA-Z -]+$");
    var testnom = test_texte.test(monnom);
    var testprenom = test_texte.test(monprenom);
    console.log(testnom);

    var test_tel = new RegExp("^[0]{1}[0-9]{1}[-.]?[0-9]{2}[-.]?[0-9]{2}[-.]?[0-9]{2}[-.]?[0-9]{2}+$");
    var testtel = test_tel.test(montel);
    console.log(testtel);

    if (monnom == "") {
        messageErreur = messageErreur + "Veuillez renseigner votre nom";
        // console.log(messageErreur);
    } else if (testnom == false) {
        messageErreur = messageErreur + "Veuillez renseigner correctement votre nom";
    }



    if (monprenom == "") {
        // alert("Veuillez renseigner votre prénom");
        messageErreur += "\nVeuillez renseigner votre prénom";
        // console.log(messageErreur);

    } else if (testprenom == false) {
        messageErreur = messageErreur + "Veuillez renseigner correctement votre prénom";
    }

    if (montel == "") {
        // alert("Veuillez renseigner votre tel");
        messageErreur += "\nVeuillez renseigner votre tel";
        // console.log(messageErreur);

    } else if (testtel == false) {
        messageErreur = messageErreur + "Veuillez renseigner correctement votre n° de téléphone";
    }

    if (messageErreur == "") {
        alert("ok");
    } else {
        alert(messageErreur);
        event.preventDefault();
    }
}

document.getElementById("mon_form").addEventListener("submit", VerifForm);

// équivaut à :
// document.getElementById("envoi").addEventListener("click", VerifForm);


document.getElementById("annuler").addEventListener("click", function(e) {

    var confirmation = confirm("Réinitialiser ce formulaire ?");
    console.log(confirmation);
    if (confirmation == false) {
        e.preventDefault();
        //document.getElementById("nom").value = "mon texte injecté en JS !"
    }
});
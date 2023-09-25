valider.addEventListener("click", () => {

    tentatives++;

    const valeurSaisie = parseInt(input.value);

    if (isNaN(valeurSaisie) || valeurSaisie < 1 || valeurSaisie > 100) {
        message.textContent = "Veuillez entrer un nombre entre 1 et 100.";
    } else {

        if (valeurSaisie === nombreMystere) {

            message.style.color = "green";
            message.textContent = "Gagné ! Le nombre mystère était " + nombreMystere;
            validerButton.textContent = "Rejouer ?";
            validerButton.disabled = false;
        } else if (tentatives === 6) {
   
            message.style.color = "red";
            message.textContent = "Perdu ! Le nombre mystère était " + nombreMystere;
            validerButton.textContent = "Rejouer ?";
            validerButton.disabled = false;
        } else {

            if (valeurSaisie < nombreMystere) {
                message.style.color = "blue";
                message.textContent = "Trop Petit !";
            } else {
                message.style.color = "blue";
                message.textContent = "Trop Grand !";
            }
        }
    }


    input.value = "";
});

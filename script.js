

// On attend que le HTML soit bien chargé
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".noura-form");
  const messageBox = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement

    // Récupération des valeurs
    const name = document.getElementById("name").value.trim();
    const menu = document.getElementById("menu").value;
    const msg = document.getElementById("message").value.trim();

    // Vérification simple
    if (name === "" || menu === "") {
      messageBox.textContent = "⚠️ Veuillez remplir tous les champs obligatoires.";
      messageBox.className = "error"; // applique le style rouge
      messageBox.style.display = "block";
      return;
    }

    // Message de succès
    messageBox.textContent = `✅ Merci ${name} ! Votre commande de "${menu.replace("_", " ")}" a été enregistrée.`;
    messageBox.className = "success"; // applique le style vert
    messageBox.style.display = "block";

    // Réinitialise le formulaire
    form.reset();

    // Cache le message après 6 secondes
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 6000);
  });
});

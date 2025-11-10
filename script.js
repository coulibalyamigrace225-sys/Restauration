document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".noura-form");
  const messageBox = document.getElementById("confirmation-message");
  const commandesUL = document.getElementById("commandes-ul");

  // Affiche toutes les commandes existantes
  function afficherCommandes() {
    const commandes = JSON.parse(localStorage.getItem("commandes")) || [];
    commandesUL.innerHTML = "";
    commandes.forEach((c, index) => {
      const li = document.createElement("li");
      li.style.border = "1px solid #ddd";
      li.style.padding = "10px";
      li.style.marginBottom = "10px";
      li.style.borderRadius = "8px";
      li.innerHTML = `<strong>${index + 1}. ${c.name}</strong> a commandé <em>"${c.menu.replace("_", " ")}"</em> pour le <strong>${c.date}</strong> à <strong>${c.time}</strong>.<br>Demandes spéciales : ${c.requests || "Aucune"}.<br>Email: ${c.email}, Tel: ${c.phone}`;
      commandesUL.appendChild(li);
    });
  }

  // Affiche les commandes au chargement
  afficherCommandes();

  // Gestion du submit du formulaire
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const menu = document.getElementById("menu").value;
    const requests = document.getElementById("requests").value.trim();

    if (name === "" || menu === "") {
      messageBox.textContent = "⚠️ Veuillez remplir tous les champs obligatoires.";
      messageBox.className = "error";
      messageBox.style.display = "block";
      return;
    }

    const commande = { name, email, phone, date, time, menu, requests };
    const commandes = JSON.parse(localStorage.getItem("commandes")) || [];
    commandes.push(commande);
    localStorage.setItem("commandes", JSON.stringify(commandes));

    messageBox.textContent = `✅ Merci ${name} ! Votre commande de "${menu.replace("_", " ")}" a été enregistrée.`;
    messageBox.className = "success";
    messageBox.style.display = "block";

    form.reset();
    afficherCommandes();

    setTimeout(() => {
      messageBox.style.display = "none";
    }, 6000);
  });
});

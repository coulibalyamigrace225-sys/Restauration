document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".noura-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement du formulaire
    envoyerWhatsApp(); // Appelle la fonction WhatsApp
  });

  window.envoyerWhatsApp = function() {
    // Récupération des valeurs du formulaire
    const nom = document.getElementById("name").value.trim();
    const telephone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const heure = document.getElementById("time").value;
    const demandes = document.getElementById("requests").value.trim();

    // Récupération de tous les plats sélectionnés
    const platsSelect = document.getElementById("menu");
    const platsChoisis = Array.from(platsSelect.selectedOptions).map(option => option.value);

    if (!nom || !telephone || platsChoisis.length === 0) {
      alert("⚠️ Veuillez remplir les champs obligatoires : nom, téléphone et au moins un plat.");
      return;
    }

    // Ajouter des emojis pour chaque plat
    const platsEmojis = {
      "tchep_poulet": "🍗 Tchep Poulet",
      "tchep_poisson": "🐟 Tchep Poisson",
      "tchep_viande": "🥩 Tchep Viande",
      "lak_onctueux": "🥣 Lak Onctueux",
      "vermicelles": "🍜 Vermicelles",
      "yassa": "🍛 Yassa Poulet"
    };

    const platsAvecEmoji = platsChoisis.map(plat => platsEmojis[plat] || plat).join("\n");

    // Création du message WhatsApp
    const message = `🛎️ *Nouvelle Commande*\n` +
                    `────────────────────\n` +
                    `👤 Nom: ${nom}\n` +
                    `📞 Téléphone: ${telephone}\n` +
                    `✉️ Email: ${email || "-"}\n` +
                    `📅 Date: ${date || "-"}\n` +
                    `⏰ Heure: ${heure || "-"}\n` +
                    `🍽️ Plats:\n${platsAvecEmoji}\n` +
                    `📝 Demandes: ${demandes || "-"}\n` +
                    `────────────────────\n` +
                    `Merci de confirmer la commande ! ✅`;

    // Remplace par ton numéro WhatsApp complet avec indicatif pays
    const numero = "2250709481800"; // <-- Mets ton numéro ici

    // Ouvre WhatsApp avec le message pré-rempli
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    // Réinitialise le formulaire
    form.reset();
  };
});

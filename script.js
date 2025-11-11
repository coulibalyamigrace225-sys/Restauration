document.addEventListener("DOMContentLoaded", function () {
  window.envoyerWhatsApp = function() {
    const nom = document.getElementById("name").value.trim();
    const telephone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const heure = document.getElementById("time").value;
    const demandes = document.getElementById("requests").value.trim();

    // Récupération des plats choisis via checkboxes
    const platsChoisis = Array.from(document.querySelectorAll('input[name="menu"]:checked')).map(cb => cb.value);

    if (!nom || !telephone || platsChoisis.length === 0) {
      alert("⚠️ Veuillez remplir les champs obligatoires : nom, téléphone et au moins un plat.");
      return;
    }

    const platsEmojis = {
      "tchep_poulet": "🍗 Tchep Poulet",
      "tchep_poisson": "🐟 Tchep Poisson",
      "tchep_viande": "🥩 Tchep Viande",
      "lak_onctueux": "🥣 Lak Onctueux",
      "vermicelles": "🍜 Vermicelles",
      "yassa": "🍛 Yassa Poulet"
    };

    const platsAvecEmoji = platsChoisis.map(plat => platsEmojis[plat] || plat).join("\n");

    // Message WhatsApp professionnel
    const message = `🛎️ *Nouvelle commande Mimi Restau*\n` +
                    `──────────────────────\n` +
                    `👤 Nom : ${nom}\n` +
                    `📞 Téléphone : ${telephone}\n` +
                    `✉️ Email : ${email || "-"}\n` +
                    `📅 Date : ${date || "-"}\n` +
                    `⏰ Heure : ${heure || "-"}\n` +
                    `🍽️ Plats commandés :\n${platsAvecEmoji}\n` +
                    `📝 Demandes spéciales : ${demandes || "-"}\n` +
                    `──────────────────────\n` +
                    `Merci de confirmer la commande !`;

    const numero = "2250709481800"; // <-- mets ton numéro WhatsApp ici
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };
});

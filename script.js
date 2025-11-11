function envoyerWhatsApp() {
  const nom = document.getElementById("name").value.trim();
  const tel = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const heure = document.getElementById("time").value;
  const demandes = document.getElementById("requests").value.trim();

  const plats = Array.from(document.querySelectorAll(".menu-item input:checked"))
    .map(p => p.value)
    .join(", ");

  if (!nom || !tel || plats.length === 0) {
    alert("⚠️ Veuillez remplir votre nom, téléphone et choisir au moins un plat.");
    return;
  }

  const message = `🍽️ *Nouvelle Commande - Mimi Restau*\n` +
                  `────────────────────\n` +
                  `👤 *Nom:* ${nom}\n` +
                  `📞 *Téléphone:* ${tel}\n` +
                  `📅 *Date:* ${date || "-"}\n` +
                  `⏰ *Heure:* ${heure || "-"}\n` +
                  `🥗 *Plats sélectionnés:* ${plats}\n` +
                  `📝 *Demandes spéciales:* ${demandes || "Aucune"}\n` +
                  `────────────────────\n` +
                  `Merci pour votre confiance 💛`;

  const numero = "2250709481800"; // Mets ton numéro WhatsApp ici
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Ouvrir la boîte d'aide
function openHelp() {
    document.getElementById("helpModal").style.display = "block";
}

// Fermer la boîte d'aide
function closeHelp() {
    document.getElementById("helpModal").style.display = "none";
}

// Fermer si on clique en dehors de la boîte
window.onclick = function (event) {
    let modal = document.getElementById("helpModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Fonction pour envoyer un email
function sendEmail() {
    let userMessage = document.getElementById("userQuestion").value;

    if (userMessage.trim() === "") {
        alert("Veuillez entrer une question avant d'envoyer.");
        return;
    }

    let email = "eco.challenge06400@gmail.com";
    let subject = "Demande d'aide depuis le site";
    let body = "Bonjour,\n\nVoici ma question :\n" + userMessage + "\n\nMerci d'avance !";

    // Ouvre l'application mail avec la demande pré-remplie
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Affiche le bouton quand on descend
window.onscroll = function () {
    let button = document.getElementById("topButton");
    if (document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Fonction pour remonter en haut
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


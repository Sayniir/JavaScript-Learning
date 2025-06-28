document.getElementById("crackForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const pwd = document.getElementById("password").value;
    const resultDiv = document.getElementById("result");

    // Affiche l’animation "Cracking en cours..." + barre de progression
    resultDiv.innerHTML = `
        <div id="status">Cracking en cours<span id="dots">...</span></div>
        <div class="progress-bar">
            <div class="progress-bar-fill" id="progressFill"></div>
        </div>
    `;

    // Animation des points "..."
    let dotCount = 0;
    const dotAnim = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        document.getElementById("dots").textContent = ".".repeat(dotCount);
    }, 400);

    // Animation de la barre de progression (fictive)
    const fill = document.getElementById("progressFill");
    let percent = 0;
    const progressAnim = setInterval(() => {
        percent = (percent + 1) % 101;
        fill.style.width = percent + "%";
    }, 50);

    // Envoie la requête au backend
    const response = await fetch("/crack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd })
    });

    const data = await response.json();

    // Arrête les animations
    clearInterval(dotAnim);
    clearInterval(progressAnim);

    // Affiche le résultat final
    resultDiv.innerHTML = `
        ✅ Mot de passe trouvé : <strong>${data.result}</strong><br>
        🕒 Temps : <strong>${data.time}</strong> secondes<br>
        🔁 Tentatives : <strong>${data.attempts}</strong>
    `;
});

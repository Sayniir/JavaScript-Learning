const charset = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789&@#~_--+*/!?";
const resultDiv = document.getElementById("result");
const form = document.getElementById("passwordForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const target = document.getElementById("password").value;
    resultDiv.innerHTML = "Cracking password...";
    setTimeout(() => {
        bruteForceCrack(target);
    }, 100); // Permet de laisser le temps d'afficher "Cracking password..."
});

function* generateCombos(length, prefix = "") {
    if (length === 0) {
        yield prefix;
    } else {
        for (let i = 0; i < charset.length; i++) {
            yield* generateCombos(length - 1, prefix + charset[i]);
        }
    }
}

function bruteForceCrack(target) {
    const startTime = Date.now();
    let attempts = 0;

    for (let length = 1; length <= target.length; length++) {
        const generator = generateCombos(length);
        for (const guess of generator) {
            attempts++;
            if (guess === target) {
                const endTime = Date.now();
                const duration = ((endTime - startTime) / 1000).toFixed(3);
                resultDiv.innerHTML = `
                    <p><strong>Password cracked:</strong> ${guess}</p>
                    <p><strong>Attempts:</strong> ${attempts}</p>
                    <p><strong>Time taken:</strong> ${duration} seconds</p>
                `;
                return;
            }
        }
    }

    resultDiv.innerHTML = "<p>Password not found (max length reached)</p>";
}

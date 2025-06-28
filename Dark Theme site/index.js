const toggel = document.getElementById("toggle-theme");
const link = document.getElementById("style");


toggel.onclick = function() {
    if(toggel.textContent === "Dark Theme") {
        toggel.textContent = "Light Theme";
        link.href = "dark-style.css";
    } else if(toggel.textContent === "Light Theme") {
        toggel.textContent = "Dark Theme";
        link.href = "style.css";
    }
}

function UpdateClock(){

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

UpdateClock();
setInterval(UpdateClock, 1000);
function rollDice() {
    const number = document.getElementById("number").value;
    const DiceResult = document.getElementById("dice-result");
    const DiceImages = document.getElementById("dice-images");
    const values = [];
    const images = [];

    for(let i = 0; i < number; i++){
        const value = Math.floor(Math.random()*6)+1
        values.push(value);
        images.push(`<img src="Dice-Faces/${value}.svg" alt>`);
    }

    DiceResult.textContent = `dice : ${values.join(', ')}`;

    DiceImages.innerHTML = images.join('')
}
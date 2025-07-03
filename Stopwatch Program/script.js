const display = document.getElementById('display');
const button = document.getElementById('start');
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;
button.classList.add('start');



function start(){

    if(!isRunning){
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isRunning = true;
        button.classList.remove('start');
        button.classList.add('stop');
        button.textContent = 'Stop';

    }
    else{
    clearInterval(timer);
    elapsedtime = Date.now() - starttime;
    isRunning = false; 
    button.classList.remove('stop');
    button.classList.add('start');
    button.textContent = 'Start';

}

}


function reset(){
    clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isRunning = false;
    display.textContent = '00:00:00.00';
    button.classList.remove('stop');
    button.classList.add('start');
    button.textContent = 'Start';
}

function update(){
    const currentTime = Date.now();
    elapsedtime = currentTime - starttime;
    
    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedtime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedtime / 1000) % 60);
    let milliseconds = Math.floor((elapsedtime % 1000) / 10);

    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
}


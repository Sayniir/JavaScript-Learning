const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        const result = parseFloat(eval(display.value).toFixed(4));
        display.value = result;
    }
    catch(error){
        display.value = "Error"
    }
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

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
        if(display.value === "Infinity"){
            display.value = "Cannot divide by 0"
        }
    }
    catch(error){
        display.value = "Error"
    }
}

function deleteLast(){
    if(display.value === "Error"){
        display.value = "Error"
    }
    else{
        display.value = display.value.slice(0, -1);
    }
    
}

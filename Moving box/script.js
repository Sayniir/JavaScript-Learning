const mybox = document.getElementById("mybox")
const moveamount = 10;

let x =0;
let y =0;

document.addEventListener("keydown", event=>{
  if(event.key.startsWith("Arrow")){
    switch(event.key){
      case "ArrowUp":
        y -= moveamount;
        break;
      case "ArrowDown":
        y += moveamount;
        break;
      case "ArrowLeft":
        x -= moveamount;
        break;
      case "ArrowRight":
        x += moveamount;
        break;

    }
    mybox.style.top =`${y}px`;
    mybox.style.left =`${x}px`;
  }
})

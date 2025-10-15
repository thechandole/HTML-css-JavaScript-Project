const buttons = document.querySelectorAll(".color-box");
const BoD = document.querySelector("body");

buttons.forEach((item)=>{
    
    item.addEventListener("click",function(e){
        if (e.target.id === "grey") {
            BoD.style.background = e.target.id
        }
        if (e.target.id === "green") {
            BoD.style.background = e.target.id
        }
        if (e.target.id === "blue") {
            BoD.style.background = e.target.id
        }
        if (e.target.id === "yellow") {
            BoD.style.background = e.target.id
        }

    

    });
});





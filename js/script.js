
const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", ()=>{
    hundlrMenu();
});

function hundlrMenu(){
menu.classList.toggle("is-active");
actions.classList.toggle("is-active");
}
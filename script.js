//Scroll navbar highlight
window.scroll(() => {
        
})

//Left navbar script
let open = false;
function moveNavbar() {
    if(open) {
        document.querySelector('nav').style.left = "-200px";
        open = false;
    }else {
        document.querySelector('nav').style.left = "0px";
        open = true;
    }
}
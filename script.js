//Left navbar script
let debounce = false;
function moveNavbar() {
    if(debounce) {
        document.querySelector('nav').style.left = "-200px";
        debounce = false;
    }else {
        document.querySelector('nav').style.left = "0px";
        debounce = true;
    }
}
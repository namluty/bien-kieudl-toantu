function upArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 200 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 200 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 200 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 200 + 'px';
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 65:
            leftArrowPressed();
            break;
        case 68:
            rightArrowPressed();
            break;
        case 86:
            upArrowPressed();
            break;
        case 83:
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
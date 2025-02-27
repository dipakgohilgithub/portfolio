

// stop right click 
document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);
 

// <!-- // stop CTRL + U (for view page source code) -->

document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 85 )) {
        return false;
    }
}; 
// <!-- // stop CTRL + SHIFT + I (for mobile screen) -->

window.onload = function() {
    window.document.body.onkeydown = function() {
        if (event.ctrlKey) {
            event.stopPropagation();
            event.preventDefault();
            try {
                event.keyCode = 0;
            }
            catch (event) {

            }
            return false;
        }
        return true;
    }
}


// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    // disable F12 key
    if(e.keyCode == 123) {
        return false;
    }

    // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        return false;
    }

    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}

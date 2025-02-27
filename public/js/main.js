
// include Header and Footer
function includeHeaderFooter(elementId, filePath) {
    // Fetch the content from the external file
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Insert the fetched HTML content into the specified element
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error("Error including file:", error);
        });
}


// hide and show header toggler button....................
function navTogglerBtn() {
    var showId = document.querySelector('.header-responsive-list-items');

    if(showId.style.display === 'none') {
        showId.style.display = 'block';
    } else {
        showId.style.display = 'none';
    }
}


// text changer timer
var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "PHP - LARAVEL Developer", "Backend Developer", "Web Developer"],
    typespeed: 80,
    backspeed: 80,
    backDelay: 1000,
    loop: true,
});


// copy btn for code copy in coding page 
function copyCode(snippetId) {
    const codeToCopy = document.getElementById(snippetId).innerText.trim();
    const el = document.createElement('textarea');
    el.value = codeToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    const copyBtn = document.querySelector(`.copy-btn[onclick="copyCode('${snippetId}')"]`);
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied';
    setTimeout(function () {
        copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
    }, 2000);
}

//  all animation run this init and link tag....................
AOS.init();
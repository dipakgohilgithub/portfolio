

// header toggler button hide-show....................
function navTogglerBtn() {
    var showId = document.querySelector('.header-responsive-list-items');

    if(showId.style.display === 'none') {
        showId.style.display = 'block';
    } else {
        showId.style.display = 'none';
    }
}

// skill-experience-education show-hide....................
function hideShow(section,element) {
    document.querySelectorAll(".content").forEach(div => {
        div.style.display = "none";
    });
    document.getElementById(section).style.display = "block";
    document.querySelectorAll(".skill-list ul li").forEach(li => {
        li.classList.remove("active");
    });
    element.classList.add("active");
}

//  all animation run this init and link tag....................
AOS.init();


// hide and show section using href link with id....................
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none'); 

    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetSection = document.getElementById(hash);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }
});
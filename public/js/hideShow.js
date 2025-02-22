
// skill-experience-education show-hide
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

// header taggle button hide-show
function navTogglerBtn() {
    var showId = document.querySelector('.header-responsive-list-items');

    if(showId.style.display === 'none') {
        showId.style.display = 'block';
    } else {
        showId.style.display = 'none';
    }
}
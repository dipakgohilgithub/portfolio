
var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "PHP - LARAVEL Developer", "Backend Developer", "Web Developer"],
    typespeed: 80,
    backspeed: 80,
    backDelay: 1000,
    loop: true,
});


// animation tab

const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        //To remove active class from previous tab
        tabs.forEach(tab => tab.classList.remove("active"));

        tab.classList.add("active");

        //to show content according to tab selected

        // To hide previous tab content
        contents.forEach(c => c.classList.remove("active"));
        contents[index].classList.add("active");
    });
});


//button

const button = document.querySelector('button');

button.addEventListener('click', () => {
    button.classList.add('active');
});
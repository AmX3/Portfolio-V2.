const navigation = document.querySelector(".navbar");
const link = document.getElementById("link");

window.onscroll = function () {
    var top = window.scrollY;
    return top > 35
        ? navigation.classList.add("change-color")
        : navigation.classList.remove("change-color");
};

function updateCurrentYear() {
    const present = new Date();
    const year = present.getFullYear();
    document.getElementById("currentYear").innerHTML = year;
}
updateCurrentYear();

const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        links.forEach((link) => link.classList.remove("active-link"));
        e.target.classList.add("active-link");
    });
});

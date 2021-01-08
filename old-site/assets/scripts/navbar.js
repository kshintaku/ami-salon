// Opening the side menu when in tablet/mobile view
function toggleNav() {
    if (document.getElementById("nav-icon").className === "") {
        document.getElementById("nav-icon").className = "open";
        document.getElementById("side-nav").style.width = "72%";
    } else {
        document.getElementById("nav-icon").className = "";
        document.getElementById("side-nav").style.width = "0";
    }
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.backgroundColor = "transparent";
    } else {
        document.getElementById("navbar").style.backgroundColor = "rgba(190, 190, 190, 0.8)";
    }
    prevScrollpos = currentScrollPos;
};

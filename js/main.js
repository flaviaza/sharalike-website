/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openMenu() {
    var x = document.getElementById("menu");
    if (x.className === "unstyled menu") {
        x.className += " responsive";
    } else {
        x.className = "unstyled menu";
    }
}

function smartSelection() {
    var x = document.getElementById("smart_sel");
    if (x.className === "section-photo-grid") {
        x.className += " enabled";
    } else {
        x.className = "section-photo-grid";
    }
}
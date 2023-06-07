/* ===== menú hamburguesa | navbar versión mobile/ table =====*/

function menuMobile() {
    var x = document.getElementById("linksMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
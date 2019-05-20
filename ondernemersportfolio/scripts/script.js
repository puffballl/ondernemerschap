window.onscroll = function() {stick()};

let header = document.getElementById("nav");
let sticky = header.offsetTop;

function stick() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

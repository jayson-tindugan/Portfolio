/* scroll to top */
const mybutton = document.getElementById("goTop");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const modal = document.querySelector("#modal");
const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");

openModal.addEventListener("click", () => {
    modal.showModal();
});
closeModal.addEventListener("click", () => {
    modal.close();
});

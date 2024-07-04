document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    });

    const lanches = document.querySelectorAll(".lanche");

    lanches.forEach(lanche => {
        lanche.addEventListener("click", function() {
            const name = lanche.getAttribute("data-name");
            const price = lanche.getAttribute("data-price");
            const image = lanche.getAttribute("data-image");
            window.location.href = `compra.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`;
        });
    });
});

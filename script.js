const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.innerHTML = `
            <i class="fa-solid fa-sun"></i>
            Modo claro
        `;
    } else {
        themeButton.innerHTML = `
            <i class="fa-solid fa-moon"></i>
            Mudar tema
        `;
    }
});
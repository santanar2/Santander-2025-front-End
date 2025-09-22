const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light");
    } else {
        rootHtml.setAttribute("data-theme", "dark");
    }

    // troca o ícone
    toggleTheme.classList.toggle("bi-moon-stars");
    toggleTheme.classList.toggle("bi-brightness-high-fill");
}

// adiciona evento de clique
toggleTheme.addEventListener("click", changeTheme);

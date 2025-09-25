// =======================
// Tema Claro / Escuro
// =======================
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

toggleTheme.addEventListener("click", changeTheme);

// =======================
// Accordion Cursos
// =======================
const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains("active");
        isActive
            ? accordionItem.classList.remove("active")
            : accordionItem.classList.add("active");
    });
});

// =======================
// Menu Lateral / Mobile - Ativar link
// =======================
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

// =======================
// NOTA: Menu do topo já funciona com <a href="#id">
// Não precisa de JS extra!
// =======================

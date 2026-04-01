// src/scripts/theme.ts

export const initTheme = (): void => {
  const btns =
    document.querySelectorAll<HTMLButtonElement>(".theme-toggle-btn");

  btns.forEach((btn) => {
    // IMPORTANTE: En Astro, al usar View Transitions o navegar,
    // a veces los eventos se duplican. Clonamos para limpiar.
    const parent = btn.parentElement;
    if (!parent) return;

    const newBtn = btn.cloneNode(true) as HTMLButtonElement;
    parent.replaceChild(newBtn, btn);

    newBtn.addEventListener("click", () => {
      const root = document.documentElement;

      // Prioridad: 1. Atributo actual, 2. LocalStorage, 3. Sistema
      const currentTheme =
        root.getAttribute("data-theme") ??
        localStorage.getItem("theme") ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      const newTheme = currentTheme === "dark" ? "light" : "dark";

      root.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  });
};

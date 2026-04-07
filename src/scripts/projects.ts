export const initProjects = () => {
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterBtns.length === 0 || projectCards.length === 0) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      // 1. Gestionar estados visuales de los botones
      filterBtns.forEach((b) => {
        b.classList.remove(
          "active-filter",
          "bg-cyan",
          "text-slate-950",
          "shadow-[0_0_15px_rgba(0,193,253,0.3)]",
        );
        b.classList.add("text-slate-500", "dark:text-slate-400");

        // Ocultar el brillo interno de los no activos
        const glow = b.querySelector(".active-glow");
        if (glow) (glow as HTMLElement).style.opacity = "0";
      });

      // Activar el botón pulsado
      btn.classList.add(
        "active-filter",
        "bg-cyan",
        "text-slate-950",
        "shadow-[0_0_15px_rgba(0,193,253,0.3)]",
      );
      btn.classList.remove("text-slate-500", "dark:text-slate-400");

      const activeGlow = btn.querySelector(".active-glow");
      if (activeGlow) (activeGlow as HTMLElement).style.opacity = "1";

      // 2. Filtrado de las tarjetas con una pequeña animación de opacidad
      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        const htmlCard = card as HTMLElement;

        if (filter === "all" || category === filter) {
          htmlCard.style.display = "block";
          // Pequeño timeout para que la animación de entrada funcione
          setTimeout(() => {
            htmlCard.style.opacity = "1";
            htmlCard.style.transform = "translateY(0)";
          }, 10);
        } else {
          htmlCard.style.opacity = "0";
          htmlCard.style.transform = "translateY(10px)";
          setTimeout(() => {
            htmlCard.style.display = "none";
          }, 300); // Duración de la transición
        }
      });
    });
  });

  // Lógica de expansión móvil (se mantiene igual)
  projectCards.forEach((card) => {
    (card as HTMLElement).onclick = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) return; // Cambiado a 1024 para coincidir con tu CSS lg:
      if ((e.target as HTMLElement).closest("a")) return;
      const isExpanded = card.classList.contains("is-expanded");
      projectCards.forEach((c) => c.classList.remove("is-expanded"));
      if (!isExpanded) card.classList.add("is-expanded");
    };
  });
};

export const initProjects = () => {
  const track = document.getElementById("carousel-track") as HTMLElement | null;
  const nextBtn = document.getElementById("nextBtn") as HTMLElement | null;
  const prevBtn = document.getElementById("prevBtn") as HTMLElement | null;

  if (!track) return;

  // --- Carrusel ---
  if (nextBtn && prevBtn) {
    const getScrollAmount = () => {
      const firstItem = track.firstElementChild as HTMLElement;
      if (!firstItem) return 0;
      const style = window.getComputedStyle(track);
      const gap = parseInt(style.gap) || 32;
      return firstItem.offsetWidth + gap;
    };

    nextBtn.onclick = () => {
      track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    };

    prevBtn.onclick = () => {
      track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    };

    // Bucle infinito seamless
    track.onscroll = () => {
      const totalWidth = track.scrollWidth;
      const viewWidth = track.clientWidth;

      if (track.scrollLeft + viewWidth >= totalWidth - 5) {
        track.scrollTo({
          left: track.scrollLeft - totalWidth / 3,
          behavior: "instant",
        });
      } else if (track.scrollLeft <= 5) {
        track.scrollTo({
          left: track.scrollLeft + totalWidth / 3,
          behavior: "instant",
        });
      }
    };

    // Posicionamiento inicial en el bloque central
    requestAnimationFrame(() => {
      track.scrollLeft = track.scrollWidth / 3;
    });
  }

  // --- Desplegable (Mobile) ---
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    // Usamos click directamente en la tarjeta
    (card as HTMLElement).onclick = (e: MouseEvent) => {
      if (window.innerWidth >= 768) return;

      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button")) return;

      const isExpanded = card.classList.contains("is-expanded");

      cards.forEach((c) => c.classList.remove("is-expanded"));

      if (!isExpanded) {
        card.classList.add("is-expanded");
      }
    };
  });
};

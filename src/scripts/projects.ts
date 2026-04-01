export const initProjects = () => {
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterBtns.length === 0 || projectCards.length === 0) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      filterBtns.forEach((b) => {
        b.classList.remove(
          "border-cyan",
          "bg-cyan/10",
          "text-cyan",
          "shadow-lg",
          "scale-105",
        );
        b.classList.add(
          "border-slate-200",
          "dark:border-white/5",
          "bg-slate-50",
          "dark:bg-[#050b18]/60",
          "text-slate-500",
          "dark:text-slate-400",
        );
      });
      btn.classList.add(
        "border-cyan",
        "bg-cyan/10",
        "text-cyan",
        "shadow-lg",
        "scale-105",
      );
      btn.classList.remove(
        "border-slate-200",
        "dark:border-white/5",
        "bg-slate-50",
        "dark:bg-[#050b18]/60",
        "text-slate-500",
        "dark:text-slate-400",
      );

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          (card as HTMLElement).style.display = "block";
        } else {
          (card as HTMLElement).style.display = "none";
        }
      });
    });
  });

  projectCards.forEach((card) => {
    (card as HTMLElement).onclick = (e: MouseEvent) => {
      if (window.innerWidth >= 768) return;
      if ((e.target as HTMLElement).closest("a")) return;
      const isExpanded = card.classList.contains("is-expanded");
      projectCards.forEach((c) => c.classList.remove("is-expanded"));
      if (!isExpanded) card.classList.add("is-expanded");
    };
  });
};

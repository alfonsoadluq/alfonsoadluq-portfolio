export const initAbout = () => {
  const accordionItems = document.querySelectorAll(".stack-accordion-item");

  if (accordionItems.length === 0) return;

  accordionItems.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");

    if (trigger) {
      // Limpiamos eventos anteriores por si acaso
      const newTrigger = trigger.cloneNode(true);
      trigger.parentNode?.replaceChild(newTrigger, trigger);

      newTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        // Cerrar otros
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item) otherItem.classList.remove("is-active");
        });
        // Toggle actual
        item.classList.toggle("is-active");
      });
    }
  });
};

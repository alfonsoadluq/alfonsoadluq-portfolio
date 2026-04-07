export const initCursor = () => {
  const cursor = document.getElementById("cursor") as HTMLElement | null;

  if (!cursor || window.innerWidth < 1024) {
    if (cursor) cursor.style.display = "none";
    return;
  }

  const handleMouseMove = (e: MouseEvent) => {
    cursor.style.opacity = "0.8";
    cursor.style.setProperty("--x", `${e.clientX}px`);
    cursor.style.setProperty("--y", `${e.clientY}px`);
  };

  const handleMouseLeave = () => {
    cursor.style.opacity = "0";
  };

  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseleave", handleMouseLeave);

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseleave", handleMouseLeave);
};

  document.addEventListener("astro:page-load", () => {
  initCursor();
});
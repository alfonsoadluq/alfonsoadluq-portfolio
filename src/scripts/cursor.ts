export const initCursor = () => {
  const cursor = document.getElementById("cursor") as HTMLElement | null;
  if (!cursor || window.innerWidth < 1024) return;

  const handleMouseMove = (e: MouseEvent) => {
    cursor.style.opacity = "1";
    cursor.style.setProperty("--x", `${e.clientX}px`);
    cursor.style.setProperty("--y", `${e.clientY}px`);
  };

  const handleMouseLeave = () => {
    cursor.style.opacity = "0";
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseleave", handleMouseLeave);
};

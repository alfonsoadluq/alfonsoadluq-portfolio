import { initCursor } from "./cursor.ts";
import { initHeader } from "./header.ts";
import { initWelcome } from "./welcome.ts";
import { initProjects } from "./projects.ts";
import { initAbout } from "./about.ts";

let isInitialized = false;

const initAll = () => {
  if (isInitialized && !document.querySelector("[data-astro-transition]"))
    return;

  initCursor();
  initHeader();
  initWelcome();
  initProjects();
  initAbout();

  isInitialized = true;
};

// Iniciar en carga inicial
initAll();

document.addEventListener("astro:page-load", initAll);
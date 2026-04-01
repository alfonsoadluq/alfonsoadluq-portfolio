import { initCursor } from "./cursor.ts";
import { initHeader } from "./header.ts";
import { initWelcome } from "./welcome.ts";
import { initExperience } from "./experience.ts";
import { initExperienceMobile } from "./experience.ts";
import { initProjects } from "./projects.ts";
import { initAbout } from "./about.ts";
import { initTheme } from "./theme.ts";

let isInitialized = false;

const initAll = () => {
  if (isInitialized && !document.querySelector("[data-astro-transition]"))
    return;

  initCursor();
  initHeader();
  initWelcome();
  initExperience();
  initExperienceMobile();
  initProjects();
  initAbout();
  initTheme();

  isInitialized = true;
};

initAll();

document.addEventListener("astro:page-load", initAll);
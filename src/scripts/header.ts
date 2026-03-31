export const initHeader = () => {
  const nav = document.getElementById("main-nav") as HTMLElement | null;
  const logoBox = document.getElementById("logo-box") as HTMLElement | null;
  const logoImage = document.getElementById("logo-image") as HTMLElement | null;
  const mobileSidebar = document.getElementById(
    "mobile-sidebar",
  ) as HTMLElement | null;
  const mobileBackdrop = document.getElementById(
    "mobile-backdrop",
  ) as HTMLElement | null;
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (!nav) return;

  const topClasses = ["bg-transparent", "border-transparent", "h-[72px]"];
  const pillClasses = [
    "bg-white/10",
    "dark:bg-[#030712]/60",
    "backdrop-blur-xl",
    "border-gray-200/20",
    "dark:border-white/10",
    "shadow-2xl",
    "h-[56px]",
  ];

  const updateUI = () => {
    const isScrolled = window.scrollY > 20;
    requestAnimationFrame(() => {
      if (!isScrolled) {
        nav.classList.replace("duration-[250ms]", "duration-[650ms]");
        nav.classList.remove(...pillClasses, "max-w-[680px]");
        nav.classList.add(...topClasses, "max-w-[700px]");
        logoImage?.classList.remove("scale-[0.85]");
      } else {
        nav.classList.replace("duration-[650ms]", "duration-[250ms]");
        nav.classList.remove(...topClasses, "max-w-[700px]");
        nav.classList.add(...pillClasses, "max-w-[680px]");
        logoImage?.classList.add("scale-[0.85]");
      }
    });
  };

  window.addEventListener("scroll", updateUI);

  // Menú Móvil
  const openMenu = () => {
    mobileSidebar?.classList.add("menu-open");
    mobileBackdrop?.classList.replace("opacity-0", "opacity-100");
    mobileBackdrop?.classList.replace(
      "pointer-events-none",
      "pointer-events-auto",
    );
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    mobileSidebar?.classList.remove("menu-open");
    mobileBackdrop?.classList.replace("opacity-100", "opacity-0");
    mobileBackdrop?.classList.replace(
      "pointer-events-auto",
      "pointer-events-none",
    );
    document.body.style.overflow = "";
  };

  mobileMenuBtn?.addEventListener("click", openMenu);
  closeMenuBtn?.addEventListener("click", closeMenu);
  mobileBackdrop?.addEventListener("click", closeMenu);
  mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

  updateUI();
};
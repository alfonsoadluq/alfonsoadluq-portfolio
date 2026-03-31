export const initWelcome = () => {
  const typewriter = document.getElementById("typewriter");
  const logo3d = document.getElementById("logo-3d");

  if (typewriter) {
    const words = JSON.parse(typewriter.getAttribute("data-words") || "[]");
    let wordIndex = 0,
      charIndex = 0,
      isDeleting = false,
      lastTime = 0,
      accumulatedTime = 0;

    const animate = (currentTime: number) => {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      accumulatedTime += deltaTime;

      const currentWord = words[wordIndex];
      const currentInterval = isDeleting
        ? 30
        : charIndex === currentWord.length
          ? 2500
          : 60;

      if (accumulatedTime >= currentInterval) {
        accumulatedTime = 0;
        if (!isDeleting && charIndex === currentWord.length) isDeleting = true;
        else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
        isDeleting ? charIndex-- : charIndex++;
        typewriter.textContent = currentWord.substring(0, charIndex);
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  if (logo3d) {
    document.addEventListener("mousemove", (e) => {
      const rotateY = (e.clientX / window.innerWidth - 0.5) * 30;
      const rotateX = (e.clientY / window.innerHeight - 0.5) * -30;
      logo3d.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }
};

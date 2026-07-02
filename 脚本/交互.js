const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  document.querySelectorAll(".磁吸目标").forEach((element) => {
    const strength = 24;

    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      element.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
    });

    element.addEventListener("pointerleave", () => {
      element.style.transform = "translate3d(0, 0, 0)";
    });
  });

  document.querySelectorAll(".悬停预览视频").forEach((video) => {
    const card = video.closest("a") || video.parentElement;
    if (!card) return;

    card.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    card.addEventListener("focusin", () => {
      video.play().catch(() => {});
    });

    card.addEventListener("focusout", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

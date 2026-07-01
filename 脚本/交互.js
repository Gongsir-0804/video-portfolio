const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
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

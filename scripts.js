// scripts.js - optimized boot sequence and new-user popup logic
document.addEventListener('DOMContentLoaded', () => {
  const boot = document.getElementById('boot');
  const app = document.getElementById('app');
  const welcomeModal = document.getElementById('welcomeModal');
  const takeTour = document.getElementById('takeTour');
  const dismiss = document.getElementById('dismiss');

  // Boot animation optimization:
  // Show boot for a minimum visible time but allow early cancellation if assets ready.
  // Using requestAnimationFrame timekeeping to avoid jank.
  let bootStart = performance.now();
  const MIN_BOOT = 700; // milliseconds — short and snappy
  const SAFE_MAX = 3500; // fail-safe maximum
  let forcedHide = false;

  function hideBoot() {
    // Smooth fade out and reveal app
    boot.style.opacity = '0';
    setTimeout(() => {
      boot.style.visibility = 'hidden';
      boot.classList.add('hidden');
      app.classList.remove('hidden');
    }, 360);
  }

  // Simulate assets-ready check; in real app you'd wait for actual resources
  // but keep it responsive and non-blocking.
  function assetsReady() {
    // placeholder for real checks (fonts, critical data)
    return true;
  }

  function endBootIfReady() {
    const elapsed = performance.now() - bootStart;
    if (assetsReady() && elapsed >= MIN_BOOT) {
      hideBoot();
      showWelcomeIfNeeded();
    } else if (elapsed >= SAFE_MAX) {
      // fallback in case something weird happens
      hideBoot();
      showWelcomeIfNeeded();
    } else {
      // continue checking on next RAF tick to stay non-blocking
      requestAnimationFrame(endBootIfReady);
    }
  }

  requestAnimationFrame(endBootIfReady);

  // Welcome popup logic: show only for first-time visitors
  function showWelcomeIfNeeded() {
    try {
      const seen = localStorage.getItem('equations_seen_v1');
      if (!seen) {
        welcomeModal.classList.remove('hidden');
        // prevent tab focus leaks
        document.body.style.overflow = 'hidden';
        // mark as seen so it won't show again
        localStorage.setItem('equations_seen_v1', Date.now().toString());
      }
    } catch (e) {
      // If storage is unavailable (privacy mode), be conservative: show once per session
      if (!sessionStorage.getItem('equations_seen_session')) {
        welcomeModal.classList.remove('hidden');
        sessionStorage.setItem('equations_seen_session', '1');
      }
    }
  }

  function closeModal() {
    welcomeModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  takeTour.addEventListener('click', () => {
    closeModal();
    // In-app quick tour placeholder: scroll to features
    document.querySelector('.hero')?.scrollIntoView({behavior:'smooth'});
  });
  dismiss.addEventListener('click', () => {
    closeModal();
  });

  // Accessibility: allow ESC to dismiss modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!welcomeModal.classList.contains('hidden')) closeModal();
    }
  });

  // If user reloads before MIN_BOOT, ensure boot hides after MIN_BOOT
  setTimeout(() => {
    if (!boot.classList.contains('hidden')) {
      hideBoot();
      showWelcomeIfNeeded();
    }
  }, SAFE_MAX + 200);
});

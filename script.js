// ============================================================
// Mobile nav toggle
// ============================================================
const navToggle = document.getElementById('navToggle');
const tabs = document.getElementById('tabs');

navToggle.addEventListener('click', () => {
  const isOpen = tabs.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

tabs.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    tabs.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================================
// Active tab highlighting on scroll
// ============================================================
const sections = document.querySelectorAll('main section[id]');
const tabLinks = document.querySelectorAll('.tab[data-tab]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tabLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
);
sections.forEach((section) => observer.observe(section));

// ============================================================
// Experience filter
// ============================================================
const filterButtons = document.querySelectorAll('.filter-btn');
const entries = document.querySelectorAll('.entry');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const filter = btn.dataset.filter;
    entries.forEach((entry) => {
      const match = filter === 'all' || entry.dataset.cat === filter;
      entry.classList.toggle('is-hidden', !match);
    });
  });
});



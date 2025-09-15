const LINKEDIN_URL = 'https://www.linkedin.com/company/haxtack/';

const challengeLink = document.getElementById('challenge-link');
if (challengeLink) {
  if (LINKEDIN_URL && LINKEDIN_URL.startsWith('http')) {
    challengeLink.href = LINKEDIN_URL;
  }
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
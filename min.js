// ── Burger menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── Snowflakes
const flakesContainer = document.getElementById('flakes');
const flakeChars = ['❄', '❅', '❆', '✦', '·'];
for (let i = 0; i < 28; i++) {
  const f = document.createElement('div');
  f.className = 'flake';
  f.textContent = flakeChars[Math.floor(Math.random() * flakeChars.length)];
  f.style.left = Math.random() * 100 + '%';
  f.style.fontSize = (0.8 + Math.random() * 1.4) + 'rem';
  f.style.animationDuration = (6 + Math.random() * 12) + 's';
  f.style.animationDelay = (Math.random() * 10) + 's';
  f.style.opacity = (0.05 + Math.random() * 0.18);
  flakesContainer.appendChild(f);
}

// ── Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));
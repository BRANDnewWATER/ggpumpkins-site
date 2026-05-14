/* Mobile nav toggle — bulletproof version */
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.nav-links');
  
  if (!btn || !nav) {
    console.warn('Mobile menu elements not found');
    return;
  }

  btn.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('open');
    
    const isOpen = nav.classList.contains('open');
    btn.setAttribute('aria-expanded', isOpen);
    
    // Optional: change hamburger icon
    btn.textContent = isOpen ? '✕' : '☰';
  });

  // Close menu when clicking a link
  nav.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '☰';
    });
  });
  
  // Close menu if user clicks outside
  document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && !btn.contains(e.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '☰';
    }
  });
});
// === HONEST URGENCY ENGINE ===
// No fake counters. No fabricated bookings. Real scarcity only.
(function() {
  'use strict';

  // Config — REAL booking open date
  const BOOKING_OPEN_DATE = new Date('2026-08-01T08:00:00-04:00');

  // Real countdown timer to booking open
  function updateCountdown() {
    const now = new Date();
    const diff = BOOKING_OPEN_DATE - now;

    if (diff <= 0) {
      document.querySelectorAll('#cd-days, #cd-hours, #cd-mins, #cd-secs').forEach(el => {
        if (el) el.textContent = '00';
      });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const d = document.getElementById('cd-days');
    const h = document.getElementById('cd-hours');
    const m = document.getElementById('cd-mins');
    const s = document.getElementById('cd-secs');
    if (d) d.textContent = String(days).padStart(2, '0');
    if (h) h.textContent = String(hours).padStart(2, '0');
    if (m) m.textContent = String(mins).padStart(2, '0');
    if (s) s.textContent = String(secs).padStart(2, '0');
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // HONEST SCARCITY CONTEXT:
  // Booking closes October 10th. After that, customers wait until next fall.
  // We communicate this through clear deadline messaging, not fabricated numbers.

})();

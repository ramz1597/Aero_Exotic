/*
  Basic client‑side interactions for the AeroExotic website.

  This script implements a simple reveal on scroll using the
  IntersectionObserver API. Elements with the class `.reveal` will
  gradually fade in and move up as they enter the viewport. To make a
  section or element reveal on scroll, apply the `.reveal` class in the
  HTML or dynamically in this script.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements that should reveal on scroll. If needed, extend
  // this selector to include additional classes.
  const revealElements = document.querySelectorAll('.service-card, .why-item, .gallery-item, .process-steps li, .testimonial, .faq-item');

  // Add the `reveal` class to each selected element initially so they're
  // hidden by default in CSS.
  revealElements.forEach(el => {
    el.classList.add('reveal');
  });

  // Create the observer. It adds the `visible` class when the element
  // enters the viewport and removes it when it leaves (optional).
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
});
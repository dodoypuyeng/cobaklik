const now = new Date();
const year = now.getFullYear();
const copyright = document.querySelector('footer p');
if (copyright) {
  copyright.textContent = `© ${year} Romance Breeze. Desain web romantis untuk momen istimewa.`;
}

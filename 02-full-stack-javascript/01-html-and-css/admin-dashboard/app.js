const sidebar = document.querySelector('aside');
const closeBtn = document.querySelector('#close-btn');
const openBtn = document.querySelector('#open-btn');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

openBtn.addEventListener(
  'click',
  () => (sidebar.style.transform = 'translate(0)')
);

closeBtn.addEventListener(
  'click',
  () => (sidebar.style.transform = 'translate(-100%)')
);

sidebarLinks.forEach((link) =>
  link.addEventListener(
    'click',
    () => (sidebar.style.transform = 'translate(-100%)')
  )
);

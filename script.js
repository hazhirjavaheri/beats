const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`پیام از وب‌سایت ضربان: ${data.get('subject')}`);
  const body = encodeURIComponent(
    `نام: ${data.get('name')}\nراه ارتباطی: ${data.get('reply')}\n\n${data.get('message')}`
  );
  // نشانی مقصد پس از تعیین ایمیل رسمی مجموعه باید جایگزین شود.
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});

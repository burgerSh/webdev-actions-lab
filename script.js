// ---------- Exercise 3a: ปุ่ม Say Hello เปลี่ยนข้อความวน ----------
const messages = [
  'Hello from GitHub Pages!',
  'สวัสดีครับ! เว็บนี้ Deploy อัตโนมัติด้วย GitHub Actions',
  'แก้โค้ด → push → เว็บอัปเดตเอง'
];
let msgIndex = 0;

document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
});

// ---------- Exercise 3b: Toggle Theme (จำค่าไว้ในเบราว์เซอร์) ----------
const themeBtn = document.querySelector('#themeBtn');

function applyTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  themeBtn.textContent = isDark ? '☀️ Light mode' : '🌙 Dark mode';
  themeBtn.setAttribute('aria-pressed', String(isDark));
}

let saved = false;
try { saved = localStorage.getItem('theme') === 'dark'; } catch (e) {}
applyTheme(saved);

themeBtn.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark');
  applyTheme(isDark);
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
});

// ---------- Pipeline: ไล่ติ๊กถูกทีละขั้นตอนตอนโหลดหน้า ----------
const steps = document.querySelectorAll('.pipeline li');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

steps.forEach((li, i) => {
  setTimeout(() => li.classList.add('done'), reduce ? 0 : 500 + i * 450);
});

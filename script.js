// referrer check (anti bypass)
// Referrer-Check
if (!document.referrer.includes("linkvertise.com")) {
  document.body.innerHTML = 'Bypass Detected, Please just go through the Linkvertise.';
  throw new Error('Referrer invalid');
}

// Bot-Check
const ua = navigator.userAgent;
if (/bot|crawl|spider|curl|wget|python/i.test(ua)) {
  document.body.innerHTML = '<h2>Zugriff verweigert. 🤖</h2>';
  throw new Error('Bot blocked');
}

// Countdown + Redirect
let sec = 7;
const cd = document.getElementById('countdown');
const interval = setInterval(() => {
  sec--;
  cd.textContent = sec > 0 ? `${sec} Sekunden...` : 'Weiterleitung...';
  if (sec <= 0) {
    clearInterval(interval);
    window.location.href = 'https://linkvertise.com/1346287/stealthwarekey1?o=sharing';
  }
}, 1000);

// Sterne generieren
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let w, h, stars = [];

function init() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  stars = Array.from({length: 150}, () => ({
    x: Math.random()*w,
    y: Math.random()*h,
    size: Math.random()*1.2+0.3,
    speed: Math.random()*0.5+0.2
  }));
}
function update() {
  ctx.clearRect(0, 0, w, h);
  stars.forEach(s => {
    s.y -= s.speed;
    if (s.y < 0) s.y = h;
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(update);
}
window.addEventListener('resize', init);
init();
update();

document.body.innerHTML = `
  <div style="color:white; text-align:center; margin-top:20%; font-size: 4em;">
    <h1>Bypass Detected</h1>
    <p>Please just go through the Linkvertise.</p>
  </div>`;

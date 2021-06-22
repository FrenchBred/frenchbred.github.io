const counter = document.querySelector('#counter');
const bred = document.querySelector('#bred');

const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
);

if(getCookieValue('points') == '') document.cookie = 'points=0';
if(getCookieValue('pointsPerClick') == '') document.cookie = 'pointsPerClick=1'; 

window.onload = function() {
  counter.innerHTML = `French Breds:<br>${getCookieValue('points')}`;
}

setInterval(() => {
  const bredWidth = Number(getComputedStyle(bred).width.split('px')[0]);
  bred.style.height = `${bredWidth}px`;
}, 1000 / 15);

// szpla tu spi
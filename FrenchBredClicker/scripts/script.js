// FRENCH BRED
const counter = document.querySelector('#counter');
const bred = document.querySelector('#bred');

let points = 0;

function pop(e) {
  points++;
  for (let i = 0; i < 3; i++) {
    createParticle(e.clientX, e.clientY, e.target.dataset.type);
  }
}

setInterval(() => {
  const bredWidth = Number(getComputedStyle(bred).width.split('px')[0]);
  bred.style.height = `${bredWidth}px`;
  counter.innerHTML = `French Breds:<br>${points}`;
}, 1000/60);

// szpla tu spi
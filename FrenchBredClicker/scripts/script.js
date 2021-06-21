
const counter = document.querySelector('#counter');
const bred = document.querySelector('#bred');

let player = {
  points: 0,
  pointsPerClick: 1
}

function pop(e) {
  player.points++;
  for (let i = 0; i < 1 * player.pointsPerClick; i++) {
    createParticle(e.clientX, e.clientY, e.target.dataset.type);
  }
}

setInterval(() => {
  const bredWidth = Number(getComputedStyle(bred).width.split('px')[0]);
  bred.style.height = `${bredWidth}px`;
  counter.innerHTML = `French Breds:<br>${player.points.get()}`;
}, 1000/60);
// szpla tu spi

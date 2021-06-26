function addPoint() {
  document.cookie = `points=${+getCookieValue('points') + +getCookieValue('pointsPerClick')}`
  counter.innerHTML = `French Breds:<br>${getCookieValue('points')}`;
}

function pop(e) {
  for (let i = 0; i < 1 * +getCookieValue('pointsPerClick'); i++) {
    createParticle(e.clientX, e.clientY, e.target.dataset.type);
  }
}

bred.addEventListener('click', (e) => {
  pop(e);
  addPoint();
});
function createParticle(x, y) {
  const particleContainer = document.querySelector('#particleContainer');
  let particle = document.createElement('particle');
  particleContainer.appendChild(particle);

  let size = Math.floor(Math.random() * 20 + 50);

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  const recoil = 2;
  const destX = x + (Math.random() - 0.5) * 2 * 75 * recoil;
  const destY = y + (Math.random() - 0.5) * 2 * 75 * recoil;

  particle.style.backgroundImage = `url("images/bred.png")`;
  particle.style.backgroundSize = `cover`;
  

  const animation = particle.animate(
    [
      {
        transform: `translate(${x - size / 2}px, ${y - size / 2}px) rotate(${Math.floor(Math.random() * 360)}deg)`,
        opacity: 1,
      },
      {
        transform: `translate(${destX}px, ${destY}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 500 + Math.floor(Math.random() * 1000),
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: Math.random() * 200,
    }
  );

  animation.onfinish = (e) => { e.target.effect.target.remove(); };
}
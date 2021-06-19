var points = 0;
var counter = document.querySelector('#counter');
var bred = document.querySelector('#bred');

counter.innerText = `French Breds: ${points}`;

function addPoint() {
  counter.innerText = `French Breds: ${++points}`;
  console.log(`Points: ${points}`);
};

document.addEventListener('keyup', (event) => {
  if(event.key === " ") {
    addPoint();
  };
});

bred.addEventListener('click', addPoint);

function pop(e) {
  for (let i = 0; i < 3; i++) {
    createParticle(e.clientX, e.clientY, e.target.dataset.type);
  }
}

function createParticle(x, y, type) {
  var particle = document.createElement("particle");
  document.body.appendChild(particle);

  var size = Math.floor(Math.random() * 20 + 50);

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  var recoil = 2;
  var destinationX = x + (Math.random() - 0.5) * 2 * 75 * recoil;
  var destinationY = y + (Math.random() - 0.5) * 2 * 75 * recoil;

  particle.style.backgroundImage = `url("https://images.emojiterra.com/google/android-11/512px/1f956.png")`;
  particle.style.backgroundSize = `cover`;
  

  var animation = particle.animate(
    [
      {
        transform: `translate(${x - size / 2}px, ${y - size / 2}px) rotate(${Math.floor(Math.random() * 360)}deg)`,
        opacity: 1,
      },
      {
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 500 + Math.random() * 1000,
      easing: "cubic-bezier(0, .9, .57, 1)",
      delay: Math.random() * 200,
    }
  );

  animation.onfinish = () => {
    particle.removeParticle;
  };
}

function removeParticle(e) {
  e.srcElement.effect.target.remove();
}

// szpla tu spi
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

// szpla tu spi
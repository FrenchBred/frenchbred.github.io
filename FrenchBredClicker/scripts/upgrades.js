const closeButton = document.querySelector('#closeButton');
const upgradeMenu = document.querySelector('#upgrades');

closeButton.addEventListener('click', (e) => {
  upgradeMenu.classList.toggle('open');
})
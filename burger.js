let burgers = document.querySelectorAll('.burger');

[].forEach.call(burgers, burger => {
  burger.addEventListener('click', () => {
    burger.classList.toggle('collapsed');
    burger.parentNode.classList.toggle('open');
  });
});

bred.addEventListener('mousedown', (e) => {
  bred.classList.add('clicked');
  pop(e);
});

bred.addEventListener('mouseup', (e) => {
  bred.classList.remove('clicked');
});

bred.addEventListener('mouseleave', (e) => {
  bred.classList.remove('clicked');
});
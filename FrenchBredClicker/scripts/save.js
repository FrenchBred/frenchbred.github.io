const saveButton = document.querySelector('#save');
const delSaveButton = document.querySelector('#delSave');

const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

if(document.cookie != '') {
  player.points = Number(getCookieValue('points'));
}

function save() {
  document.cookie = `points=${player.points}`;
}

saveButton.addEventListener('click', () => {
  save();
  alert('Saved!');
});

delSaveButton.addEventListener('click', () => {
  if(!confirm('Do you want to reset your save?')) { return alert('Your save was not reset!'); }
  player.points = 0;
  save();
  alert('Your save was successfully reset!');
});


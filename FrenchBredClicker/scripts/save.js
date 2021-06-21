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
});

delSaveButton.addEventListener('click', () => {
  player.points = 0;
  save();
});


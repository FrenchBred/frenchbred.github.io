const saveButton = document.querySelector('#save');
const delSaveButton = document.querySelector('#delSave');

delSaveButton.addEventListener('click', () => {
  if(!confirm('Do you want to reset your save?')) { return alert('Your save was not reset!'); }
  document.cookie = `points=0`;
  document.cookie = `pointsPerClick=1`;
  counter.innerHTML = `French Breds:<br>${getCookieValue('points')}`;
  alert('Your save was successfully reset!');
});
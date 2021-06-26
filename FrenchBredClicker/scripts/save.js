const saveButton = document.querySelector('#save');
const delSaveButton = document.querySelector('#delSave');

const save = {
  reset: function() {
    if(!confirm('Do you want to reset your save?')) return;
    let upgrades = [];
    [].forEach.call(upgradeList.children, () => { upgrades.push(0); });
    document.cookie = `points=0`;
    document.cookie = `pointsPerClick=1`;
    document.cookie = `upgrade=${upgrades.join(',')}`
    counter.innerHTML = `French Breds:<br>${getCookieValue('points')}`;
  }
}

delSaveButton.addEventListener('click', () => {
  save.reset();
});
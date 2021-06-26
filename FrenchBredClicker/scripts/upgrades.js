const closeButton = document.querySelector('#closeButton');
const upgradeMenu = document.querySelector('#upgradesMenu');
const upgradeList = document.querySelector('#upgradeList');

$.getJSON('data/upgrades.json', (data) => {})
.done((data) => {
    upgradeLevels = [];
  data.forEach((el, id) => {
    let upgrade = document.createElement('div');
    upgrade.className = 'upgrade';

    if(getCookieValue('upgrade') != "") { 
      upgradeLevels = getCookieValue('upgrade').split(','); 
      upgradeLevels[id] = +upgradeLevels[id]; 
      el.level = +upgradeLevels[id];
    }

    if(!getCookieValue('upgrade').split(',')[id] || getCookieValue('upgrade').split(',')[1] == "NaN") { el.level = 0; }

    if(el.level == 0) { el.price = el.defaultprice; }
    if(el.level != 0) { el.price = el.defaultprice * (el.level + 1 * el.level + 1); }

    upgrade.innerHTML = `<div class="img"></div>
                         <div class="header">${el.title}</div>
                         <div class="desc">${el.description}</div>
                         <div class="price">${el.price}</div>
                         <div class="count">${el.level}</div>`;

    upgradeList.appendChild(upgrade);
    let price = upgrade.querySelector('.price');
    let count = upgrade.querySelector('.count');

    upgrade.querySelector('.img').style.backgroundImage = `url(${el.img})`;

    upgrade.addEventListener('click', () => {
      if(el.price > +getCookieValue('points')) return;
      
      document.cookie = `points=${+getCookieValue('points') - +el.price}`;

      el.price = el.defaultprice * (el.level + 1 * el.level + 1);

      price.innerHTML = el.price
      count.innerHTML = ++el.level;
      upgradeLevels[id] = el.level;
      
      eval(el.command);
      document.cookie = `upgrade=${upgradeLevels.join(',')}`;

      counter.innerHTML = `French Breds:<br>${getCookieValue('points')}`;
      price.innerHTML = el.price;
    });
  });
});

closeButton.addEventListener('click', (e) => {
  upgradeMenu.classList.toggle('open');
});


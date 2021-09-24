let items;
const menuList = document.querySelector('.menu .list');

async function httpGet(url) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    items = JSON.parse(xhr.response);
  }
  xhr.send();
  return xhr.response;
}

function getMenu() {
  if (items === undefined) { 
    setTimeout(getMenu, 0);
  } else { 
    setupMenu(items); 
  }
}

function setupMenu(items) {
  items.forEach(item => {
    if (!item.path 
        || (item.path.mode == 'whitelist' && document.location.pathname == item.path.name) 
        || (item.path.mode == 'blacklist' && document.location.pathname != item.path.name)) {
      let url = document.createElement('div');
      url.classList.add('item');
      url.innerHTML = item.text;
      url.setAttribute('href', item.href)

      url.addEventListener('click', () => {
        window.open(url.getAttribute('href'), item.target, item.args);
      });

      menuList.appendChild(url);
    }
  });
}

httpGet('/menu.json');
getMenu();
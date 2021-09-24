const cardHolder = document.querySelector('.cards');
var team;

const baseUrl = {
  discord: 'https://discord.com/users/',
  github: 'https://github.com/',
  steam: 'https://steamcommunity.com/profiles/',
  roblox: 'https://roblox.com/users/'
}

async function httpGet(url) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    team = JSON.parse(xhr.response);
  }
  xhr.send();
  return xhr.response;
}

function getTeam() {
  if (team === undefined) { setTimeout(getTeam, 0); } 
  else { loadTeam(team); }
}

function loadTeam(team) {
  team.forEach(member => {
    var card = document.createElement('div');
    card.classList.add('card');
    var avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = member.avatar;
    avatar.alt = member.name;

    var name = document.createElement('div');
    name.classList.add('title');
    name.classList.add('small');
    name.innerHTML = member.name;

    var desc = document.createElement('div');
    desc.classList.add('desc');
    desc.innerHTML = member.description;

    if (member.social) {
      var social = document.createElement('div');
      social.classList.add('social');
      
      for (const el in member.social) {
        let s = document.createElement('div');
        s.classList.add(el);
        s.setAttribute('href', baseUrl[el] + member.social[el]);

        s.addEventListener('click', () => {
          window.open(s.getAttribute('href'));
        });

        social.appendChild(s);
      }
    }

    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(desc);
    if(social) card.appendChild(social);
    cardHolder.appendChild(card);
  });
}

httpGet('team.json');
getTeam();
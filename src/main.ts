import './style.css';
import { Mob, Member } from './vite-env';
import { renderMembers, renderMobName } from './mobs';

const getBase = (path: string[]) => {
  // const baseUrl = 'https://mobster-backend-production.up.railway.app';
  const baseUrl = 'http://localhost:3000';
  return `${baseUrl}/${path.join('/')}`;
};

const main = document.querySelector('.main') as HTMLElement;

const getMobs = async () => {
  const mobs = await fetch(getBase(['mobs']));
  const data = mobs.json();
  return data;
};

// This is to generate the container for each mob
const populate = (name: string, id: string) => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = name;
  div.setAttribute('data-id', id);
  div.appendChild(p);
  div.addEventListener('click', function (_) {
    const id = this.getAttribute('data-id') as string;
    main.innerHTML = '';
    renderMobName(name);
    renderMembers(id);
  });
  main.appendChild(div);
};

// This generate a new container with input name and click add button
const createMob = (name: string) => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = name;
  div.appendChild(p);
  main.appendChild(p);
};

// Sending post request to the backend
const postMob = async (name: string) => {
  const url = getBase(['mobs']);
  await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobName: name }),
  });
};

// combining the createMob and sendPostRequest functions
const addMob = async() => {
  const input = document.querySelector('.addmob__input') as HTMLInputElement;
  const name = input.value;
  await postMob(name);
  createMob(name);
};

document.addEventListener('DOMContentLoaded', async () => {
  const mobs = await getMobs();
  mobs.forEach((mob: Mob) => {
    populate(mob.mobName, mob.id);
  });
});

// Creating new mob
const btn = document.querySelector('.addmob__button') as HTMLButtonElement;
btn.onclick = addMob;

export type { Member, Mob };
export { getBase };

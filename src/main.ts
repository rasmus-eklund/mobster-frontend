import './style.css';
import { Mob, Member } from './vite-env';

const getBase = (path: string[]) => {
  const baseUrl = 'https://mobster-backend-production.up.railway.app';
  return `${baseUrl}/${path.join('/')}`;
};

const main = document.getElementById('main') as HTMLElement;

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
  main.appendChild(div);
};

// This generate a new container with input name and click add button
const addMob = () => {
  const input = document.getElementById('aside__input') as HTMLInputElement;
  const name = input.value;
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = name;
  div.appendChild(p);
  main.appendChild(p);
};

// to go into the mob information
// const getMobInfo = async () => {
//   const mob = await fetch(
//     "https://mobster-backend-production.up.railway.app/mobs/"
//   );
//   // change the content in main, wait for the innerHTML content.
// };

document.addEventListener('DOMContentLoaded', async () => {
  const mobs = await getMobs();
  mobs.forEach((mob: Mob) => {
    populate(mob.mobName, mob.id);
  });
  console.log(mobs);
});

const btn = document.getElementById('aside__button') as HTMLButtonElement;
btn.onclick = addMob;

export type { Member, Mob };
export { getBase };

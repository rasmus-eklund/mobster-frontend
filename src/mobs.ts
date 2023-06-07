const baseUrl = 'https://mobster-backend-production.up.railway.app';
import { Member, Mob } from './main';

/* Create functions*/
const makeDivElement = document.createElement('div');
const makeParagraphElement = document.createElement('p');

/* Already in the DOM */
const htmlAside = document.getElementsByClassName('header__aside');

/* Api call */

const getData = async (id: string) => {
  const response = await fetch(`${baseUrl}/mobs/${id}`);
  const data: Mob = await response.json();
  return data;
};

const populate = async (id: string) => {
  const data = await getData(id);
  const makeDivElement = document.createElement('div');
  const makeParagraphElement = document.createElement('p');
  const populatePage = makeDivElement.appendChild(makeParagraphElement);
  makeParagraphElement.textContent = data.id;
  
 
};

import './style.css';
const baseUrl = 'https://mobster-backend-production.up.railway.app';
type Member = {
  name: string;
  id: string;
  height: number;
  mobName: string;
};

type Mob = {
  id: string;
  mobName: string;
  members: Member[];
};

const getMobs = async () => {
  const mobs = await fetch(`${baseUrl}/mobs`);
  const data = mobs.json();
  return data;
};

document.addEventListener('DOMContentLoaded', async () => {
  console.log('Loaded page.');
  const mobs = await getMobs();
  console.log(mobs);
  const p = document.getElementById('mobs') as HTMLParagraphElement;
  p.textContent = mobs.join();
});

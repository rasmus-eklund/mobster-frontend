import "./style.css";
const baseUrl = "https://mobster-backend-production.up.railway.app";
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

const main = document.getElementById("main") as HTMLElement;

const getMobs = async () => {
  const mobs = await fetch(`${baseUrl}/mobs`);
  const data = mobs.json();
  return data;
};

// add id as meta data in the
const addMob = () => {
  const input = document.getElementById("aside__input") as HTMLInputElement;
  const name = input.value;
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = name;
  div.appendChild(p);
  main.appendChild(p);
};

// to go into the mob information
const getMobInfo = async () => {
  const mob = await fetch(
    "https://mobster-backend-production.up.railway.app/mobs/"
  );
  // change the content in main, wait for the innerHTML content.
};

document.addEventListener("DOMContentLoaded", async () => {
  const mobs = await getMobs();
  const p = document.getElementById("mobs") as HTMLParagraphElement;
  p.textContent = mobs.join();
});

const btn = document.getElementById("aside__button") as HTMLButtonElement;
btn.onclick = addMob;

export type { Member, Mob };

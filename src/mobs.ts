import { getBase } from './main';
import { Member } from './vite-env';
// import { renderMember } from './member';

const makeMember = (member: Member) => {
  const section = `<section class = "member" data-id=${member.id}>
    <p>${member.name}</p>
    <p>${member.height}</p>
  </section>`;
  return section;
};
const makeMembers = function (members: Member[]) {
  let elements = '';
  members.forEach((member: Member) => {
    elements += makeMember(member);
  });
  return elements;
};

const renderMembers = async (mobId: string) => {
  const main = document.querySelector('.main') as HTMLElement;
  const response = await fetch(getBase(['mobs', mobId, 'members']));
  const members: Member[] = await response.json();
  const div = document.createElement('div');
  div.classList.add('main__members');
  div.innerHTML = makeMembers(members);
  main.appendChild(div);
};

const renderMobName = (name: string) => {
  const main = document.querySelector('.main') as HTMLElement;
  const nameContainer = document.createElement('h1') as HTMLHeadElement;
  nameContainer.textContent = name;
  main.appendChild(nameContainer);
};

export { renderMembers, renderMobName };

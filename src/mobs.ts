import { getBase } from "./main";
import { Member } from "./vite-env";
// import { renderMember } from './member';

const toggleElement = (selector: string) => {
  const element = document.querySelector(selector) as HTMLDivElement;
  return {
    show: () => {
      element.classList.remove("hidden");
    },
    hide: () => {
      element.classList.add("hidden");
    },
  };
};

const mob = toggleElement(".aside__addmob");
const member = toggleElement(".aside__addmember");

const makeMember = (member: Member) => {
  const section = `<section class = "member" data-id=${member.id}>
    <p>Name: ${member.name}</p>
    <p>Height: ${member.height}</p>
  </section>`;
  return section;
};
const makeMembers = function (members: Member[]) {
  let elements = "";
  members.forEach((member: Member) => {
    elements += makeMember(member);
  });
  return elements;
};

const renderMembers = async (mobId: string) => {
  mob.hide();
  member.show();
  const main = document.querySelector(".display_area") as HTMLElement;
  main.innerHTML = "";
  const response = await fetch(getBase(["mobs", mobId, "members"]));
  const members: Member[] = await response.json();
  const div = document.createElement("div");
  div.classList.add("main__members");
  div.innerHTML = makeMembers(members);
  main.appendChild(div);
  main.classList.add("display_area_members");
};

const renderMobName = (name: string, id: string) => {
  const main = document.querySelector(".display_area") as HTMLElement;
  const nameContainer = document.createElement("h1") as HTMLHeadElement;
  nameContainer.textContent = name;
  nameContainer.setAttribute("data-id", id);
  main.appendChild(nameContainer);
  nameContainer.classList.add("display_area_members");
};

export { renderMembers, renderMobName };

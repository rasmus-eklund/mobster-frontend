/// <reference types="vite/client" />

declare type Member = {
  name: string;
  id: string;
  height: number;
  mobName: string;
};

declare type Mob = {
  id: string;
  mobName: string;
  members: Member[];
};

export { Mob, Member };

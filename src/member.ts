import { getBase } from './main';

const renderMember = (id: string) => {
  console.log(id);
};

const addMember = async (
  body: { name: string; height: number },
  mobId: string
) => {
  const url = getBase(['mobs', mobId, 'members']);
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};

export { renderMember };

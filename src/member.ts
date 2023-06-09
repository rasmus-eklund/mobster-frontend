import { getBase } from './main';

const addMember = async (id: string) => {
  const name = document.querySelector(
    '.addmember__input_name'
  ) as HTMLInputElement;
  const height = document.querySelector(
    '.addmember__input_height'
  ) as HTMLInputElement;
  await postMember({ name: name.value, height: parseInt(height.value) }, id);
};

const postMember = async (
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

export { addMember };

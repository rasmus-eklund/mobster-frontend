const baseUrl = 'https://mobster-backend-production.up.railway.app';


/* Create functions*/
const makeDivElement = document.createElement('div');
const makeParagraphElement = document.createElement('p');

/* Already in the DOM */
const htmlAside = document.getElementsByClassName('header__aside');

/* Api call */

const getData = async (id) => {
    const data = await(`${baseUrl}/mobs/${id}`);
    return data
}



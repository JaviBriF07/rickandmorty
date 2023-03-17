
const URL = 'https://rickandmortyapi.com/api/character';

const getKoders = async () => {
  let response = await fetch(URL
  );
  let data = await response.json();
  return data;
};

const getCharacterById = (async (id) => {
  const response = await fetch(`${URL}/${id}`);
  const data = response.json();
  return data;
});
export { getKoders, getCharacterById }
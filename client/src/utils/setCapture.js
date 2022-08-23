import fetchData from "./fetchData";

const setCapture = async () => {
  const data = await fetchData('/pokemon');
  const pokemon = data.filter(item => item.userId === null)
  if (pokemon.length === 0) return;
  const randomNo = Math.floor(Math.random() * pokemon.length);
  const item = pokemon[randomNo];
  const storage = { id: item.id, name: item.name };
  localStorage.setItem('capture', JSON.stringify(storage));
}

export default setCapture;
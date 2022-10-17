
const screenSelector = document.querySelector(".screen");

function getEpisodes(urls) {
  const episodeNumbers = [];
  for (let i = 0; i < urls.length; i++) {
    const splitedUrl = urls[i].split("/");
    episodeNumbers.push(splitedUrl[splitedUrl.length - 1]);
  }
  return episodeNumbers;
}

function createCard(character) {
  const div = document.createElement("div");
  div.classList.add("card-container");
  const divImage = document.createElement("img");
  const divData = document.createElement("div");
  divData.classList.add("data");
  const divName = document.createElement("div");
  divName.classList.add("data-box", "names");
  const divStatus = document.createElement("div");
  divStatus.classList.add("data-box");
  const divSpecie = document.createElement("div");
  divSpecie.classList.add("data-box");
  const divEpisodes = document.createElement("div");
  divEpisodes.classList.add("episodes", "data-box");

  divImage.src = character.image;
  divName.textContent = character.name;
  divStatus.textContent = character.status;
  divSpecie.textContent = character.species;
  divEpisodes.textContent = getEpisodes(character.episode).join(", ");

  screenSelector.appendChild(div);
  div.appendChild(divImage);
  div.appendChild(divData);
  divData.appendChild(divName);
  divData.appendChild(divStatus);
  divData.appendChild(divSpecie);
  divData.appendChild(divEpisodes);
  console.log(divImage.src);
}

function createCardHTML() {

}

fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.results.length; i++) {
      const character = data.results[i];
      createCard(character);
    }
  });

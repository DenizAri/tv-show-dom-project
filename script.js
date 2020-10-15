<<<<<<< HEAD
/** @format */

//You can edit ALL of the code here

function setup() {
  // const allEpisodes = getAllEpisodes();
  getEpisode(82);
  const allShows = getAllShows();
  showSelector(allShows);
  // makePageForEpisodes(allEpisodes);
  // select(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("main");
  let html = "<ul> ";
  for (let i = 0; i < episodeList.length; i++) {
    html += `
  <li>
  <h2>${episodeList[i].name}-${formatSeason(
      episodeList[i].season,
      episodeList[i].number
    )}
  </h2> 
  <img src=${
    episodeList[i].image
      ? episodeList[i].image.medium
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg/200px-Tabby_cat_with_blue_eyes-3336579.jpg"
  }
  <p> ${episodeList[i].summary}
  </p>
  </li>
 `;
  }
  html += "</ul>";

  rootElem.innerHTML = html;
  console.log(episodeList);
}
function formatSeason(season, episode) {
  if (season < 10) {
    season = "0" + season;
  }
  if (episode < 10) {
    episode = "0" + episode;
  }
  return `S${season}E${episode}`;
}

let searchbox = document.getElementById("searchBox");
searchbox.addEventListener("keyup", function (event) {
  let searchinput = event.target.value.toLowerCase();
  search(searchinput);
});
function search(searchinput) {
  const allEpisodes = getAllEpisodes();
  let filterArray = allEpisodes.filter(function (item) {
    return (
      item.name.toLowerCase().includes(searchinput) ||
      item.summary.toLowerCase().includes(searchinput)
    );
  });

  rootElem = "";
  makePageForEpisodes(filterArray);
}

function showSelector(showList) {
  console.log(showList);
  let showSelector = document.getElementById("showSelector");
  for (let i = 0; i < showList.length; i++) {
    let option = document.createElement("option");
    text = document.createTextNode(showList[i].name);
    option.setAttribute("value", showList[i].id);
    option.appendChild(text);
    showSelector.insertBefore(option, showSelector.lastChild);
  }
}
let showSelectorElement = document.getElementById("showSelector");
showSelectorElement.addEventListener("change", function (event) {
  const id = event.target.value;
  getEpisode(id);
});

function select(episodeList) {
  let select = document.getElementById("episodes");
  for (let i = 0; i < episodeList.length; i++) {
    let option = document.createElement("option");
    text = document.createTextNode(
      ` S${episodeList[i].season}E${episodeList[i].number} - ${episodeList[i].name} `
    );
    option.setAttribute("value", episodeList[i].name);
    option.appendChild(text);
    select.insertBefore(option, select.lastChild);
  }
}

let selectBox = document.getElementById("episodes");
//const allEpisodes = getAllEpisodes ();
selectBox.addEventListener("change", function (e) {
  inputBox.value = "";
  if (e.target.value === "default") {
    rootElem.textContent = "";
    makePageForEpisodes(allEpisodes);
  } else {
    rootElem.textContent = "";
    let episodes = allEpisodes.filter(function (item) {
      return item.name === e.target.value;
    });
    makePageForEpisodes(episodes);
  }
});
function getEpisode(id) {
  fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      allEpisodes = data;
      makePageForEpisodes(allEpisodes);
      select(allEpisodes);
    })
    .catch((error) => {
      console.log(error);
    });
}

window.onload = setup;
=======
/** @format */

//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("main");
  let html = "<ul> ";
  for (let i = 0; i < episodeList.length; i++) {
    html += `
  <li>
  <h2>${episodeList[i].name}-${formatSeason(
      episodeList[i].season,
      episodeList[i].number
    )}
  </h2>
  <img src=${episodeList[i].image.medium}>
  <p> ${episodeList[i].summary}
  </p>
  </li>
 `;
  }
  html += "</ul>";

  rootElem.innerHTML = html;
  console.log(episodeList);
}
function formatSeason(season, episode) {
  if (season < 10) {
    season = "0" + season;
  }
  if (episode < 10) {
    episode = "0" + episode;
  }
  return `S${season}E${episode}`;
}

let searchbox = document.getElementById("searchBox");
searchbox.addEventListener("keyup", function (event) {
  let searchinput = event.target.value.toLowerCase();
  search(searchinput);
});
function search(searchinput) {
  const allEpisodes = getAllEpisodes();
  let filterArray = allEpisodes.filter(function (item) {
    return (
      item.name.toLowerCase().includes(searchinput) ||
      item.summary.toLowerCase().includes(searchinput)
    );
  });

  rootElem = "";
  makePageForEpisodes(filterArray);
}
window.onload = setup;
>>>>>>> a5960ba96f4de7373affe9efccf73d5f707a6717

const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");
const heroDiv = document.querySelector(".hero-img");
const sectionContainer = document.querySelector("section");
const bodyContainer = document.querySelector("body");
const emblemDiv = document.querySelector(".emblem");
const albumTitleSpan = document.querySelector(".album-title");
const cantorTitleSpan = document.querySelector(".cantor");
const texts = document.querySelectorAll(".text");
const albumNum = document.querySelector(".album-num");
const spotifyWidget = document.querySelector(".spotify-widget iframe");
const albums = [
  {
    album: "Amor Incendiário",
    cantor: "Yago Oproprio",
    emblem: "A vida é melhor com música",
    "bg-color": ["#696969", "#808080"],
    "accent-color": "#000000",
    url: "https://images.genius.com/57916dd990c77d7d956dc765977b59d8.640x640x1.jpg",
    spotify:
      "https://open.spotify.com/embed/track/67iXtoPnynomfHLEtcTC18?utm_source=generator",
  },
  {
    album: "Eai Gata",
    cantor: "MC Gabriel",
    emblem: "A vida é melhor com música",
    "bg-color": ["#8A2BE2", "#8B008B"],
    "accent-color": "#4B0082",
    url: "https://i.scdn.co/image/ab67616d0000b273fb7af5882a28a3684c09de87",
    spotify:
      "https://open.spotify.com/embed/track/3lKcckwqKSjzltS2y5IjcG?utm_source=generator",
  },
  {
    album: "Flamingos",
    cantor: "Baco Exu do Blues",
    emblem: "A vida é melhor com música",
    "bg-color": ["#BC8F8F", "#D2B48C"],
    "accent-color": "#8B4513",
    url: "https://i.scdn.co/image/ab67616d0000b27331760346883afec1e625c2ea",
    spotify:
      "https://open.spotify.com/embed/track/7wcDSsREsX9wn8P1iEdBgj?utm_source=generator",
  },
  {
    album: "Paradise City",
    cantor: "Guns N' Roses",
    emblem: "A vida é melhor com música",
    "bg-color": ["#000000", "#800000"],
    "accent-color": "#8B0000",
    url: "https://i.discogs.com/FxXfn_oAOmQwDxu0uIwi0yBHN75B5g5R7Fv47S_q--I/rs:fit/g:sm/q:90/h:584/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NDE3/OTMtMTI3MjQyNTI5/OC5qcGVn.jpeg",
    spotify:
      "https://open.spotify.com/embed/track/6eN1f9KNmiWEhpE2RhQqB5?utm_source=generator",
  },
  {
    album: "Mina do Condomínio",
    cantor: "Seu Jorge",
    emblem: "A vida é melhor com música",
    "bg-color": ["#0396FF", "#0D1827"],
    "accent-color": "#0396FF",
    url: "https://i.scdn.co/image/ab67616d0000b27354e4d209439c9c2af439371e",
    spotify:
      "https://open.spotify.com/embed/track/27UvjEKY0j5l2kiuMCHaE1?utm_source=generator",
  },
  {
    album: "North Memphis",
    cantor: "Pharmacist",
    emblem: "A vida é melhor com música",
    "bg-color": ["#708090", "#C0C0C0"],
    "accent-color": "#708090",
    url: "https://i.discogs.com/hN_6EbJPYFT8u4Kca7yUgzCK1P1SKkOOF_g9R7SolWQ/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NzAz/NjE0LTE2Mjc4MzM2/MTUtNDI3OS5qcGVn.jpeg",
    spotify:
      "https://open.spotify.com/embed/track/0SzDVyiiUDpuhzrphnoejr?utm_source=generator",
  },
  {
    album: "One Horse Town",
    cantor: "Blackberry Smoke",
    emblem: "A vida é melhor com música",
    "bg-color": ["#FFDEAD", "#DCDCDC"],
    "accent-color": "#CD853F",
    url: "https://akamai.sscdn.co/uploadfile/letras/albuns/1/4/a/c/418171422546803.jpg",
    spotify:
      "https://open.spotify.com/embed/track/5Y36csDNfP9gRThyyveiBT?utm_source=generator",
  },
  {
    album: "Dois Corações e uma História",
    cantor: "Zezé Di Camargo & Luciano",
    emblem: "A vida é melhor com música",
    "bg-color": ["#2F4F4F", "#5F9EA0"],
    "accent-color": "#008B8B",
    url: "https://i.scdn.co/image/ab67616d0000b273ba323f9a5e6a954eb54884bf",
    spotify:
      "https://open.spotify.com/embed/track/5XRUIRvX0BTzuBDtxMCZZ9?utm_source=generator",
  },
  {
    album: "Born whith horns",
    cantor: "Machine Gun Kelly",
    emblem: "A vida é melhor com música",
    "bg-color": ["#D8BFD8", "#0D1827"],
    "accent-color": "#DA70D6",
    url: "https://i.scdn.co/image/ab67616d0000b273b4683d9ac3c5f14a71523c84",
    spotify:
      "https://open.spotify.com/embed/track/6HC6V5flWY29ON64Y7XNMS?utm_source=generator",
  },
  {
    album: "Followers",
    cantor: "AREA21",
    emblem: "A vida é melhor com música",
    "bg-color": ["#9400D3", "#DDA0DD"],
    "accent-color": "A020F0",
    url: "https://i.scdn.co/image/ab67616d0000b27317ed0930fbee767857aea8bf",
    spotify:
      "https://open.spotify.com/embed/track/5sPoju3oZHg9Wq5KXxBH3a?utm_source=generator",
  },
  {
    album: "Beautiful Day",
    cantor: "Blackberry Smoke",
    emblem: "A vida é melhor com música",
    "bg-color": ["#FFB6C1", "#0D1827"],
    "accent-color": "#6A5ACD",
    url: "https://m.media-amazon.com/images/I/31IbXxIiyUL._UXNaN_FMjpg_QL85_.jpg",
    spotify:
      "https://open.spotify.com/embed/track/1z5r6Rpcc1BreRtYALBncX?utm_source=generator",
  },
  {
    album: "Tripping Over Air",
    cantor: "Aidan Bissett",
    emblem: "A vida é melhor com música",
    "bg-color": ["#DEB887", "#800000"],
    "accent-color": "#F4A460",
    url: "https://i.scdn.co/image/ab67616d0000b27316ec2775ea7582889470677b",
    spotify:
      "https://open.spotify.com/embed/track/7mzPAftljnsFmU6131Pqcd?utm_source=generator",
  },
  {
    album: "Broken Brights",
    cantor: "Angus Stone",
    emblem: "A vida é melhor com música",
    "bg-color": ["#DEB887", "#D2B48C"],
    "accent-color": "#CD853F",
    url: "https://i.scdn.co/image/ab67616d0000b27394c49e2c0cc90ce8e18ef29b",
    spotify:
      "https://open.spotify.com/embed/track/35buQskjOPOFqu4oy0vcHD?utm_source=generator",
  },
  {
    album: "True Love",
    cantor: "SOJA",
    emblem: "A vida é melhor com música",
    "bg-color": ["#A52A2A", "#D2B48C"],
    "accent-color": "#8B0000",
    url: "https://i.scdn.co/image/ab67616d0000b27366c5fc58ea7a9bb3e6d15753",
    spotify:
      "https://open.spotify.com/embed/track/1HnriuDThLq7bEl1QKiaJL?utm_source=generator",
  },
  {
    album: "Tightrope",
    cantor: "Zayn Malik",
    emblem: "A vida é melhor com música",
    "bg-color": ["#FF0000", "#000000"],
    "accent-color": "#000000",
    url: "https://i.scdn.co/image/ab67616d0000b273f160ff1c91caffd9e24cc736",
    spotify:
      "https://open.spotify.com/embed/track/44ngiCPfS8FfdJOqN0eULl?utm_source=generator",
  },
  {
    album: "Love Of My Life",
    cantor: "Queen",
    emblem: "A vida é melhor com música",
    "bg-color": ["#B0C4DE", "#87CEEB"],
    "accent-color": "#000000",
    url: "https://i.scdn.co/image/ab67616d0000b27334e3741442a54edb20310d8c",
    spotify:
      "https://open.spotify.com/embed/track/4JO4B5UbDaBMX3uKOkWq3T?utm_source=generator",
  },
  {
    album: "Enter Sandman",
    cantor: "Metallica",
    emblem: "A vida é melhor com música",
    "bg-color": ["#363636", "#000000"],
    "accent-color": "#000000",
    url: "https://i.scdn.co/image/ab67616d0000b273af07dc851962508661bbcfce",
    spotify:"https://open.spotify.com/embed/track/5sICkBXVmaCQk5aISGR3x1?utm_source=generator",
  }
];

scrollLeft.addEventListener("click", () => handleClickScroll(-1));
scrollRight.addEventListener("click", () => handleClickScroll(1));
heroDiv.addEventListener("animationend", () => {
  heroDiv.classList.remove("album-transition");
  document.addEventListener("keydown", handleKeyScroll);
  scrollLeft.disabled = false;
  scrollRight.disabled = false;
  scrollLeft.classList.remove("key-press-hover-left");
  scrollRight.classList.remove("key-press-hover-right");

  for (const text of texts) text.classList.add("show-texts");
});

const handleClickScroll = (val) => {
  if (index + val >= 0 && index + val < albums.length) {
    updateDisplay((index += val));
  }
};

const handleKeyScroll = (e) => {
  if (e.key == "ArrowLeft") {
    scrollLeft.classList.add("key-press-hover-left");
    handleClickScroll(-1);
  }
  if (e.key == "ArrowRight") {
    scrollRight.classList.add("key-press-hover-right");
    handleClickScroll(1);
  }
};
let index = 0;

const updateDisplay = (index) => {
  let DELIMITER = "";

  const album = albums[index];

  for (const text of texts) text.classList.remove("show-texts");
  emblemDiv.innerHTML = "";
  scrollLeft.disabled = true;
  scrollRight.disabled = true;
  document.removeEventListener("keydown", handleKeyScroll);

  sectionContainer.id = `hero-${album.album.toLowerCase().replace(" ", "-")}`;
  bodyContainer.style.background = `linear-gradient(180deg, ${album["bg-color"][0]} 0%, ${album["bg-color"][1]} 100%)`;
  heroDiv.style.backgroundImage = `url(${album.url})`;
  albumTitleSpan.textContent = album.album;
  cantorTitleSpan.textContent = album.cantor;
  spotifyWidget.src = album.spotify;

  const number = index + 1;
  albumNum.innerText = number >= 10 ? number + "." : `0${number}.`;
  albumNum.style.color = album["accent-color"];

  if (index === 19) scrollRight.classList.add("hide-arrow");
  else scrollRight.classList.remove("hide-arrow");

  createEmblem(album.emblem, DELIMITER[0] || undefined).forEach((node) =>
    emblemDiv.append(node)
  );

  heroDiv.classList.add("album-transition");
};

const createEmblem = (string, delimiter = "•") => {
  const spans = [];

  string = string.trim().replaceAll(" ", delimiter) + delimiter;
  const numChars = string.length;
  const degVal = 90 / (numChars / 4);

  string.split("").forEach((char, idx) => {
    const span = document.createElement("span");
    span.innerText = char;
    span.style.transform = `rotate(${180 - degVal * idx}deg)`;
    if (char === delimiter) span.style.color = albums[index]["accent-color"];
    spans.push(span);
  });

  return spans;
};

updateDisplay(index);

const profileDetails = document.getElementById("aside");
const header = document.getElementById("header");
const footer = document.getElementById("footer");

const username = "savannah-hayes";
const USER_URL = `https://api.github.com/users/${username}`;
const REPOS_URL = `https://api.github.com/users/${username}/repos`;
const COMMITS_URL = `https://api.github.com/repos/${username}/`;

const options = {
  method: "GET",
  headers: {
    Authorization: `token ${API_TOKEN}`
  }
};

const displayHeaderAndFooter = () => {
  header.innerHTML = `
    <div class="hamburger-wrapper">
    <span class="hamburger"></span>
    <span class="hamburger"></span>
    <span class="hamburger"></span>
    </div>
    <h1>GitHub Tracker</h1>
    <img src="./images/me.png" class="header__image" alt="small image of savannah hayes">
    `

  footer.innerHTML = `
    <p class="footer__text footer-flex">
      <img src="./images/github.png" class="footer__icon" alt="github icon">GitHub Tracker
    </p>
    <ul class="footer__links footer-flex">
    <li class="footer__link footer-flex">Terms</li>
    <li class="footer__link footer-flex">Privacy</li>
    <li class="footer__link footer-flex">Security</li>
    <li class="footer__link footer-flex footer__link--hide">About</li>
    </ul>
  `
};

const displayProfileData = (profileData) => {
  const { avatar_url, name, login, bio, followers, following, location } = profileData;

  profileDetails.innerHTML = `
    <section class="aside__header">
    <img src="${avatar_url}" class="aside__image" alt="image of ${name}"></img>
    <div class="aside__text">
    <h2 class="aside__title">${name}</h2>
    <p class="aside__sub-title">${login}</p>
    </div>
    </section>
    <section class="aside-content">
    <p class="aside-content__paragraph aside-content__paragraph--top">${bio}</p>
    <p class="aside-content__paragraph aside-content__paragraph--grey">
    <img class="icons icons-left" src="./images/group.png" alt="three people icon">
    <span class="aside-content__paragraph--bold">${followers}</span>  followers · 
    <span class="aside-content__paragraph--bold">${following}</span> following</p>
    <p class="aside-content__paragraph">
    <img class="icons icons-left" src="./images/location.png" alt="location pin icon">
    </img> ${location}
    </p>
    </section>
  `;
};

displayHeaderAndFooter();

fetch(USER_URL, options)
  .then(res => res.json())
  .then(data => displayProfileData(data))
  .catch(error => console.log(error))
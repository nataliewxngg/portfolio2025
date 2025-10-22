import profilePicSrc from '../assets/profile-pic.jpg';

const header = document.createElement('header');

const profileDiv = document.createElement('div');
profileDiv.setAttribute('id', 'profile');

const profilePic = document.createElement('img');
profilePic.setAttribute('src', profilePicSrc);
profilePic.setAttribute('alt', 'Natalie Wong Profile Picture');

const profileText = document.createElement('div');
const name = document.createElement('h1');
name.textContent = 'Natalie Wong';
const title = document.createElement('p');
title.textContent = 'Full-Stack Developer';

profileText.appendChild(name);
profileText.appendChild(title);

profileDiv.appendChild(profilePic);
profileDiv.appendChild(profileText);

header.appendChild(profileDiv);

export default header;
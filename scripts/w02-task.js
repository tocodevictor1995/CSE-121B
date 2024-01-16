const fullName = "Victor Silva";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const profilePicture = "images/victor.jpg";


const nameElement = document.getElementById ("name");
const foodElement = document.getElementById ("food");
const yearElement = document.querySelector ("#year");
const imageElement = document.querySelector("img");

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;

const favoriteFood = [" Barbecue",  " lasagna" ];

foodElement.innerHTML = `<p>${favoriteFood}</p>`;

const faFood = " Barbecue";

favoriteFood.push (faFood);

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift ();

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop ();

foodElement.innerHTML += `<br>${favoriteFood}`;


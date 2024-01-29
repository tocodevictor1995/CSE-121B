
let timbo = {};

timbo.name = "Victor Silva";

timbo.photo = 'images/victor.png';

timbo.favoriteFoods = ["Barbecue", "Lasagna", "Garlic Bread"];

timbo.hobbies = ["Movies", "hanging out with friends"];

timbo.placesLived = [];


let newObject = {};
newObject.place = "";
newObject.length = "";

timbo.placesLived.push(newObject);

newObject.place = "Curitiba-PR/Brasil";
newObject.length = "25 years";

secondObject = {};
secondObject.place = "Batalha/Portugal";
secondObject.length = "3 years";

timbo.placesLived.push(secondObject);

document.querySelector('#name').innerHTML = timbo.name;

document.querySelector('#photo').setAttribute('src', timbo.photo);
document.querySelector('#photo').setAttribute('height', '400px');
document.querySelector('#photo').setAttribute('width', '250px');

document.querySelector('#photo').setAttribute('alt', timbo.name);

let favFoods = document.getElementById('favorite-foods')

for (let i=0; i < timbo.favoriteFoods.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = timbo.favoriteFoods[i];

    favFoods.append(listItem);
}

let favhobbies = document.getElementById('hobbies');

for (let i=0; i < timbo.hobbies.length; i++) {
    let hobbyItem = document.createElement('li');
    hobbyItem.textContent = timbo.hobbies[i];

    favhobbies.append(hobbyItem);
}

let lived = document.getElementById('places-lived');

for (thing of timbo.placesLived) {
    lived.innerHTML += '<dt>' + thing.place + '</dt>';
    lived.innerHTML += '<dd>' + thing.length + '</dd>';
}


const templesElement = document.querySelector("#temples");
let templeList = [];

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

const getTemples = async () => {
    const response = await fetch(
        "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );
    templeList = await response.json();
    displayTemples(templeList);
};

const reset = () => {
    templesElement.innerHTML = "";
};

const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "alphabetic":
            displayTemples(
                temples.sort((a, b) => {
                    let fa = a.templeName.toLowerCase(),
                        fb = b.templeName.toLowerCase();

                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                })
            );
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};


document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});

getTemples();
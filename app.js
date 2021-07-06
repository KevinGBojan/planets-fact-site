const planetName = document.querySelector('.planet-name');
const planetDesc = document.querySelector('.planet-desc');
const rotation = document.querySelector('.fact-rotation');
const revolution = document.querySelector('.fact-revolution');
const radius = document.querySelector('.fact-radius');
const temperature = document.querySelector('.fact-temperature');
const overview = document.querySelector('.overview');
const structure = document.querySelector('.structure');
const geology = document.querySelector('.geology');
const mercury = document.querySelector('.mercury');
const venus = document.querySelector('.venus');
const earth = document.querySelector('.earth');
const mars = document.querySelector('.mars');
const jupiter = document.querySelector('.jupiter');
const saturn = document.querySelector('.saturn');
const uranus = document.querySelector('.uranus');
const neptune = document.querySelector('.neptune');
const planet = document.querySelector('.planet');
const source = document.querySelector('.source-link');
const vw = document.documentElement.clientWidth;
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const btnColors = {
    0: "419EBB",
    1: "EDA249",
    2: "6D2ED5",
    3: "D14C32",
    4: "D83A34",
    5: "CD5120",
    6: "1EC1A2",
    7: "2D68F0"
}

const planets = {
    0: "mercury",
    1: "venus",
    2: "earth",
    3: "mars",
    4: "jupiter",
    5: "saturn",
    6: "uranus",
    7: "neptune"
}

const planetSize = {
    0: {large: "290px",medium: "184px",small: "111px"},
    1: {large: "400px",medium: "253px",small: "154px"},
    2: {large: "450px",medium: "285px",small: "173px"},
    3: {large: "336px",medium: "213px",small: "129px"},
    4: {large: "582px",medium: "369px",small: "224px"},
    5: {large: "666px",medium: "422px",small: "256px"},
    6: {large: "458px",medium: "290px",small: "176px"},
    7: {large: "450px",medium: "285px",small: "173px"},
}

const geologySize = {
    large: "163px 199px",
    medium: "80px 93.25px",
    small: "50px 58.28px"
}

let currentPlanet = 0;
let currentState = "overview";

displayInfo();
changeBtn();

function mercuryHandler () {
    currentPlanet = 0;
    currentState = "overview"
    displayInfo();
    changeBtn();
}

function venusHandler () {
    currentPlanet = 1;
    currentState = "overview"
    displayInfo();
    changeBtn();
}

function earthHandler () {
    currentPlanet = 2;
    currentState = "overview"
    displayInfo();
    changeBtn();
}

function marsHandler () {
    currentPlanet = 3;
    currentState = "overview"
    displayInfo();
    changeBtn();
}

function jupiterHandler () {
    currentPlanet = 4;
    currentState = "overview"
    displayInfo();
    changeBtn();
}

function saturnHandler () {
    currentPlanet = 5;
    currentState = "overview"
    displayInfo();
    changeBtn();
}

function uranusHandler () {
    currentPlanet = 6;
    currentState = "overview"
    displayInfo();
    changeBtn();
}

function neptuneHandler () {
    currentPlanet = 7;
    currentState = "overview"
    displayInfo();
    changeBtn();
}

function overviewHandler () {
    currentState = "overview"
    displayInfo();
    changeBtn();
}

function structureHandler () {
    currentState = "structure"
    displayInfo();
    changeBtn();
}

function geologyHandler () {
    currentState = "geology"
    displayInfo();
    changeBtn();
}

function changeBtn () {
    if (currentState == "overview") {
        overview.style.backgroundColor = `#${btnColors[currentPlanet]}`;
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "transparent";
    } else if (currentState == "structure") {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = `#${btnColors[currentPlanet]}`;
        geology.style.backgroundColor = "transparent";
    } else {
        overview.style.backgroundColor = "transparent";
        geology.style.backgroundColor = `#${btnColors[currentPlanet]}`;
        structure.style.backgroundColor = "transparent";
    }
}

function displayInfo () {

    fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        planetName.innerText = data[currentPlanet].name;
        rotation.innerText = data[currentPlanet].rotation;
        revolution.innerText = data[currentPlanet].revolution;
        radius.innerText = data[currentPlanet].radius;
        temperature.innerText = data[currentPlanet].temperature;

        if (currentState == "overview") {
            planetDesc.innerText = data[currentPlanet].overview.content;
            source.href = data[currentPlanet].overview.source;
            planet.style.background = `url('/assets/planet-${planets[currentPlanet]}.svg')`;
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            
            if (vw>1150) {
                planet.style.backgroundSize = `${planetSize[currentPlanet].large}`, `${planetSize[currentPlanet].large}`;
                planet.style.height = `${planetSize[currentPlanet].large}`;
                planet.style.width = `${planetSize[currentPlanet].large}`;
            } else if (vw<=1150 && vw>=660) {
                planet.style.backgroundSize = `${planetSize[currentPlanet].medium}`,`${planetSize[currentPlanet].medium}`;
                planet.style.height = `${planetSize[currentPlanet].medium}`;
                planet.style.width = `${planetSize[currentPlanet].medium}`;
            } else {
                planet.style.backgroundSize = `${planetSize[currentPlanet].small}`,`${planetSize[currentPlanet].small}`;
                planet.style.height = `${planetSize[currentPlanet].small}`;
                planet.style.width = `${planetSize[currentPlanet].small}`;
            }
        } else if (currentState == "structure") {
            planetDesc.innerText = data[currentPlanet].structure.content;
            source.href = data[currentPlanet].structure.source;
            planet.style.background = `url('/assets/planet-${planets[currentPlanet]}-internal.svg')`;
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            
            if (vw>1150) {
                planet.style.backgroundSize = `${planetSize[currentPlanet].large}`,`${planetSize[currentPlanet].large}`;
                planet.style.height = `${planetSize[currentPlanet].large}`;
                planet.style.width = `${planetSize[currentPlanet].large}`;
            } else if (vw<=1150 && vw>=660) {
                planet.style.backgroundSize = `${planetSize[currentPlanet].medium}`,`${planetSize[currentPlanet].medium}`;
                planet.style.height = `${planetSize[currentPlanet].medium}`;
                planet.style.width = `${planetSize[currentPlanet].medium}`;
            } else {
                planet.style.backgroundSize = `${planetSize[currentPlanet].small}`,`${planetSize[currentPlanet].small}`;
                planet.style.height = `${planetSize[currentPlanet].small}`;
                planet.style.width = `${planetSize[currentPlanet].small}`;
            }
        } else {
            planetDesc.innerText = data[currentPlanet].geology.content;
            source.href = data[currentPlanet].geology.source;
            planet.style.background = `url('/assets/geology-${planets[currentPlanet]}.png'), url('/assets/planet-${planets[currentPlanet]}.svg')`;
            planet.style.backgroundRepeat = "no-repeat, no-repeat";
            planet.style.backgroundPosition = "50% 100%, center";
            
            if (vw>1150) {
                planet.style.backgroundSize = `${geologySize.large}, ${planetSize[currentPlanet].large} ${planetSize[currentPlanet].large}`;
                planet.style.height = `${planetSize[currentPlanet].large}`;
                planet.style.width = `${planetSize[currentPlanet].large}`;
            } else if (vw<=1150 && vw>=660) {
                planet.style.backgroundSize = `${geologySize.medium}, ${planetSize[currentPlanet].medium} ${planetSize[currentPlanet].medium}`;
                planet.style.height = `${planetSize[currentPlanet].medium}`;
                planet.style.width = `${planetSize[currentPlanet].medium}`;
            } else {
                planet.style.backgroundSize = `${geologySize.small}, ${planetSize[currentPlanet].small} ${planetSize[currentPlanet].small}`;
                planet.style.height = `${planetSize[currentPlanet].small}`;
                planet.style.width = `${planetSize[currentPlanet].small}`;
            }
        }
    })
}

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menu.style.display='flex';
        overlay.style.display="flex";
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menu.style.display='none';
        overlay.style.display="none";
    }
});
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

mercury.addEventListener('click', mercuryFunction);

function mercuryFunction () {
    fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[0].name;
            planetDesc.innerText = data[0].overview.content;
            rotation.innerText = data[0].rotation;
            revolution.innerText = data[0].revolution;
            radius.innerText = data[0].radius;
            temperature.innerText = data[0].temperature;
            planet.style.background = `url('${data[0].images.planet}') no-repeat center contain`;
            planet.style.backgroundSize = "290px 290px";
            source.href = data[0].overview.source;
    })
}

fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);
        console.log(`url('${data[0].images.planet}') no-repeat center contain`)

    })

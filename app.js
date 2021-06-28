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
const vh = document.documentElement.clientHeight;
const menuBtn = document.querySelector('.menu-btn');
const navLink = document.querySelector('.nav-links');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        navLink.style.display = "flex";
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        navLink.style.display = "none";
    }
});


mercury.addEventListener('click', () => {
    let venusOpen = false;
    let earthOpen = false;
    let marsOpen = false;
    let jupiterOpen = false;
    let saturnOpen = false;
    let uranusOpen = false;
    let neptuneOpen = false;
    let mercuryOpen = true;
    if (mercuryOpen) {
        mercuryFunction();
    }
});

venus.addEventListener('click', () => {
    let venusOpen = true;
    let earthOpen = false;
    let marsOpen = false;
    let jupiterOpen = false;
    let saturnOpen = false;
    let uranusOpen = false;
    let neptuneOpen = false;
    let mercuryOpen = false;
    if (venusOpen) {
        venusFunction();
    }
});

earth.addEventListener('click', () => {
    let venusOpen = false;
    let earthOpen = true;
    let marsOpen = false;
    let jupiterOpen = false;
    let saturnOpen = false;
    let uranusOpen = false;
    let neptuneOpen = false;
    let mercuryOpen = false;
    if (earthOpen) {
        earthFunction();
    }
});

mars.addEventListener('click', () => {
    let venusOpen = false;
    let earthOpen = false;
    let marsOpen = true;
    let jupiterOpen = false;
    let saturnOpen = false;
    let uranusOpen = false;
    let neptuneOpen = false;
    let mercuryOpen = false;
    if (marsOpen) {
        marsFunction();
    }
});

jupiter.addEventListener('click', () => {
    let venusOpen = false;
    let earthOpen = false;
    let marsOpen = false;
    let jupiterOpen = true;
    let saturnOpen = false;
    let uranusOpen = false;
    let neptuneOpen = false;
    let mercuryOpen = false;
    if (jupiterOpen) {
        jupiterFunction();
    }
});

saturn.addEventListener('click', () => {
    let venusOpen = false;
    let earthOpen = false;
    let marsOpen = false;
    let jupiterOpen = false;
    let saturnOpen = true;
    let uranusOpen = false;
    let neptuneOpen = false;
    let mercuryOpen = false;
    if (saturnOpen) {
        saturnFunction();
    }
});

uranus.addEventListener('click', () => {
    let venusOpen = false;
    let earthOpen = false;
    let marsOpen = false;
    let jupiterOpen = false;
    let saturnOpen = false;
    let uranusOpen = true;
    let neptuneOpen = false;
    let mercuryOpen = false;
    if (uranusOpen) {
        uranusFunction();
    }
});

neptune.addEventListener('click', () => {
    let venusOpen = false;
    let earthOpen = false;
    let marsOpen = false;
    let jupiterOpen = false;
    let saturnOpen = false;
    let uranusOpen = false;
    let neptuneOpen = true;
    let mercuryOpen = false;
    if (neptuneOpen) {
        neptuneFunction();
    }
});

function mercuryFunction () {
        overview.style.backgroundColor = "#419EBB";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "transparent";
        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[0].name;
            planetDesc.innerText = data[0].overview.content;
            rotation.innerText = data[0].rotation;
            revolution.innerText = data[0].revolution;
            radius.innerText = data[0].radius;
            temperature.innerText = data[0].temperature;
            source.href = data[0].overview.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-mercury.svg')";
                planet.style.backgroundSize = "290px 290px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "290px";
                planet.style.width = "290px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-mercury.svg')";
                planet.style.backgroundSize = "184px 184px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "184px";
                planet.style.width = "184px";
            }
            else {
                planet.style.background = "url('/assets/planet-mercury.svg')";
                planet.style.backgroundSize = "111px 111px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "111px";
                planet.style.width = "111px";
            }
        })

        overview.addEventListener('click', () => {
            overview.style.backgroundColor = "#419EBB";
            structure.style.backgroundColor = "transparent";
            geology.style.backgroundColor = "transparent";
            fetch ('data.json')
            .then(response => response.json())
            .then(data => {
                planetName.innerText = data[0].name;
                planetDesc.innerText = data[0].overview.content;
                rotation.innerText = data[0].rotation;
                revolution.innerText = data[0].revolution;
                radius.innerText = data[0].radius;
                temperature.innerText = data[0].temperature;
                source.href = data[0].overview.source;

                if (vw>1150) {
                    planet.style.background = "url('/assets/planet-mercury.svg')";
                    planet.style.backgroundSize = "290px 290px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "290px";
                    planet.style.width = "290px";
                }
                else if(vw<=1150 && vw>=660) {
                    planet.style.background = "url('/assets/planet-mercury.svg')";
                    planet.style.backgroundSize = "184px 184px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "184px";
                    planet.style.width = "184px";
                }
                else {
                    planet.style.background = "url('/assets/planet-mercury.svg')";
                    planet.style.backgroundSize = "111px 111px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "184px";
                    planet.style.width = "184px";
                }
            })
        })

    structure.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "#419EBB";
        geology.style.backgroundColor = "transparent";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[0].name;
            planetDesc.innerText = data[0].structure.content;
            rotation.innerText = data[0].rotation;
            revolution.innerText = data[0].revolution;
            radius.innerText = data[0].radius;
            temperature.innerText = data[0].temperature;
            source.href = data[0].structure.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-mercury-internal.svg')";
                planet.style.backgroundSize = "290px 290px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "290px";
                planet.style.width = "290px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-mercury-internal.svg')";
                planet.style.backgroundSize = "184px 184px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "184px";
                planet.style.width = "184px";
            }
            else {
                planet.style.background = "url('/assets/planet-mercury-internal.svg')";
                planet.style.backgroundSize = "111px 111px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "111px";
                planet.style.width = "111px";
            }
        })
    })

    geology.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "#419EBB";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[0].name;
            planetDesc.innerText = data[0].geology.content;
            rotation.innerText = data[0].rotation;
            revolution.innerText = data[0].revolution;
            radius.innerText = data[0].radius;
            temperature.innerText = data[0].temperature;
            source.href = data[0].geology.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/geology-mercury.png'), url('/assets/planet-mercury.svg')";
                planet.style.backgroundSize = "163px 199px, 290px 290px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "290px";
                planet.style.width = "290px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/geology-mercury.png'), url('/assets/planet-mercury.svg')";
                planet.style.backgroundSize = "80px 93.25px, 184px 184px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "184px";
                planet.style.width = "184px";
            }
            else {
                planet.style.background = "url('/assets/geology-mercury.png'), url('/assets/planet-mercury.svg')";
                planet.style.backgroundSize = "50px 58.28px, 111px 111px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "111px";
                planet.style.width = "111px";
            }
        })
    })
}

function venusFunction() {
    overview.style.backgroundColor = "#EDA249";
    structure.style.backgroundColor = "transparent";
    geology.style.backgroundColor = "transparent";
        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[1].name;
            planetDesc.innerText = data[1].overview.content;
            rotation.innerText = data[1].rotation;
            revolution.innerText = data[1].revolution;
            radius.innerText = data[1].radius;
            temperature.innerText = data[1].temperature;
            source.href = data[1].overview.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-venus.svg')";
                planet.style.backgroundSize = "400px 400px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "400px";
                planet.style.width = "400px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-venus.svg')";
                planet.style.backgroundSize = "253px 253px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "253px";
                planet.style.width = "253px";
            }
            else {
                planet.style.background = "url('/assets/planet-venus.svg')";
                planet.style.backgroundSize = "154px 154px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "154px";
                planet.style.width = "154px";
            }
        })

        overview.addEventListener('click', () => {
            overview.style.backgroundColor = "#EDA249";
            structure.style.backgroundColor = "transparent";
            geology.style.backgroundColor = "transparent";
            fetch ('data.json')
            .then(response => response.json())
            .then(data => {
                planetName.innerText = data[1].name;
                planetDesc.innerText = data[1].overview.content;
                rotation.innerText = data[1].rotation;
                revolution.innerText = data[1].revolution;
                radius.innerText = data[1].radius;
                temperature.innerText = data[1].temperature;
                source.href = data[1].overview.source;
    
                if (vw>1150) {
                    planet.style.background = "url('/assets/planet-venus.svg')";
                    planet.style.backgroundSize = "400px 400px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "400px";
                    planet.style.width = "400px";
                }
                else if(vw<=1150 && vw>=660) {
                    planet.style.background = "url('/assets/planet-venus.svg')";
                    planet.style.backgroundSize = "253px 253px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "253px";
                    planet.style.width = "253px";
                }
                else {
                    planet.style.background = "url('/assets/planet-venus.svg')";
                    planet.style.backgroundSize = "154px 154px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "154px";
                    planet.style.width = "154px";
                }
            })
        })

    structure.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "#EDA249";
        geology.style.backgroundColor = "transparent";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[1].name;
            planetDesc.innerText = data[1].structure.content;
            rotation.innerText = data[1].rotation;
            revolution.innerText = data[1].revolution;
            radius.innerText = data[1].radius;
            temperature.innerText = data[1].temperature;
            source.href = data[1].structure.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-venus-internal.svg')";
                planet.style.backgroundSize = "400px 400px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "400px";
                planet.style.width = "400px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-venus-internal.svg')";
                planet.style.backgroundSize = "253px 253px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "253px";
                planet.style.width = "253px";
            }
            else {
                planet.style.background = "url('/assets/planet-venus-internal.svg')";
                planet.style.backgroundSize = "154px 154px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "154px";
                planet.style.width = "154px";
            }
        })
    })

    geology.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "#EDA249";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[1].name;
            planetDesc.innerText = data[1].geology.content;
            rotation.innerText = data[1].rotation;
            revolution.innerText = data[1].revolution;
            radius.innerText = data[1].radius;
            temperature.innerText = data[1].temperature;
            source.href = data[1].geology.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/geology-venus.png'), url('/assets/planet-venus.svg')";
                planet.style.backgroundSize = "163px 199px, 400px 400px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "400px";
                planet.style.width = "400px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/geology-venus.png'), url('/assets/planet-venus.svg')";
                planet.style.backgroundSize = "80px 93.25px, 253px 253px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "253px";
                planet.style.width = "253px";
            }
            else {
                planet.style.background = "url('/assets/geology-venus.png'), url('/assets/planet-venus.svg')";
                planet.style.backgroundSize = "50px 58.28px, 154px 154px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "154px";
                planet.style.width = "154px";
            }
        })
    })
}

function earthFunction() {
        overview.style.backgroundColor = "#6D2ED5";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "transparent";
        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[2].name;
            planetDesc.innerText = data[2].overview.content;
            rotation.innerText = data[2].rotation;
            revolution.innerText = data[2].revolution;
            radius.innerText = data[2].radius;
            temperature.innerText = data[2].temperature;
            source.href = data[2].overview.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-earth.svg')";
                planet.style.backgroundSize = "450px 450px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "450px";
                planet.style.width = "450px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-earth.svg')";
                planet.style.backgroundSize = "285px 285px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "285px";
                planet.style.width = "285px";
            }
            else {
                planet.style.background = "url('/assets/planet-earth.svg')";
                planet.style.backgroundSize = "173px 173px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "173px";
                planet.style.width = "173px";
            }
        })

        overview.addEventListener('click', () => {
            overview.style.backgroundColor = "#6D2ED5";
            structure.style.backgroundColor = "transparent";
            geology.style.backgroundColor = "transparent";
            fetch ('data.json')
            .then(response => response.json())
            .then(data => {
                planetName.innerText = data[2].name;
                planetDesc.innerText = data[2].overview.content;
                rotation.innerText = data[2].rotation;
                revolution.innerText = data[2].revolution;
                radius.innerText = data[2].radius;
                temperature.innerText = data[2].temperature;
                source.href = data[2].overview.source;
    
                if (vw>1150) {
                    planet.style.background = "url('/assets/planet-earth.svg')";
                    planet.style.backgroundSize = "450px 450px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "450px";
                    planet.style.width = "450px";
                }
                else if(vw<=1150 && vw>=660) {
                    planet.style.background = "url('/assets/planet-earth.svg')";
                    planet.style.backgroundSize = "285px 285px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "285px";
                    planet.style.width = "285px";
                }
                else {
                    planet.style.background = "url('/assets/planet-earth.svg')";
                    planet.style.backgroundSize = "173px 173px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "173px";
                    planet.style.width = "173px";
                }
            })
        })

    structure.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "#6D2ED5";
        geology.style.backgroundColor = "transparent";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[2].name;
            planetDesc.innerText = data[2].geology.content;
            rotation.innerText = data[2].rotation;
            revolution.innerText = data[2].revolution;
            radius.innerText = data[2].radius;
            temperature.innerText = data[2].temperature;
            source.href = data[2].geology.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-earth-internal.svg')";
                planet.style.backgroundSize = "450px 450px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "450px";
                planet.style.width = "450px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-earth-internal.svg')";
                planet.style.backgroundSize = "285px 285px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "285px";
                planet.style.width = "285px";
            }
            else {
                planet.style.background = "url('/assets/planet-earth-internal.svg')";
                planet.style.backgroundSize = "173px 173px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "173px";
                planet.style.width = "173px";
            }
        })
    })

    geology.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "#6D2ED5";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[2].name;
            planetDesc.innerText = data[2].geology.content;
            rotation.innerText = data[2].rotation;
            revolution.innerText = data[2].revolution;
            radius.innerText = data[2].radius;
            temperature.innerText = data[2].temperature;
            source.href = data[2].geology.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/geology-earth.png'), url('/assets/planet-earth.svg')";
                planet.style.backgroundSize = "163px 199px, 450px 450px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "450px";
                planet.style.width = "450px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/geology-earth.png'), url('/assets/planet-earth.svg')";
                planet.style.backgroundSize = "80px 93.25px, 285px 285px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "285px";
                planet.style.width = "285px";
            }
            else {
                planet.style.background = "url('/assets/geology-earth.png'), url('/assets/planet-earth.svg')";
                planet.style.backgroundSize = "50px 58.28px, 173px 173px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "173px";
                planet.style.width = "173px";
            }
        })
    })
}

function marsFunction() {
    overview.style.backgroundColor = "#D14C32";
    structure.style.backgroundColor = "transparent";
    geology.style.backgroundColor = "transparent";
        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[3].name;
            planetDesc.innerText = data[3].overview.content;
            rotation.innerText = data[3].rotation;
            revolution.innerText = data[3].revolution;
            radius.innerText = data[3].radius;
            temperature.innerText = data[3].temperature;
            source.href = data[3].overview.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-mars.svg')";
                planet.style.backgroundSize = "336px 336px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "336px";
                planet.style.width = "336px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-mars.svg')";
                planet.style.backgroundSize = "213px 213px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "213px";
                planet.style.width = "213px";
            }
            else {
                planet.style.background = "url('/assets/planet-mars.svg')";
                planet.style.backgroundSize = "129px 129px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "129px";
                planet.style.width = "129px";
            }
        })

        overview.addEventListener('click', () => {
            overview.style.backgroundColor = "#D14C32";
            structure.style.backgroundColor = "transparent";
            geology.style.backgroundColor = "transparent";
            fetch ('data.json')
            .then(response => response.json())
            .then(data => {
                planetName.innerText = data[3].name;
                planetDesc.innerText = data[3].overview.content;
                rotation.innerText = data[3].rotation;
                revolution.innerText = data[3].revolution;
                radius.innerText = data[3].radius;
                temperature.innerText = data[3].temperature;
                source.href = data[3].overview.source;
    
                if (vw>1150) {
                    planet.style.background = "url('/assets/planet-mars.svg')";
                    planet.style.backgroundSize = "336px 336px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "336px";
                    planet.style.width = "336px";
                }
                else if(vw<=1150 && vw>=660) {
                    planet.style.background = "url('/assets/planet-mars.svg')";
                    planet.style.backgroundSize = "213px 213px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "213px";
                    planet.style.width = "213px";
                }
                else {
                    planet.style.background = "url('/assets/planet-mars.svg')";
                    planet.style.backgroundSize = "129px 129px";
                    planet.style.backgroundRepeat = "no-repeat";
                    planet.style.backgroundPosition = "center";
                    planet.style.height = "129px";
                    planet.style.width = "129px";
                }
            })
        })

    structure.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "#D14C32";
        geology.style.backgroundColor = "transparent";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[3].name;
            planetDesc.innerText = data[3].structure.content;
            rotation.innerText = data[3].rotation;
            revolution.innerText = data[3].revolution;
            radius.innerText = data[3].radius;
            temperature.innerText = data[3].temperature;
            source.href = data[3].structure.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-mars-internal.svg')";
                planet.style.backgroundSize = "285px 285px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "336px";
                planet.style.width = "336px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-mars-internal.svg')";
                planet.style.backgroundSize = "213px 213px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "213px";
                planet.style.width = "213px";
            }
            else {
                planet.style.background = "url('/assets/planet-mars-internal.svg')";
                planet.style.backgroundSize = "129px 129px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "129px";
                planet.style.width = "129px";
            }
        })
    })

    geology.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "#D14C32";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[3].name;
            planetDesc.innerText = data[3].geology.content;
            rotation.innerText = data[3].rotation;
            revolution.innerText = data[3].revolution;
            radius.innerText = data[3].radius;
            temperature.innerText = data[3].temperature;
            source.href = data[3].geology.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/geology-mars.png'), url('/assets/planet-mars.svg')";
                planet.style.backgroundSize = "163px 199px, 285px 285px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "285px";
                planet.style.width = "285px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/geology-mars.png'), url('/assets/planet-mars.svg')";
                planet.style.backgroundSize = "80px 93.25px, 213px 213px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "213px";
                planet.style.width = "213px";
            }
            else {
                planet.style.background = "url('/assets/geology-mars.png'), url('/assets/planet-mars.svg')";
                planet.style.backgroundSize = "50px 58.28px, 129px 129px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "129px";
                planet.style.width = "129px";
            }
        })
    })
}

function jupiterFunction() {
    overview.style.backgroundColor = "#D83A34";
    structure.style.backgroundColor = "transparent";
    geology.style.backgroundColor = "transparent";
    fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        planetName.innerText = data[4].name;
        planetDesc.innerText = data[4].overview.content;
        rotation.innerText = data[4].rotation;
        revolution.innerText = data[4].revolution;
        radius.innerText = data[4].radius;
        temperature.innerText = data[4].temperature;
        source.href = data[4].overview.source;

        if (vw>1150) {
            planet.style.background = "url('/assets/planet-jupiter.svg')";
            planet.style.backgroundSize = "582px 582px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "582px";
            planet.style.width = "582px";
        }
        else if(vw<=1150 && vw>=660) {
            planet.style.background = "url('/assets/planet-jupiter.svg')";
            planet.style.backgroundSize = "369px 369px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "369px";
            planet.style.width = "369px";
        }
        else {
            planet.style.background = "url('/assets/planet-jupiter.svg')";
            planet.style.backgroundSize = "224px 224px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "224px";
            planet.style.width = "224px";
        }
    })

    overview.addEventListener('click', () => {
        overview.style.backgroundColor = "#D83A34";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "transparent";
        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[4].name;
            planetDesc.innerText = data[4].overview.content;
            rotation.innerText = data[4].rotation;
            revolution.innerText = data[4].revolution;
            radius.innerText = data[4].radius;
            temperature.innerText = data[4].temperature;
            source.href = data[4].overview.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-jupiter.svg')";
                planet.style.backgroundSize = "582px 582px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "582px";
                planet.style.width = "582px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-jupiter.svg')";
                planet.style.backgroundSize = "369px 369px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "369px";
                planet.style.width = "369px";
            }
            else {
                planet.style.background = "url('/assets/planet-jupiter.svg')";
                planet.style.backgroundSize = "224px 224px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "224px";
                planet.style.width = "224px";
            }
        })
    })

structure.addEventListener('click', () => {
    overview.style.backgroundColor = "transparent";
    structure.style.backgroundColor = "#D83A34";
    geology.style.backgroundColor = "transparent";

    fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        planetName.innerText = data[4].name;
        planetDesc.innerText = data[4].structure.content;
        rotation.innerText = data[4].rotation;
        revolution.innerText = data[4].revolution;
        radius.innerText = data[4].radius;
        temperature.innerText = data[4].temperature;
        source.href = data[4].structure.source;

        if (vw>1150) {
            planet.style.background = "url('/assets/planet-jupiter-internal.svg')";
            planet.style.backgroundSize = "582px 582px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "582px";
            planet.style.width = "582px";
        }
        else if(vw<=1150 && vw>=660) {
            planet.style.background = "url('/assets/planet-jupiter-internal.svg')";
            planet.style.backgroundSize = "369px 369px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "369px";
            planet.style.width = "369px";
        }
        else {
            planet.style.background = "url('/assets/planet-jupiter-internal.svg')";
            planet.style.backgroundSize = "224px 224px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "224px";
            planet.style.width = "224px";
        }
    })
})

geology.addEventListener('click', () => {
    overview.style.backgroundColor = "transparent";
    structure.style.backgroundColor = "transparent";
    geology.style.backgroundColor = "#D83A34";

    fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        planetName.innerText = data[4].name;
        planetDesc.innerText = data[4].geology.content;
        rotation.innerText = data[4].rotation;
        revolution.innerText = data[4].revolution;
        radius.innerText = data[4].radius;
        temperature.innerText = data[4].temperature;
        source.href = data[4].geology.source;

        if (vw>1150) {
            planet.style.background = "url('/assets/geology-jupiter.png'), url('/assets/planet-jupiter.svg')";
            planet.style.backgroundSize = "163px 199px, 582px 582px";
            planet.style.backgroundRepeat = "no-repeat, no-repeat";
            planet.style.backgroundPosition = "50% 100%, center";
            planet.style.height = "582px";
            planet.style.width = "582px";
        }
        else if(vw<=1150 && vw>=660) {
            planet.style.background = "url('/assets/geology-jupiter.png'), url('/assets/planet-jupiter.svg')";
            planet.style.backgroundSize = "80px 93.25px, 369px 369px";
            planet.style.backgroundRepeat = "no-repeat, no-repeat";
            planet.style.backgroundPosition = "50% 100%, center";
            planet.style.height = "369px";
            planet.style.width = "369px";
        }
        else {
            planet.style.background = "url('/assets/geology-jupiter.png'), url('/assets/planet-jupiter.svg')";
            planet.style.backgroundSize = "50px 58.28px, 224px 224px";
            planet.style.backgroundRepeat = "no-repeat, no-repeat";
            planet.style.backgroundPosition = "50% 100%, center";
            planet.style.height = "224px";
            planet.style.width = "224px";
        }
    })
})
}

function saturnFunction() {
    overview.style.backgroundColor = "#CD5120";
    structure.style.backgroundColor = "transparent";
    geology.style.backgroundColor = "transparent";
    fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        planetName.innerText = data[5].name;
        planetDesc.innerText = data[5].overview.content;
        rotation.innerText = data[5].rotation;
        revolution.innerText = data[5].revolution;
        radius.innerText = data[5].radius;
        temperature.innerText = data[5].temperature;
        source.href = data[5].overview.source;

        if (vw>1150) {
            planet.style.background = "url('/assets/planet-saturn.svg')";
            planet.style.backgroundSize = "666.09px 666.09px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "666.09px";
            planet.style.width = "666.09px";
        }
        else if(vw<=1150 && vw>=660) {
            planet.style.background = "url('/assets/planet-saturn.svg')";
            planet.style.backgroundSize = "422px 422px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "422px";
            planet.style.width = "422px";
        }
        else {
            planet.style.background = "url('/assets/planet-saturn.svg')";
            planet.style.backgroundSize = "256px 256px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "256px";
            planet.style.width = "256px";
        }
    })

    overview.addEventListener('click', () => {
        overview.style.backgroundColor = "#CD5120";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "transparent";
        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[5].name;
            planetDesc.innerText = data[5].overview.content;
            rotation.innerText = data[5].rotation;
            revolution.innerText = data[5].revolution;
            radius.innerText = data[5].radius;
            temperature.innerText = data[5].temperature;
            source.href = data[5].overview.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-saturn.svg')";
                planet.style.backgroundSize = "666.09px 666.09px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "666.09px";
                planet.style.width = "666.09px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-saturn.svg')";
                planet.style.backgroundSize = "422px 422px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "422px";
                planet.style.width = "422px";
            }
            else {
                planet.style.background = "url('/assets/planet-saturn.svg')";
                planet.style.backgroundSize = "256px 256px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "256px";
                planet.style.width = "256px";
            }
        })
    })

    structure.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "#CD5120";
        geology.style.backgroundColor = "transparent";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[5].name;
            planetDesc.innerText = data[5].structure.content;
            rotation.innerText = data[5].rotation;
            revolution.innerText = data[5].revolution;
            radius.innerText = data[5].radius;
            temperature.innerText = data[5].temperature;
            source.href = data[5].structure.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-saturn-internal.svg')";
                planet.style.backgroundSize = "666.09px 666.09px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "666.09px";
                planet.style.width = "666.09px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-saturn-internal.svg')";
                planet.style.backgroundSize = "422px 422px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "422px";
                planet.style.width = "422px";
            }
            else {
                planet.style.background = "url('/assets/planet-saturn-internal.svg')";
                planet.style.backgroundSize = "256px 256px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "256px";
                planet.style.width = "256px";
            }
        })
    })

    geology.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "#CD5120";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[5].name;
            planetDesc.innerText = data[5].geology.content;
            rotation.innerText = data[5].rotation;
            revolution.innerText = data[5].revolution;
            radius.innerText = data[5].radius;
            temperature.innerText = data[5].temperature;
            source.href = data[5].geology.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/geology-saturn.png'), url('/assets/planet-saturn.svg')";
                planet.style.backgroundSize = "163px 199px, 666.09px 666.09px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "666.09px";
                planet.style.width = "666.09px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/geology-saturn.png'), url('/assets/planet-saturn.svg')";
                planet.style.backgroundSize = "80px 93.25px, 422px 422px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "422px";
                planet.style.width = "422px";
            }
            else {
                planet.style.background = "url('/assets/geology-saturn.png'), url('/assets/planet-saturn.svg')";
                planet.style.backgroundSize = "50px 58.28px, 256px 256px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "256px";
                planet.style.width = "256px";
            }
        })
    })
}

function uranusFunction() {
    overview.style.backgroundColor = "#1EC1A2";
    structure.style.backgroundColor = "transparent";
    geology.style.backgroundColor = "transparent";
    fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        planetName.innerText = data[6].name;
        planetDesc.innerText = data[6].overview.content;
        rotation.innerText = data[6].rotation;
        revolution.innerText = data[6].revolution;
        radius.innerText = data[6].radius;
        temperature.innerText = data[6].temperature;
        source.href = data[6].overview.source;

        if (vw>1150) {
            planet.style.background = "url('/assets/planet-uranus.svg')";
            planet.style.backgroundSize = "458px 458px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "458px";
            planet.style.width = "458px";
        }
        else if(vw<=1150 && vw>=660) {
            planet.style.background = "url('/assets/planet-uranus.svg')";
            planet.style.backgroundSize = "290px 290px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "290px";
            planet.style.width = "290px";
        }
        else {
            planet.style.background = "url('/assets/planet-uranus.svg')";
            planet.style.backgroundSize = "176px 176px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "176px";
            planet.style.width = "176px";
        }
    })

    overview.addEventListener('click', () => {
        overview.style.backgroundColor = "#1EC1A2";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "transparent";
        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[6].name;
            planetDesc.innerText = data[6].overview.content;
            rotation.innerText = data[6].rotation;
            revolution.innerText = data[6].revolution;
            radius.innerText = data[6].radius;
            temperature.innerText = data[6].temperature;
            source.href = data[6].overview.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-uranus.svg')";
                planet.style.backgroundSize = "458px 458px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "458px";
                planet.style.width = "458px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-uranus.svg')";
                planet.style.backgroundSize = "290px 290px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "290px";
                planet.style.width = "290px";
            }
            else {
                planet.style.background = "url('/assets/planet-uranus.svg')";
                planet.style.backgroundSize = "176px 176px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "176px";
                planet.style.width = "176px";
            }
        })
    })

structure.addEventListener('click', () => {
    overview.style.backgroundColor = "transparent";
    structure.style.backgroundColor = "#1EC1A2";
    geology.style.backgroundColor = "transparent";

    fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        planetName.innerText = data[6].name;
        planetDesc.innerText = data[6].structure.content;
        rotation.innerText = data[6].rotation;
        revolution.innerText = data[6].revolution;
        radius.innerText = data[6].radius;
        temperature.innerText = data[6].temperature;
        source.href = data[6].structure.source;

        if (vw>1150) {
            planet.style.background = "url('/assets/planet-uranus-internal.svg')";
            planet.style.backgroundSize = "458px 458px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "458px";
            planet.style.width = "458px";
        }
        else if(vw<=1150 && vw>=660) {
            planet.style.background = "url('/assets/planet-uranus-internal.svg')";
            planet.style.backgroundSize = "290px 290px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "290px";
            planet.style.width = "290px";
        }
        else {
            planet.style.background = "url('/assets/planet-uranus-internal.svg')";
            planet.style.backgroundSize = "176px 176px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "176px";
            planet.style.width = "176px";
        }
    })
})

geology.addEventListener('click', () => {
    overview.style.backgroundColor = "transparent";
    structure.style.backgroundColor = "transparent";
    geology.style.backgroundColor = "#1EC1A2";

    fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        planetName.innerText = data[6].name;
        planetDesc.innerText = data[6].geology.content;
        rotation.innerText = data[6].rotation;
        revolution.innerText = data[6].revolution;
        radius.innerText = data[6].radius;
        temperature.innerText = data[6].temperature;
        source.href = data[6].geology.source;

        if (vw>1150) {
            planet.style.background = "url('/assets/geology-uranus.png'), url('/assets/planet-uranus.svg')";
            planet.style.backgroundSize = "163px 199px, 458px 458px";
            planet.style.backgroundRepeat = "no-repeat, no-repeat";
            planet.style.backgroundPosition = "50% 100%, center";
            planet.style.height = "458px";
            planet.style.width = "458px";
        }
        else if(vw<=1150 && vw>=660) {
            planet.style.background = "url('/assets/geology-uranus.png'), url('/assets/planet-uranus.svg')";
            planet.style.backgroundSize = "80px 93.25px, 290px 290px";
            planet.style.backgroundRepeat = "no-repeat, no-repeat";
            planet.style.backgroundPosition = "50% 100%, center";
            planet.style.height = "290px";
            planet.style.width = "290px";
        }
        else {
            planet.style.background = "url('/assets/geology-uranus.png'), url('/assets/planet-uranus.svg')";
            planet.style.backgroundSize = "50px 58.28px, 176px 176px";
            planet.style.backgroundRepeat = "no-repeat, no-repeat";
            planet.style.backgroundPosition = "50% 100%, center";
            planet.style.height = "176px";
            planet.style.width = "176px";
        }
    })
})
}

function neptuneFunction() {
    overview.style.backgroundColor = "#2D68F0";
    structure.style.backgroundColor = "transparent";
    geology.style.backgroundColor = "transparent";
    fetch ('data.json')
    .then(response => response.json())
    .then(data => {
        planetName.innerText = data[7].name;
        planetDesc.innerText = data[7].overview.content;
        rotation.innerText = data[7].rotation;
        revolution.innerText = data[7].revolution;
        radius.innerText = data[7].radius;
        temperature.innerText = data[7].temperature;
        source.href = data[7].overview.source;

        if (vw>1150) {
            planet.style.background = "url('/assets/planet-neptune.svg')";
            planet.style.backgroundSize = "450px 450px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "450px";
            planet.style.width = "450px";
        }
        else if(vw<=1150 && vw>=660) {
            planet.style.background = "url('/assets/planet-neptune.svg')";
            planet.style.backgroundSize = "285px 285px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "285px";
            planet.style.width = "285px";
        }
        else {
            planet.style.background = "url('/assets/planet-neptune.svg')";
            planet.style.backgroundSize = "173px 173px";
            planet.style.backgroundRepeat = "no-repeat";
            planet.style.backgroundPosition = "center";
            planet.style.height = "173px";
            planet.style.width = "173px";
        }
    })

    overview.addEventListener('click', () => {
        overview.style.backgroundColor = "#2D68F0";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "transparent";
        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[7].name;
            planetDesc.innerText = data[7].overview.content;
            rotation.innerText = data[7].rotation;
            revolution.innerText = data[7].revolution;
            radius.innerText = data[7].radius;
            temperature.innerText = data[7].temperature;
            source.href = data[7].overview.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-neptune.svg')";
                planet.style.backgroundSize = "450px 450px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "450px";
                planet.style.width = "450px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-neptune.svg')";
                planet.style.backgroundSize = "285px 285px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "285px";
                planet.style.width = "285px";
            }
            else {
                planet.style.background = "url('/assets/planet-neptune.svg')";
                planet.style.backgroundSize = "173px 173px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "173px";
                planet.style.width = "173px";
            }
        })
    })

    structure.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "#2D68F0";
        geology.style.backgroundColor = "transparent";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[7].name;
            planetDesc.innerText = data[7].structure.content;
            rotation.innerText = data[7].rotation;
            revolution.innerText = data[7].revolution;
            radius.innerText = data[7].radius;
            temperature.innerText = data[7].temperature;
            source.href = data[7].structure.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/planet-neptune-internal.svg')";
                planet.style.backgroundSize = "450px 450px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "450px";
                planet.style.width = "450px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/planet-neptune-internal.svg')";
                planet.style.backgroundSize = "285px 285px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "285px";
                planet.style.width = "285px";
            }
            else {
                planet.style.background = "url('/assets/planet-neptune-internal.svg')";
                planet.style.backgroundSize = "173px 173px";
                planet.style.backgroundRepeat = "no-repeat";
                planet.style.backgroundPosition = "center";
                planet.style.height = "173px";
                planet.style.width = "173px";
            }
        })
    })

    geology.addEventListener('click', () => {
        overview.style.backgroundColor = "transparent";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "#2D68F0";

        fetch ('data.json')
        .then(response => response.json())
        .then(data => {
            planetName.innerText = data[7].name;
            planetDesc.innerText = data[7].geology.content;
            rotation.innerText = data[7].rotation;
            revolution.innerText = data[7].revolution;
            radius.innerText = data[7].radius;
            temperature.innerText = data[7].temperature;
            source.href = data[7].geology.source;

            if (vw>1150) {
                planet.style.background = "url('/assets/geology-neptune.png'), url('/assets/planet-neptune.svg')";
                planet.style.backgroundSize = "163px 199px, 450px 450px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "450px";
                planet.style.width = "450px";
            }
            else if(vw<=1150 && vw>=660) {
                planet.style.background = "url('/assets/geology-neptune.png'), url('/assets/planet-neptune.svg')";
                planet.style.backgroundSize = "80px 93.25px, 285px 285px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "285px";
                planet.style.width = "285px";
            }
            else {
                planet.style.background = "url('/assets/geology-neptune.png'), url('/assets/planet-neptune.svg')";
                planet.style.backgroundSize = "50px 58.28px, 173px 173px";
                planet.style.backgroundRepeat = "no-repeat, no-repeat";
                planet.style.backgroundPosition = "50% 100%, center";
                planet.style.height = "173px";
                planet.style.width = "173px";
            }
        })
    })
}

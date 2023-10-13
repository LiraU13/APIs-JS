const UrlBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKey = "5eaddd48c582a4cfd16be105a9306e13";

const inputCity = document.querySelector('#city');
const btnBuscar = document.querySelector('#btnBuscar');

const fetchApi = url => fetch(url).then(response => response.json ());

async function getClima(lat, lon){
    const url = `${UrlBase}lat=${lat}&lon=${lon}&appid=${ ApiKey}`;
    console.log(url);
    const clima = await fetchApi(url);
    console.log(clima);
    const temperatura = clima.main.temp - 273.15;
    
    let emoji = "";
    if (temperatura > 25) {
        emoji = "🔥";
        document.body.style.backgroundColor = "rgb(255, 51, 0)";
    } else if (temperatura >= 15 && temperatura <= 25) {
        emoji = "☀️";
        document.body.style.backgroundColor = "rgb(255, 153, 0)";
    } else {
        emoji = "❄️";
        document.body.style.backgroundColor = "rgb(0, 81, 255)";
    }
    document.querySelector('#left h2').innerHTML = `${ clima.name } ${ emoji }`;
    document.querySelector('#left h3').innerHTML = `${ temperatura.toFixed(2) } °C`;
}

async function getClimaByCity(city){
    const url = `${ UrlBase }q=${ city }&appid=${ ApiKey }`;
    const clima = await fetchApi(url);
    console.log(clima);
    const temperatura = clima.main.temp - 273.15;
    
    let emoji = "";
    if (temperatura > 25) {
        emoji = "🔥";
        document.body.style.backgroundColor = "rgb(255, 51, 0)";
    } else if (temperatura >= 15 && temperatura <= 25) {
        emoji = "☀️";
        document.body.style.backgroundColor = "rgb(255, 153, 0)";
    } else {
        emoji = "❄️";
        document.body.style.backgroundColor = "rgb(0, 81, 255)";
    }
    document.querySelector('#left h2').innerHTML = `${ clima.name } ${ emoji }`;
    document.querySelector('#left h3').innerHTML = `${ temperatura.toFixed(2) } °C`;
}

navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat, lon);
    }
);

btnBuscar.addEventListener('click', () => {
    const city = inputCity.value;
    if (city) {
        getClimaByCity(city);
    }
});
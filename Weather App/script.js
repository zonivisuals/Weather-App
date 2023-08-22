const cityInput = document.getElementById("city-input")
const weatherImage = document.getElementById("weather-image")
const weatherBtn = document.getElementById("weather-btn")
const imgBox = document.getElementById("img-box")
const title = document.getElementById("title")
const regionName = document.getElementById("region-name")
const countryName = document.getElementById("county-name")
const celDegree = document.getElementById("c-degree")
const accessKey = "87485cbf1da84aa2aac123430231408"
let airQuality = "no"

weatherBtn.addEventListener("click", () => {
    generateWeather()
})

async function generateWeather() {
    let cityKey = cityInput.value;

    if (cityKey.length > 0) {
        let url = `http://api.weatherapi.com/v1/current.json?key=${accessKey}&q=${cityKey}&aqi=${airQuality}`;
        
        let response = await fetch(url)
        let data = await response.json()
        let results = data
        
        //showing weather details
        weatherImage.src = results.current.condition.icon
        imgBox.classList.add("show-img")
        regionName.textContent = results.location.region
        countryName.textContent = results.location.country
        celDegree.textContent = `${results.current.temp_c}°`

    }
}
    /*
    else{
        cityInput.classList.add('error')
        cityInput.style.borderColor = "red"
        setTimeout(() => {
            cityInput.classList.remove('error')
            cityInput.style.borderColor = "#0070BB"
        }, 600);
    }
}
*/

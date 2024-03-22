let apiKey = "7a6e979132b311f55ddf32e62b24d2b6" ;
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" ;
let city;
let userCity = document.getElementById("userText");
let temparature = document.getElementById("temp");
let ct = document.getElementById('city');
let humidity = document.getElementById("humidity");
let windInfo = document.getElementById("wind-info");
let weatherImage = document.querySelector(".weather_img");

async function getWeatherData() {
	if (userCity.value=="") {
		alert("Enter The City Name")
	}
	else{
		city = userCity.value ;
	    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city}&appid=${apiKey}`);
	}
		let data = await response.json();
		ct.innerHTML = data.name;
		temparature.innerHTML = Math.round(data.main.temp - 273.15)+"°C";
		humidity.innerHTML = data.main.humidity + "%";
		windInfo.innerHTML = data.wind.speed + "km/hr";
		userCity.value = " ";

		if(data.weather[0].main=="Clear"){
			weatherImage.src="https://cdn2.iconfinder.com/data/icons/weather-icons-8/512/day-clear-512.png";
		}else if(data.weather[0].main=="Snow"){
			weatherImage.src="https://c8.alamy.com/comp/DWDWPY/single-weather-icon-cloud-with-snow-and-rain-DWDWPY.jpg";	
		}
		else if(data.weather[0].main=="Clouds"){
			weatherImage.src="https://c8.alamy.com/comp/DWDWRA/single-weather-icon-cloud-with-snow-illustration-on-white-DWDWRA.jpg";	
		}
		else if(data.weather[0].main=="Drizzle"){
			weatherImage.src="https://static.vecteezy.com/system/resources/previews/007/388/708/non_2x/rain-with-sun-color-icon-sunny-and-rainy-weather-light-rain-drizzle-scattered-shower-cloud-sun-and-raindrops-weather-forecast-isolated-illustration-vector.jpg";	
		}
		else if(data.weather[0].main=="Mist"){
			weatherImage.src="https://www.clipartmax.com/png/middle/147-1478081_foggy-weather-icon-illustration.png";	
		}
		else if(data.weather[0].main=="Rain"){
			weatherImage.src="https://png.pngtree.com/png-vector/20210128/ourlarge/pngtree-thunderstorm-rainy-weather-png-image_2849609.jpg";	
		}
		console.log(data)
	}

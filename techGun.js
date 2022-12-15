const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "Your key",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  // cityName.innerHTML = city;
  if (city === "") {
    city = "Delhi";
  }
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("This is my response" + response.value);

      if (response.temp !== undefined) {
        //cloud_pct.innerHTML = response.cloud_pct;
        cityName.innerHTML = city;
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
      } else {
        cityName.innerHTML = "Please fill the correct name of the city";
        temp.innerHTML = "";
        temp2.innerHTML = "";
        feels_like.innerHTML = "";
        humidity.innerHTML = "";
        humidity2.innerHTML = "";
        min_temp.innerHTML = "";
        max_temp.innerHTML = "";
        wind_speed.innerHTML = "";
        wind_speed2.innerHTML = "";
        wind_degrees.innerHTML = "";
        sunrise.innerHTML = "";
        sunset.innerHTML = "";
      }
    })
    .catch((err) => {
      console.error("This is the error" + err);
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

//Fetch for Shanghai

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pctShanghai.innerHTML = response.cloud_pct;
    tempShanghai.innerHTML = response.temp;

    feels_likeShanghai.innerHTML = response.feels_like;
    humidityShanghai.innerHTML = response.humidity;

    min_tempShanghai.innerHTML = response.min_temp;
    max_tempShanghai.innerHTML = response.max_temp;
    wind_speedShanghai.innerHTML = response.wind_speed;

    wind_degreesShanghai.innerHTML = response.wind_degrees;
    sunriseShanghai.innerHTML = response.sunrise;
    sunsetShanghai.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

//Fetch for Boston
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pctBoston.innerHTML = response.cloud_pct;
    tempBoston.innerHTML = response.temp;

    feels_likeBoston.innerHTML = response.feels_like;
    humidityBoston.innerHTML = response.humidity;

    min_tempBoston.innerHTML = response.min_temp;
    max_tempBoston.innerHTML = response.max_temp;
    wind_speedBoston.innerHTML = response.wind_speed;

    wind_degreesBoston.innerHTML = response.wind_degrees;
    sunriseBoston.innerHTML = response.sunrise;
    sunsetBoston.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

//Fetch for Lucknow
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pctLucknow.innerHTML = response.cloud_pct;
    tempLucknow.innerHTML = response.temp;

    feels_likeLucknow.innerHTML = response.feels_like;
    humidityLucknow.innerHTML = response.humidity;

    min_tempLucknow.innerHTML = response.min_temp;
    max_tempLucknow.innerHTML = response.max_temp;
    wind_speedLucknow.innerHTML = response.wind_speed;

    wind_degreesLucknow.innerHTML = response.wind_degrees;
    sunriseLucknow.innerHTML = response.sunrise;
    sunsetLucknow.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

//Fetch for Kolkata
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pctKolkata.innerHTML = response.cloud_pct;
    tempKolkata.innerHTML = response.temp;

    feels_likeKolkata.innerHTML = response.feels_like;
    humidityKolkata.innerHTML = response.humidity;

    min_tempKolkata.innerHTML = response.min_temp;
    max_tempKolkata.innerHTML = response.max_temp;
    wind_speedKolkata.innerHTML = response.wind_speed;

    wind_degreesKolkata.innerHTML = response.wind_degrees;
    sunriseKolkata.innerHTML = response.sunrise;
    sunsetKolkata.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

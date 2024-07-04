navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const API_KEY = "api";

function onGeoOk(position){
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const City = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    City.innerText = data.name;
    weather.innerText = `/${data.weather[0].main}`;
  });
}

function onGeoError(){
  alert("cant find you");
}
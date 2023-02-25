//Geolocation, weather

const API_KEY = "ecac049f368fc4f5c5989492fcf32e5d";

//위치 받기 성공
function onGeo(position){
    
    const lat =position.coords.latitude;
    const lng =position.coords.longitude;
    console.log("I'm here",lat,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response =>response.json())
    .then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

//위치 받기 실패
function onGeoError(){
    alert("Can't find you.")
}
//geolocation (success, error) 작동
navigator.geolocation.getCurrentPosition(onGeo,onGeoError);
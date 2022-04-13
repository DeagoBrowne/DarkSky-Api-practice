window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.degree');
    console.log(temperatureDegree);
    let locationTimezone = document.querySelector('.location-timezone');




    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6455c881e41e8b1e3107d2d4ca8d00f7`;
                  
            fetch(api)
                .then(response =>{
                 return response.json();
             })
             .then(data =>{
                // Set DOM Elements from the API
                temperatureDegree.textContent = (data.main.temp - 273.15).toFixed(1);
                temperatureDescription.textContent = data.weather.description;
                locationTimezone.textContent = data.name;
             })
             });

           
    }
})
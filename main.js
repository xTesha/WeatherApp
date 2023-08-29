
function searchCity(event) {
    if (event.keyCode === 13) { 
    //dokumentacija
      const apikey = 'd3f4cfdc7687c509b30eb40156b9c53d';
      const cityname = document.querySelector('#cityname').value;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&lang=sr&appid=${apikey}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            //promenljive
            let inputCity = document.querySelector('.inputCity')
            let temp = document.querySelector('#temp')
            let mintemp = document.querySelector('#mintemp')
            let maxtemp = document.querySelector('#maxtemp')
            let feeling = document.querySelector('#feeling')
            let humidity = document.querySelector('#humidity')
            let pressure = document.querySelector('#pressure')
            let weather = document.querySelector('#weather')
            let brzinavetra = document.querySelector('#brzinavetra')
            let maxbrzinavetra = document.querySelector('#maxbrzinavetra')
            let pravac = document.querySelector('#pravac')
           
            //Ubacivanje promenljivih na html stranicu
            inputCity.innerText = data.name
            temp.innerText = data.main.temp + '°C'
            mintemp.innerText = data.main.temp_min + '°C'
            maxtemp.innerText = data.main.temp_max + '°C'
            feeling.innerText = data.main.feels_like + '°C'
            humidity.innerText = data.main.humidity + '%'
            pressure.innerText = data.main.pressure + 'bar'
            weather.innerText = data.weather[0].description
            brzinavetra.innerText = data.wind.speed + 'km/h'
            maxbrzinavetra.innerText = data.wind.gust + 'km/h'
            pravac.innerText = data.wind.deg + '°'
            

            console.log(data)
        })
        .catch(error => console.error(error));
    }
  }
  
  //Event listener za pretragu
  document.querySelector('#cityname').addEventListener('keydown', searchCity);
  
const results = document.querySelector("boxe");

const btn = document.querySelector("#form");


    const apiKey = '9d14fab5293af26cf8dc10b7ff26e891';
   
    
    function getWeatherByCityId(earth, appid) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=earth&appid=${apiKey}&units=metric`;
    console.log (`https://api.openweathermap.org/data/2.5/weather?q=earth&appid=${apiKey}&units=metric` )
    fetch(url)
      .then(response => response.json())
      .then(data => 
        (results.innerHTML = `<p>${data.temp}</p>`)
        (results.innerHTML = `<p>${data.feels}</p>`)
        (results.innerHTML = `<p>${data.humidity}</p>`)
        (results.innerHTML = `<p>${data.wind}</p>`)
      )

      .catch(error => console.error('Error:', error));
    }

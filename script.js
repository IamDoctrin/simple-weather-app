document.addEventListener("DOMContentLoaded", () => {
    const cityWeatherContainer = document.querySelector('.city-weather');
    const cities = ["New York", "London", "Tokyo", "Jakarta", "Stuttgart","Istanbul","Strasbourg","Budapest"];
    const apiKey = '0ae161083cfaca498302819e0ea3957e';

    cities.forEach(city => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const weatherCard = document.createElement('div');
                weatherCard.className = 'city-card';
                weatherCard.innerHTML = `
                    <h3>${city}</h3>
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
                    <p>Suhu: ${data.main.temp}°C</p>
                    <p>Angin: ${data.wind.speed} M/s</p>
                    <p>Kelembapan: ${data.main.humidity}%</p>
                    <p>${data.weather[0].description}</p>
                `;
                cityWeatherContainer.appendChild(weatherCard);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    });

    // Daftar kota di Indonesia
const indonesiaCities = [
  "Banda Aceh", "Medan", "Padang", "Pekanbaru", "Jambi", "Palembang",
  "Bengkulu", "Bandar Lampung", "Pangkal Pinang", "Tanjung Pinang",
  "Jakarta", "Bandung", "Semarang", "Yogyakarta", "Surabaya",
  "Serang", "Denpasar", "Mataram", "Kupang", "Pontianak",
  "Samarinda", "Palangkaraya", "Banjarmasin", "Manado", "Palu",
  "Kendari", "Gorontalo", "Mamuju", "Makassar", "Ambon",
  "Ternate", "Jayapura", "Sorong", "Payakumbuh",
  "Balikpapan", "Batam", "Cirebon", "Madiun", "Kediri", "Tasikmalaya",
  "Tegal", "Pekalongan", "Purwokerto", "Cilacap", "Kudus", "Salatiga",
  "Magelang", "Banyuwangi", "Jember", "Probolinggo", "Blitar", "Klaten",
  "Sukoharjo", "Karawang", "Cianjur", "Subang", "Purwakarta", "Garut",
  "Sumedang", "Majalengka", "Kuningan", "Indramayu", "Ciamis", "Banjar",
  "Pangandaran", "Brebes", "Pemalang", "Batang", "Kendal", "Demak", 
  "Jepara", "Pati", "Rembang", "Blora", "Grobogan", "Sragen",
  "Wonogiri", "Boyolali", "Klaten", "Sukoharjo", "Karanganyar", "Wonosobo"
];

    // Fungsi untuk mengambil data cuaca secara acak
    async function fetchRandomWeather() {
        const randomCities = [];
        while (randomCities.length < 16) {
            const randomIndex = Math.floor(Math.random() * indonesiaCities.length);
            const city = indonesiaCities[randomIndex];
            if (!randomCities.includes(city)) {
                randomCities.push(city);
            }
        }

        const weatherDataPromises = randomCities.map(city =>
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
                .then(response => response.json())
        );

        const weatherData = await Promise.all(weatherDataPromises);
        return weatherData;
    }

    // Tampilkan cuaca secara acak
    fetchRandomWeather().then(weatherData => {
        const randomWeatherContainer = document.createElement('div');
        randomWeatherContainer.className = 'random-weather';
        randomWeatherContainer.innerHTML = `
            <h2>Cuaca Terkini di Berbagai Kota di Indonesia</h2>
            <ul class="city-weather">
                ${weatherData.map(data => `
                    <li class="city-card">
                        <h3>${data.name}</h3>
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
                        <p>Suhu: ${data.main.temp}°C</p>
                        <p>${data.weather[0].description}</p>
                    </li>
                `).join('')}
            </ul>
        `;

        document.body.appendChild(randomWeatherContainer);
    });
});
  
  const cityInput = document.querySelector(".city-input");
  const searchButton = document.querySelector(".search-btn");
  const locationButton = document.querySelector(".location-btn");
  const currentWeatherDiv = document.querySelector(".current-weather");
  const weatherCardsDiv = document.querySelector(".weather-cards");
  
  const API_KEY = "0ae161083cfaca498302819e0ea3957e"; // API key diambil dari layanan OpenWeather
  
  const createWeatherCard = (cityName, weatherItem, index) => {
      if(index === 0) { // HTML untuk main weather
          return `<div class="details">
                      <h3>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h3>
                      <h5>Suhu: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h5>
                      <h5>Angin: ${weatherItem.wind.speed} M/Detik</h5>
                      <h5>Kelembapan: ${weatherItem.main.humidity}%</h5>
                  </div>
                  <div class="icon">
                      <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                      <h5>${weatherItem.weather[0].description}</h5>
                  </div>`;
      } else { // HTML untuk perkiraan cuaca 5 hari kedepan
          return `<li class="card">
                      <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
                      <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                      <h6>Suhu: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
                      <h6>Angin: ${weatherItem.wind.speed} M/Detik</h6>
                      <h6>Kelembapan: ${weatherItem.main.humidity}%</h6>
                  </li>`;
      }
  }
  
  const getWeatherDetails = (cityName, latitude, longitude) => {
      const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  
      fetch(WEATHER_API_URL).then(response => response.json()).then(data => {
          // menyaring agar hanya satu perkiraan cuaca per hari
          const uniqueForecastDays = [];
          const fiveDaysForecast = data.list.filter(forecast => {
              const forecastDate = new Date(forecast.dt_txt).getDate();
              if (!uniqueForecastDays.includes(forecastDate)) {
                  return uniqueForecastDays.push(forecastDate);
              }
          });
  
          //hapus info sebelumnya
          cityInput.value = "";
          currentWeatherDiv.innerHTML = "";
          weatherCardsDiv.innerHTML = "";
  
          // membuat kartu info cuaca dan menampilkannya
          fiveDaysForecast.forEach((weatherItem, index) => {
              const html = createWeatherCard(cityName, weatherItem, index);
              if (index === 0) {
                  currentWeatherDiv.insertAdjacentHTML("beforeend", html);
              } else {
                  weatherCardsDiv.insertAdjacentHTML("beforeend", html);
              }
          });        
      }).catch(() => {
          alert("Terjadi kesalahan ketika mengambil info perkiraan cuaca!");
      });   
  }
  
  const getCityCoordinates = () => {
      const cityName = cityInput.value.trim();
      if (cityName === "") {
          alert("Tolong masukkan nama Kota.");
          return;
      }
  
      const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
      
      fetch(API_URL)
          .then(response => response.json())
          .then(data => {
              if (!data.length) {
                  alert(`Tidak ada koordinat untuk ${cityName}`);
                  return;
              }
              const { lat, lon, name } = data[0];
              getWeatherDetails(name, lat, lon);
          })
          .catch(() => {
              alert("Error ketika mengambil koordinat!");
          });
  }
  
  const getUserCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
          position => {
              const { latitude, longitude } = position.coords; // mengambil posisi koordinat kita
              // mendapatkan nama kota berdasarkan koordinat menggunakan database API OpenWeather
              const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
              fetch(API_URL).then(response => response.json()).then(data => {
                  const { name } = data[0];
                  getWeatherDetails(name, latitude, longitude);
              }).catch(() => {
                  alert("Error terjadi ketika memproses nama kota!");
              });
          },
          error => { //peringatan jika akses lokasi ditolak
              if (error.code === error.PERMISSION_DENIED) {
                  alert("Akses lokasi ditolak. Reset izin akses lokasi dan coba lagi.");
              } else {
                  alert("Akses lokasi ditolak. Tolong reset izin akses lokasi.");
              }
          });
  }
  
  locationButton.addEventListener("click", getUserCoordinates);
  searchButton.addEventListener("click", getCityCoordinates);
  cityInput.addEventListener("keyup", e => e.key === "Enter" && getCityCoordinates());
  
import data from './data.js';

function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const options = {
    timeZone: 'America/Toronto',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  timeElement.textContent = now.toLocaleTimeString('en-US', options);
}

setInterval(updateTime, 1000);
updateTime();

// Weather icon and text setup
const weatherIcon = document.getElementById('weather-icon');
const weatherText = document.getElementById('weather-text');

// Example weather icon URL for "clear sky" from OpenWeatherMap
const iconUrl = 'https://openweathermap.org/img/wn/01d@2x.png';

weatherIcon.src = iconUrl;
weatherIcon.style.display = 'inline-block';
weatherText.textContent = 'Mostly clear, 16°C';

// Search functionality
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');

searchInput.addEventListener('input', () => {
  const term = searchInput.value.trim().toLowerCase();
  resultsContainer.innerHTML = '';

  if (term === '') return;

  const matches = data.filter(item =>
    item.phrase.toLowerCase().includes(term)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  matches.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('result-card');
    div.innerHTML = `
      <h3>${item.phrase}</h3>
      <p><strong>Meaning:</strong> ${item.meaning}</p>
      <p><strong>Example:</strong> ${item.example}</p>
    `;
    resultsContainer.appendChild(div);
  });
});

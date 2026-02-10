/**
 * Weather Forecast App (Vanilla JavaScript)
 * ==========================================
 * A modern, responsive weather application using OpenWeatherMap API.
 * Features: Real-time data, city search, dynamic icons, and comprehensive weather details.
 */

// ========================================
// DOM Element References
// ========================================
const form = document.getElementById("search-form");
const input = document.getElementById("city-input");
const clearBtn = document.getElementById("clear-btn");
const message = document.getElementById("message");
const loader = document.getElementById("loader");
const weatherSection = document.getElementById("weather");

// Weather display elements
const temperatureEl = document.getElementById("temperature");
const conditionEl = document.getElementById("condition");
const locationEl = document.getElementById("location");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const iconEl = document.getElementById("weather-icon");
const pressureEl = document.getElementById("pressure");
const visibilityEl = document.getElementById("visibility");
const feelsLikeEl = document.getElementById("feels-like");
const cloudsEl = document.getElementById("clouds");
const sunriseEl = document.getElementById("sunrise");
const sunsetEl = document.getElementById("sunset");
const currentDateEl = document.getElementById("current-date");
const currentTimeEl = document.getElementById("current-time");

// ========================================
// Dummy Weather Data for Indian Cities
// ========================================
// Mock data for demonstration - No API required!
const weatherDatabase = {
  // Odisha Cities
  "bhubaneswar": {
    name: "Bhubaneswar",
    country: "IN",
    temp: 32,
    feels_like: 36,
    humidity: 65,
    pressure: 1008,
    wind_speed: 4.2,
    visibility: 8,
    clouds: 40,
    condition: "Partly Cloudy",
    description: "scattered clouds",
    icon: "03d",
    sunrise: 6 * 3600 + 15 * 60, // 6:15 AM
    sunset: 17 * 3600 + 45 * 60, // 5:45 PM
    timezone: 19800 // IST +5:30
  },
  "cuttack": {
    name: "Cuttack",
    country: "IN",
    temp: 31,
    feels_like: 35,
    humidity: 70,
    pressure: 1009,
    wind_speed: 3.8,
    visibility: 7,
    clouds: 55,
    condition: "Cloudy",
    description: "broken clouds",
    icon: "04d",
    sunrise: 6 * 3600 + 14 * 60,
    sunset: 17 * 3600 + 46 * 60,
    timezone: 19800
  },
  "puri": {
    name: "Puri",
    country: "IN",
    temp: 29,
    feels_like: 33,
    humidity: 80,
    pressure: 1010,
    wind_speed: 5.5,
    visibility: 10,
    clouds: 25,
    condition: "Clear",
    description: "clear sky",
    icon: "01d",
    sunrise: 6 * 3600 + 12 * 60,
    sunset: 17 * 3600 + 48 * 60,
    timezone: 19800
  },
  "rourkela": {
    name: "Rourkela",
    country: "IN",
    temp: 34,
    feels_like: 38,
    humidity: 55,
    pressure: 1006,
    wind_speed: 3.2,
    visibility: 9,
    clouds: 20,
    condition: "Sunny",
    description: "few clouds",
    icon: "02d",
    sunrise: 6 * 3600 + 18 * 60,
    sunset: 17 * 3600 + 42 * 60,
    timezone: 19800
  },
  "berhampur": {
    name: "Berhampur",
    country: "IN",
    temp: 30,
    feels_like: 34,
    humidity: 75,
    pressure: 1011,
    wind_speed: 4.0,
    visibility: 8,
    clouds: 45,
    condition: "Partly Cloudy",
    description: "scattered clouds",
    icon: "03d",
    sunrise: 6 * 3600 + 10 * 60,
    sunset: 17 * 3600 + 50 * 60,
    timezone: 19800
  },
  "sambalpur": {
    name: "Sambalpur",
    country: "IN",
    temp: 33,
    feels_like: 37,
    humidity: 60,
    pressure: 1007,
    wind_speed: 2.8,
    visibility: 10,
    clouds: 30,
    condition: "Clear",
    description: "clear sky",
    icon: "01d",
    sunrise: 6 * 3600 + 20 * 60,
    sunset: 17 * 3600 + 40 * 60,
    timezone: 19800
  },
  "balasore": {
    name: "Balasore",
    country: "IN",
    temp: 28,
    feels_like: 32,
    humidity: 78,
    pressure: 1012,
    wind_speed: 4.5,
    visibility: 9,
    clouds: 60,
    condition: "Cloudy",
    description: "broken clouds",
    icon: "04d",
    sunrise: 6 * 3600 + 8 * 60,
    sunset: 17 * 3600 + 52 * 60,
    timezone: 19800
  },
  "angul": {
    name: "Angul",
    country: "IN",
    temp: 31,
    feels_like: 34,
    humidity: 62,
    pressure: 1008,
    wind_speed: 3.0,
    visibility: 10,
    clouds: 35,
    condition: "Partly Cloudy",
    description: "scattered clouds",
    icon: "03d",
    sunrise: 6 * 3600 + 16 * 60,
    sunset: 17 * 3600 + 44 * 60,
    timezone: 19800
  },
  "jharsuguda": {
    name: "Jharsuguda",
    country: "IN",
    temp: 35,
    feels_like: 39,
    humidity: 50,
    pressure: 1005,
    wind_speed: 2.5,
    visibility: 10,
    clouds: 15,
    condition: "Sunny",
    description: "clear sky",
    icon: "01d",
    sunrise: 6 * 3600 + 22 * 60,
    sunset: 17 * 3600 + 38 * 60,
    timezone: 19800
  },
  "konark": {
    name: "Konark",
    country: "IN",
    temp: 28,
    feels_like: 31,
    humidity: 82,
    pressure: 1011,
    wind_speed: 6.0,
    visibility: 10,
    clouds: 20,
    condition: "Clear",
    description: "clear sky",
    icon: "01d",
    sunrise: 6 * 3600 + 11 * 60,
    sunset: 17 * 3600 + 49 * 60,
    timezone: 19800
  },
  // Other Major Indian Cities
  "delhi": {
    name: "Delhi",
    country: "IN",
    temp: 28,
    feels_like: 30,
    humidity: 45,
    pressure: 1012,
    wind_speed: 3.5,
    visibility: 6,
    clouds: 50,
    condition: "Haze",
    description: "haze",
    icon: "50d",
    sunrise: 6 * 3600 + 45 * 60,
    sunset: 18 * 3600 + 10 * 60,
    timezone: 19800
  },
  "mumbai": {
    name: "Mumbai",
    country: "IN",
    temp: 30,
    feels_like: 34,
    humidity: 72,
    pressure: 1010,
    wind_speed: 4.8,
    visibility: 8,
    clouds: 40,
    condition: "Partly Cloudy",
    description: "scattered clouds",
    icon: "03d",
    sunrise: 6 * 3600 + 55 * 60,
    sunset: 18 * 3600 + 25 * 60,
    timezone: 19800
  },
  "kolkata": {
    name: "Kolkata",
    country: "IN",
    temp: 31,
    feels_like: 36,
    humidity: 68,
    pressure: 1009,
    wind_speed: 4.0,
    visibility: 7,
    clouds: 55,
    condition: "Cloudy",
    description: "broken clouds",
    icon: "04d",
    sunrise: 6 * 3600 + 5 * 60,
    sunset: 17 * 3600 + 35 * 60,
    timezone: 19800
  },
  "chennai": {
    name: "Chennai",
    country: "IN",
    temp: 33,
    feels_like: 38,
    humidity: 70,
    pressure: 1008,
    wind_speed: 5.2,
    visibility: 9,
    clouds: 30,
    condition: "Clear",
    description: "few clouds",
    icon: "02d",
    sunrise: 6 * 3600 + 20 * 60,
    sunset: 18 * 3600 + 5 * 60,
    timezone: 19800
  },
  "bangalore": {
    name: "Bangalore",
    country: "IN",
    temp: 26,
    feels_like: 28,
    humidity: 55,
    pressure: 1015,
    wind_speed: 3.2,
    visibility: 10,
    clouds: 35,
    condition: "Pleasant",
    description: "scattered clouds",
    icon: "03d",
    sunrise: 6 * 3600 + 30 * 60,
    sunset: 18 * 3600 + 15 * 60,
    timezone: 19800
  },
  "hyderabad": {
    name: "Hyderabad",
    country: "IN",
    temp: 32,
    feels_like: 35,
    humidity: 50,
    pressure: 1010,
    wind_speed: 3.8,
    visibility: 10,
    clouds: 25,
    condition: "Clear",
    description: "clear sky",
    icon: "01d",
    sunrise: 6 * 3600 + 35 * 60,
    sunset: 18 * 3600 + 10 * 60,
    timezone: 19800
  },
  "jaipur": {
    name: "Jaipur",
    country: "IN",
    temp: 30,
    feels_like: 32,
    humidity: 40,
    pressure: 1011,
    wind_speed: 4.5,
    visibility: 10,
    clouds: 20,
    condition: "Sunny",
    description: "clear sky",
    icon: "01d",
    sunrise: 6 * 3600 + 50 * 60,
    sunset: 18 * 3600 + 20 * 60,
    timezone: 19800
  },
  "lucknow": {
    name: "Lucknow",
    country: "IN",
    temp: 29,
    feels_like: 32,
    humidity: 55,
    pressure: 1010,
    wind_speed: 3.0,
    visibility: 7,
    clouds: 45,
    condition: "Haze",
    description: "haze",
    icon: "50d",
    sunrise: 6 * 3600 + 30 * 60,
    sunset: 17 * 3600 + 55 * 60,
    timezone: 19800
  },
  "visakhapatnam": {
    name: "Visakhapatnam",
    country: "IN",
    temp: 30,
    feels_like: 34,
    humidity: 74,
    pressure: 1010,
    wind_speed: 5.0,
    visibility: 10,
    clouds: 30,
    condition: "Clear",
    description: "few clouds",
    icon: "02d",
    sunrise: 6 * 3600 + 8 * 60,
    sunset: 17 * 3600 + 50 * 60,
    timezone: 19800
  },
  "ahmedabad": {
    name: "Ahmedabad",
    country: "IN",
    temp: 34,
    feels_like: 36,
    humidity: 35,
    pressure: 1009,
    wind_speed: 4.2,
    visibility: 10,
    clouds: 10,
    condition: "Sunny",
    description: "clear sky",
    icon: "01d",
    sunrise: 7 * 3600 + 0 * 60,
    sunset: 18 * 3600 + 30 * 60,
    timezone: 19800
  }
};

// List of available cities for suggestions
const availableCities = Object.keys(weatherDatabase).map(key => weatherDatabase[key].name);

// ========================================
// Event Listeners
// ========================================

/**
 * Form submission handler - triggers weather fetch
 */
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = input.value.trim();

  // Validate input - show error for empty input
  if (!city) {
    showMessage("Please enter a city name.", "error");
    weatherSection.classList.add("hidden");
    return;
  }

  await fetchWeather(city);
});

/**
 * Input event handler - toggles clear button visibility
 */
input.addEventListener("input", () => {
  clearBtn.classList.toggle("hidden", !input.value);
});

/**
 * Clear button handler - clears input and hides button
 */
clearBtn.addEventListener("click", () => {
  input.value = "";
  clearBtn.classList.add("hidden");
  input.focus();
});

// ========================================
// Core Functions
// ========================================

/**
 * Fetches weather data from local dummy database
 * No API required - works offline!
 * @param {string} city - City name to fetch weather for
 */
async function fetchWeather(city) {
  // Show loading state
  showMessage("", "");
  loader.classList.remove("hidden");
  weatherSection.classList.add("hidden");

  // Simulate network delay for realistic feel
  await new Promise(resolve => setTimeout(resolve, 500));

  // Normalize city name for lookup (lowercase, trim)
  const cityKey = city.toLowerCase().trim();
  
  // Check if city exists in our database, otherwise generate random data
  let data = weatherDatabase[cityKey];
  
  if (!data) {
    // Generate random weather data for unknown cities
    data = generateRandomWeather(city);
  }

  // Hide loader and update UI with data
  loader.classList.add("hidden");
  updateUI(data);
  showMessage("", "");
}

/**
 * Known cities with their country codes for better detection
 */
const worldCities = {
  // Europe
  "london": { country: "UK", timezone: 0 },
  "paris": { country: "FR", timezone: 3600 },
  "berlin": { country: "DE", timezone: 3600 },
  "madrid": { country: "ES", timezone: 3600 },
  "rome": { country: "IT", timezone: 3600 },
  "amsterdam": { country: "NL", timezone: 3600 },
  "vienna": { country: "AT", timezone: 3600 },
  "prague": { country: "CZ", timezone: 3600 },
  "moscow": { country: "RU", timezone: 10800 },
  "lisbon": { country: "PT", timezone: 0 },
  "barcelona": { country: "ES", timezone: 3600 },
  "munich": { country: "DE", timezone: 3600 },
  "zurich": { country: "CH", timezone: 3600 },
  "stockholm": { country: "SE", timezone: 3600 },
  "oslo": { country: "NO", timezone: 3600 },
  "copenhagen": { country: "DK", timezone: 3600 },
  "dublin": { country: "IE", timezone: 0 },
  "brussels": { country: "BE", timezone: 3600 },
  "warsaw": { country: "PL", timezone: 3600 },
  "athens": { country: "GR", timezone: 7200 },
  // Americas
  "new york": { country: "US", timezone: -18000 },
  "los angeles": { country: "US", timezone: -28800 },
  "chicago": { country: "US", timezone: -21600 },
  "houston": { country: "US", timezone: -21600 },
  "miami": { country: "US", timezone: -18000 },
  "san francisco": { country: "US", timezone: -28800 },
  "seattle": { country: "US", timezone: -28800 },
  "boston": { country: "US", timezone: -18000 },
  "washington": { country: "US", timezone: -18000 },
  "toronto": { country: "CA", timezone: -18000 },
  "vancouver": { country: "CA", timezone: -28800 },
  "montreal": { country: "CA", timezone: -18000 },
  "mexico city": { country: "MX", timezone: -21600 },
  "sao paulo": { country: "BR", timezone: -10800 },
  "rio de janeiro": { country: "BR", timezone: -10800 },
  "buenos aires": { country: "AR", timezone: -10800 },
  // Asia
  "tokyo": { country: "JP", timezone: 32400 },
  "beijing": { country: "CN", timezone: 28800 },
  "shanghai": { country: "CN", timezone: 28800 },
  "hong kong": { country: "HK", timezone: 28800 },
  "singapore": { country: "SG", timezone: 28800 },
  "bangkok": { country: "TH", timezone: 25200 },
  "seoul": { country: "KR", timezone: 32400 },
  "dubai": { country: "AE", timezone: 14400 },
  "istanbul": { country: "TR", timezone: 10800 },
  "kuala lumpur": { country: "MY", timezone: 28800 },
  "jakarta": { country: "ID", timezone: 25200 },
  "manila": { country: "PH", timezone: 28800 },
  "taipei": { country: "TW", timezone: 28800 },
  // Oceania
  "sydney": { country: "AU", timezone: 39600 },
  "melbourne": { country: "AU", timezone: 39600 },
  "auckland": { country: "NZ", timezone: 43200 },
  "perth": { country: "AU", timezone: 28800 },
  // Africa
  "cairo": { country: "EG", timezone: 7200 },
  "johannesburg": { country: "ZA", timezone: 7200 },
  "lagos": { country: "NG", timezone: 3600 },
  "nairobi": { country: "KE", timezone: 10800 },
  "cape town": { country: "ZA", timezone: 7200 },
  // Middle East
  "riyadh": { country: "SA", timezone: 10800 },
  "doha": { country: "QA", timezone: 10800 },
  "abu dhabi": { country: "AE", timezone: 14400 },
  "tel aviv": { country: "IL", timezone: 7200 },
  "tehran": { country: "IR", timezone: 12600 }
};

/**
 * Generates random weather data for cities not in database
 * @param {string} cityName - Name of the city
 * @returns {Object} - Generated weather data
 */
function generateRandomWeather(cityName) {
  // Random weather conditions
  const conditions = [
    { condition: "Clear", description: "clear sky", icon: "01d" },
    { condition: "Sunny", description: "sunny", icon: "01d" },
    { condition: "Partly Cloudy", description: "few clouds", icon: "02d" },
    { condition: "Cloudy", description: "scattered clouds", icon: "03d" },
    { condition: "Overcast", description: "broken clouds", icon: "04d" },
    { condition: "Light Rain", description: "light rain", icon: "10d" },
    { condition: "Rainy", description: "moderate rain", icon: "10d" },
    { condition: "Thunderstorm", description: "thunderstorm", icon: "11d" },
    { condition: "Misty", description: "mist", icon: "50d" },
    { condition: "Haze", description: "haze", icon: "50d" }
  ];

  // Pick random condition
  const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
  
  // Generate random but realistic values
  const temp = Math.floor(Math.random() * 20) + 15; // 15-35°C
  const humidity = Math.floor(Math.random() * 40) + 40; // 40-80%
  const feelsLikeOffset = Math.floor(Math.random() * 6) - 2; // -2 to +4
  
  // Format city name properly (capitalize first letter of each word)
  const formattedName = cityName
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  // Check if city is in world cities database for correct country
  const cityKey = cityName.toLowerCase().trim();
  const cityInfo = worldCities[cityKey];
  const country = cityInfo ? cityInfo.country : ""; // Empty if unknown
  const timezone = cityInfo ? cityInfo.timezone : 0;

  return {
    name: formattedName,
    country: country,
    temp: temp,
    feels_like: temp + feelsLikeOffset,
    humidity: humidity,
    pressure: Math.floor(Math.random() * 15) + 1005, // 1005-1020 hPa
    wind_speed: (Math.random() * 6 + 1).toFixed(1), // 1-7 m/s
    visibility: Math.floor(Math.random() * 5) + 6, // 6-10 km
    clouds: Math.floor(Math.random() * 80) + 10, // 10-90%
    condition: randomCondition.condition,
    description: randomCondition.description,
    icon: randomCondition.icon,
    sunrise: 6 * 3600 + Math.floor(Math.random() * 30) * 60, // 6:00-6:30 AM
    sunset: 17 * 3600 + 30 * 60 + Math.floor(Math.random() * 60) * 60, // 5:30-6:30 PM
    timezone: timezone
  };
}

/**
 * Updates all UI elements with weather data
 * @param {Object} data - Weather data from database
 */
function updateUI(data) {
  // Update main weather display
  temperatureEl.innerHTML = `${Math.round(data.temp)}<span class="unit">°C</span>`;
  conditionEl.textContent = capitalizeWords(data.description);
  // Show city name with country if available, otherwise just city name
  locationEl.textContent = data.country ? `${data.name}, ${data.country}` : data.name;

  // Update weather details
  humidityEl.textContent = `${data.humidity}%`;
  windEl.textContent = `${data.wind_speed} m/s`;
  pressureEl.textContent = `${data.pressure} hPa`;
  visibilityEl.textContent = `${data.visibility} km`;
  feelsLikeEl.textContent = `${Math.round(data.feels_like)}°C`;
  cloudsEl.textContent = `${data.clouds}%`;

  // Update sunrise and sunset times
  sunriseEl.textContent = formatTime(data.sunrise, data.timezone);
  sunsetEl.textContent = formatTime(data.sunset, data.timezone);

  // Update date and time
  updateDateTime(data.timezone);

  // Set weather icon from OpenWeatherMap
  if (data.icon) {
    iconEl.src = `https://openweathermap.org/img/wn/${data.icon}@4x.png`;
    iconEl.alt = data.condition;
  }

  // Show weather section with animation
  weatherSection.classList.remove("hidden");
}

/**
 * Displays status messages to the user
 * @param {string} text - Message text to display
 * @param {string} type - Message type: 'error', 'success', or empty
 */
function showMessage(text, type) {
  message.textContent = text;
  message.classList.remove("error", "success");
  
  if (type) {
    message.classList.add(type);
  }
}

// ========================================
// Utility Functions
// ========================================

/**
 * Capitalizes the first letter of each word
 * @param {string} str - String to capitalize
 * @returns {string} - Capitalized string
 */
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Formats Unix timestamp to readable time (HH:MM AM/PM)
 * @param {number} timestamp - Unix timestamp in seconds
 * @param {number} timezone - Timezone offset in seconds
 * @returns {string} - Formatted time string
 */
function formatTime(timestamp, timezone) {
  // Convert to milliseconds and adjust for timezone
  const date = new Date((timestamp + timezone) * 1000);
  
  // Get UTC hours and minutes (since we already adjusted for timezone)
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  
  // Convert to 12-hour format
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  
  return `${hours}:${minutes} ${ampm}`;
}

/**
 * Updates the current date and time display
 * @param {number} timezone - Timezone offset in seconds
 */
function updateDateTime(timezone) {
  const now = new Date();
  // Adjust for timezone offset
  const localTime = new Date(now.getTime() + timezone * 1000);
  
  // Format date
  const options = { weekday: "short", month: "short", day: "numeric" };
  currentDateEl.textContent = localTime.toLocaleDateString("en-US", options);
  
  // Format time
  let hours = localTime.getUTCHours();
  const minutes = localTime.getUTCMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  currentTimeEl.textContent = `${hours}:${minutes} ${ampm}`;
}

// ========================================
// Initialize App
// ========================================

/**
 * Optional: Load weather for a default city on page load
 * Uncomment the line below to enable this feature
 */
// fetchWeather("London");

/**
 * Focus the search input on page load for better UX
 * Load default city (Bhubaneswar) on startup
 */
document.addEventListener("DOMContentLoaded", () => {
  input.focus();
  // Show weather for Bhubaneswar by default
  fetchWeather("Bhubaneswar");
});

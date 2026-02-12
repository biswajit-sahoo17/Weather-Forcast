PROJECT OVERVIEW

The Weather Forecast Web Application is a modern, responsive, and intuitive web platform that provides real-time weather information for multiple Indian cities (including several cities from Odisha). Developed as a second-semester academic project, it demonstrates core front‑end concepts such as dynamic DOM manipulation, localStorage theming, and modular JavaScript — all without relying on external API calls.

The system uses a predefined weather database (JavaScript object), making it perfect for offline demonstration, academic evaluation, and beginner-friendly learning.

✨ Features

✔ City‑Based Weather Search – Instantly fetch weather details for any supported city.

✔ Comprehensive Weather Data – Temperature, condition, humidity, wind speed, pressure, visibility, cloud %, sunrise & sunset.

✔ Dynamic Weather Icons – Visual representation of weather conditions.

✔ Dark / Light Theme Toggle – Switch themes with persistent preference stored in localStorage.

✔ Fully Responsive – Optimized for desktops, tablets, and mobile devices.

✔ Multi‑Page Navigation – Home, Features, About, and Developers pages.

✔ Error Handling – Clear feedback when a city is not found.

✔ Animated UI – Smooth animations and transitions for better user experience.

🛠️ Technology Stack

Technology---------------------Purpose

HTML5-------------------------Semantic page structure & content

CSS3---------------------------Styling, animations, responsive design

JavaScript---------------------(Vanilla)	DOM manipulation, weather logic, theme switching

LocalStorage------------------Persisting user theme preference

No external APIs – All weather data is stored locally in a JavaScript object.

📁 Project Structure

Weather-Forcast/

├── index.html----------# Home page (weather search & display)

├── features.html-------# Features overview

├── about.html----------# About the project

├── developers.html-----# Team information

├── style.css-----------# Main stylesheet (light/dark themes, responsive)

├── script.js-----------# Core logic (search, display, theme, error handling)

├── README.md-----------# Project documentation

└── assets/-------------# (Optional) Images, icons, etc.

🚀 Getting Started

Prerequisites

A modern web browser (Chrome, Firefox, Edge, Safari)

No server or API key required – just open the HTML files!

Installation

1.Clone the repository

git clone https://github.com/biswajit-sahoo17/Weather-Forcast.git

2.Navigate to the project folder

cd Weather-Forcast

Open index.html

Double‑click the file or use a local development server (e.g., Live Server for VS Code).

🎯 Key Modules

1. User Interface Module

   Clean, modern layout with animated background, smooth cards, and responsive navigation bar.

2. Search Module

   Input validation, clear button, and intelligent error messaging for unsupported cities.

3. Weather Display Module

   Dynamically shows temperature (°C), condition, humidity, pressure, wind speed, visibility, cloud %, sunrise, and sunset.

4. Theme Management Module

   Dark/light mode toggle with automatic system preference detection. User choice is saved across sessions via localStorage.

5. Information Pages

   Features: Highlights all capabilities.

   About: Describes project motivation and scope.

   Developers: Credits the team members and their contributions.

✅ Advantages & Limitations

🟢 Advantages

Zero API dependency – Works offline, perfect for academic evaluation.

Blazing fast – No network latency, instant results.

Clean and intuitive UI – Easy to navigate for all age groups.

Academic friendly – Demonstrates core front‑end concepts without complexity.

Cross‑browser compatible – Tested on all modern browsers.

🔴 Limitations

Static weather data – Limited to predefined cities (no live updates).

Current weather only – No hourly or 7‑day forecast.

City list is fixed – Users cannot add new cities dynamically.

🔮 Future Enhancements

🌍 Integration with real‑time weather APIs (OpenWeatherMap, WeatherAPI)

📅 7‑day forecast and hourly breakdown

📍 Geolocation – Auto‑detect user’s city

🌫️ Air Quality Index (AQI) display

🌐 Multi‑language support

⚠️ Weather alerts and notifications

👥 Developers

This project was developed as part of the Semester Academic Project by:

Hirachand Barik - Lead Developer[Project Planning, Core Development, System Integration]

Biswajit Sahoo – Backend Developer[Application Logic, Data Processing, Testing]

Sunil Baral - UI/UX Designer[UI Design, Feature Implementation, Documentation]


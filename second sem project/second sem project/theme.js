/**
 * Theme Toggle Functionality
 * Handles dark/light theme switching with localStorage persistence
 */

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Theme constants
const THEME_KEY = 'weather-app-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

/**
 * Initialize theme from localStorage or system preference
 */
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? DARK_THEME : LIGHT_THEME);
  }
}

/**
 * Set the theme and update UI
 * @param {string} theme - 'dark' or 'light'
 */
function setTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  
  // Update toggle button appearance
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', 
      theme === DARK_THEME ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }
}

/**
 * Toggle between dark and light themes
 */
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
  setTheme(newTheme);
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
  if (mobileMenu && mobileMenuBtn) {
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  }
}

// Event Listeners
if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (mobileMenu && mobileMenuBtn) {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    }
  }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem(THEME_KEY)) {
    setTheme(e.matches ? DARK_THEME : LIGHT_THEME);
  }
});

// Initialize theme on page load
initTheme();

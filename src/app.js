// src/app.js

import { header } from './components/header.js';
import { footer } from './components/footer.js';
import { plantList } from './components/plantList.js';
import { aboutPage } from './components/about.js';
import { contactPage } from './components/contact.js';

// Load header and footer on initial page load
function loadInitialPage() {
  document.getElementById('header').innerHTML = header();  // Load header content
  document.getElementById('footer').innerHTML = footer();  // Load footer content
  loadHomePage(); // Load the Home Page content by default
}

// Function to load the Home page content
function loadHomePage() {
  document.getElementById('content').innerHTML = `
    <section class="py-4">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <!-- Left side: Title and Description -->
        <div class=" text-center md:text-left flex-1">
          <h2 class="hhome font-bold text-[#44542B]">Welcome To Green Heaven</h2>
          <p class="phome mt-3 text-gray-700 font-josefin">"Welcome to Green Heaven, your sanctuary for all things plants! Our mission is to help plant enthusiasts and beginners alike nurture their green companions.
           At Green Heaven, you’ll find expert tips on watering, sunlight, soil types, and more, along with guidance for keeping your indoor and outdoor plants thriving.
          Let us help you create a lush, peaceful haven in your home or garden, one plant at a time. Dive into our resources, and let’s grow together!"</p>
        </div>
        <!-- Right side: Image -->
        <div class="flex-shrink-0">
          <img src="https://i.pinimg.com/736x/e8/e1/7a/e8e17aecbb6125a0a3491ad961827b2a.jpg" alt="Plants" class="h-[600px] mt-12 object-cover rounded-lg shadow-lg">
        </div>
      </div>
    </section>


     <div class=" text-center md:text-left flex-1">
          <h2 class="hhome font-bold text-[#44542B]">Our Workshop</h2>
          <p class="phome mt-3 text-gray-700 font-josefin">"Our Workshop is dedicated to helping you nurture and care for your plants. 
          Whether you're a beginner or an experienced plant lover, we provide expert advice and personalized solutions to ensure your plants thrive. 
          From choosing the right plants for your space to offering tips on watering, lighting, and maintenance, we're here to support you every step of the way. 
          Let us help you create a flourishing garden and bring nature into your home with ease and confidence."</p>
        </div>


        <!-- New Section with 4 Images -->
    <section class="imghome py-12">
      <div class="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Image 1 -->
        <div class="flex justify-center">
          <img src="https://i.pinimg.com/736x/d9/26/20/d926203966edef306fc90dd61f16e809.jpg" alt="Image 1" class="h-60 w-full object-cover rounded-lg shadow-lg">
        </div>
        <!-- Image 2 -->
        <div class="flex justify-center">
          <img src="https://i.pinimg.com/736x/54/41/44/5441447f3e9ff7468b8631cc46197800.jpg" alt="Image 2" class="h-60 w-full object-cover rounded-lg shadow-lg">
        </div>
        <!-- Image 3 -->
        <div class="flex justify-center">
          <img src="https://i.pinimg.com/736x/4c/75/fd/4c75fd3c1d1129ad044737128485a827.jpg" alt="Image 3" class="h-60 w-full object-cover rounded-lg shadow-lg">
        </div>
         <!-- Image 4 -->
        <div class="flex justify-center">
          <img src="https://i.pinimg.com/736x/45/0f/eb/450feb1da3d4705e5d3d6b3dac504495.jpg" alt="Image 3" class="h-60 w-full object-cover rounded-lg shadow-lg">
        </div>
      </div>
    </section>


  `;
}

// Function to load the Plant List page
function loadPlantListPage() {
  document.getElementById('content').innerHTML = plantList();  // Load plant list content
}

// Function to load the About page
function loadAboutPage() {
  document.getElementById('content').innerHTML = aboutPage();  // Load about page content
}

// Function to load the Contact Us page
function loadContactPage() {
  document.getElementById('content').innerHTML = contactPage();  // Load contact page content
}

// Attach event listeners for navigation
function setupNavigation() {
  // Get navbar links and attach event listeners to load the relevant page
  const homeLink = document.getElementById('homeLink');
  const plantsLink = document.getElementById('plantsLink');
  const aboutLink = document.getElementById('aboutLink');
  const contactLink = document.getElementById('contactLink');

  // Home link navigation
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();  // Prevent default behavior
      loadHomePage();  // Load home content
    });
  }

  // Plants link navigation
  if (plantsLink) {
    plantsLink.addEventListener('click', (e) => {
      e.preventDefault();  // Prevent default behavior
      loadPlantListPage();  // Load plant list content
    });
  }

  // About link navigation
  if (aboutLink) {
    aboutLink.addEventListener('click', (e) => {
      e.preventDefault();  // Prevent default behavior
      loadAboutPage();  // Load about page content
    });
  }

  // Contact Us link navigation
  if (contactLink) {
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();  // Prevent default behavior
      loadContactPage();  // Load contact page content
    });
  }

  // Mobile Menu Toggle (Optional)
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const nav = document.querySelector('nav ul');
      if (nav) {
        nav.classList.toggle('hidden');
      }
    });
  }
}

// Initialize the page and set up navigation when the window loads
window.onload = () => {
  loadInitialPage();
  setupNavigation();  // Set up navigation links after the initial page is loaded
};





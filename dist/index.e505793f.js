function e(){document.getElementById("content").innerHTML=`
    <section class="py-4">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <!-- Left side: Title and Description -->
        <div class=" text-center md:text-left flex-1">
          <h2 class="hhome font-bold text-[#44542B]">Welcome To Green Heaven</h2>
          <p class="phome mt-3 text-gray-700 font-josefin">"Welcome to Green Heaven, your sanctuary for all things plants! Our mission is to help plant enthusiasts and beginners alike nurture their green companions.
           At Green Heaven, you\u{2019}ll find expert tips on watering, sunlight, soil types, and more, along with guidance for keeping your indoor and outdoor plants thriving.
          Let us help you create a lush, peaceful haven in your home or garden, one plant at a time. Dive into our resources, and let\u{2019}s grow together!"</p>
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


  `}window.onload=()=>{document.getElementById("header").innerHTML=`
<header class="bg-[#F0F4F1] p-4 text-[#213121] fixed top-0 left-0 w-full z-50">
  <nav class="flex items-center justify-between">
    <div class="logo-container text-2xl font-bold flex-shrink-0 font-josefin">
      <a href="#" id="logoLink"> 
        <img src="/img/logo.png" alt="Green Heaven Logo" class="logo-img"> 
      </a>
    </div>

    <!-- Desktop Navigation Links -->
    <ul class="hidden md:flex space-x-6 justify-center w-full font-josefin text-xl">
      <li><a href="#" class="hover" id="homeLink" data-nav="home">Home <img src="https://icon2.cleanpng.com/20180704/lrs/kisspng-nest-labs-logo-nest-learning-thermostat-smart-ther-nest-5b3d35026aace4.350565831530737922437.jpg" alt="design icon" class="icon"></a></li>
      <li><a href="#" class="hover" id="plantsLink" data-nav="plants">Plants <img src="https://icon2.cleanpng.com/20180704/lrs/kisspng-nest-labs-logo-nest-learning-thermostat-smart-ther-nest-5b3d35026aace4.350565831530737922437.jpg" alt="design icon" class="icon"></a></li>
      <li><a href="#" class="hover" id="aboutLink" data-nav="about">About <img src="https://icon2.cleanpng.com/20180704/lrs/kisspng-nest-labs-logo-nest-learning-thermostat-smart-ther-nest-5b3d35026aace4.350565831530737922437.jpg" alt="design icon" class="icon"></a></li>
      <li><a href="#" class="hover" id="contactLink" data-nav="contact">Contact Us <img src="https://icon2.cleanpng.com/20180704/lrs/kisspng-nest-labs-logo-nest-learning-thermostat-smart-ther-nest-5b3d35026aace4.350565831530737922437.jpg" alt="design icon" class="icon"></a></li>
    </ul>

    <!-- Mobile Menu Icon -->
    <div class="md:hidden">
      <button id="menu-toggle" class="text-[#213121]">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <ul id="mobile-menu" class="md:hidden flex-col space-y-4 font-josefin text-lg hidden">
    <li><a href="#" id="homeLinkMobile" class="block text-center">Home</a></li>
    <li><a href="#" id="plantsLinkMobile" class="block text-center">Plants</a></li>
    <li><a href="#" id="aboutLinkMobile" class="block text-center">About</a></li>
    <li><a href="#" id="contactLinkMobile" class="block text-center">Contact Us</a></li>
  </ul>
</header>

<section class="bg-[#F0F4F1] py-8">
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
    <div class="text-center md:text-left flex-1">
  `,document.getElementById("footer").innerHTML=`
<footer class="bg-[#F0F4F1] font-josefin">
  <div class="footer mx-auto max-w-screen-xl px-4 pb-2 pt-2 sm:px-6 lg:px-8 lg:pt-16">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-6">
    

  <!-- Back to Top Arrow in a Circle with Smooth Effect -->
<div class="flex justify-center mt-6">
  <a href="#" id="backToTopButton" class="flex items-center justify-center w-12 h-12 bg-gray-800 text-gray rounded-full shadow-md hover:bg-gray-600 transition-all duration-300 transform hover:scale-110">
    <!-- Upward Arrow Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
    </svg>
  </a>
</div>


      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div class="text-center sm:text-left">
          <p class="text-2xl font-medium text-gray-900">About Us</p>

          <ul class="mt-8 space-y-4 text-lg">
            <li>
              <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
                Company History
              </a>
            </li>

            <li>
              <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
                Meet the Team
              </a>
            </li>

            <li>
              <a class="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
            </li>
          </ul>
        </div>

        <div class="text-center sm:text-left">
          <p class="text-2xl font-medium text-gray-900">Our Services</p>

          <ul class="mt-8 space-y-4 text-lg">
            <li>
              <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
              Virtual Consultations
              </a>
            </li>

            <li>
              <a class="text-gray-700 transition hover:text-gray-700/75" href="#"> Care Blog </a>
            </li>

            <li>
              <a class="text-gray-700 transition hover:text-gray-700/75" href="#"> Online Workshops </a>
            </li>
        </div>


        <div class="text-center sm:text-left">
          <p class="text-2xl font-medium text-gray-900">Contact Us</p>

          <ul class="mt-8 space-y-4 text-lg">
            <li>
              <a class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-5 shrink-0 text-gray-900"fill="none" viewBox="0 0 24 24" stroke="currentColor"stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="flex-1 text-gray-700">greenheaven@gmail.com</span>
              </a>
            </li>

            <li>
              <a class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-5 shrink-0 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="flex-1 text-gray-700">+212 7 62 75 23 37</span>
              </a>
            </li>

            <li class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5 shrink-0 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>

              <address class="-mt-0.5 flex-1 not-italic text-gray-700">
                 Morocco, Casablanca
              </address>
            </li>
          </ul>
        </div>
        <a href="#" id="logoLink"> <img src="/public/img/logo.png" alt="Green Heaven Logo" class="h-[50px] object-contain"> </a>
      </div>
    </div>
    
    

    <div class="mt-12 border-t border-gray-100 pt-6">
      <div class="text-center sm:flex sm:justify-between sm:text-left">
        <p class="text-lg text-gray-500">
          <span class="block sm:inline">All rights reserved.</span>
          <a class="inline-block underline transition custom-hover" href="#"> Privacy Policy & Conditions</a>
        </p>

        <div>
        <ul class=" flex justify-center gap-6 sm:justify-start md:gap-8">
          <li>
            <a href="#" rel="noreferrer" target="_blank" class="icon-block transition custom-hover">
              <span class="sr-only">Facebook</span>
              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/>
              </svg>
            </a>
          </li>

          <li>
            <a href="#" rel="noreferrer" target="_blank" class="icon-block transition custom-hover">
              <span class="sr-only">Instagram</span>
              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"/>
              </svg>
            </a>
          </li>

          <li>
            <a href="#" rel="noreferrer" target="_blank" class="icon-block transition custom-hover">
              <span class="sr-only">GitHub</span>
              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
              </svg>
            </a>
          </li>

          <li>
            <a href="#" rel="noreferrer" target="_blank" class="icon-block transition custom-hover">
              <span class="sr-only">Dribbble</span>
              <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>


        <p class="mt-4 text-lg text-gray-500 sm:order-first sm:mt-0">&copy; 2024 Green Heaven</p>
      </div>
    </div>
  </div>

  
</footer>
    `,e(),function(){let t=document.getElementById("homeLink"),a=document.getElementById("plantsLink"),s=document.getElementById("aboutLink"),i=document.getElementById("contactLink");t&&t.addEventListener("click",t=>{t.preventDefault(),e()}),a&&a.addEventListener("click",e=>{e.preventDefault(),document.getElementById("content").innerHTML=`
    <div id="plant-list" class="p-4">
      <!-- Title Section -->
      <h2 class="title font-josefin font-bold text-center mb-6">Our Plants</h2>
      
      <!-- Description Section under the Title -->
      <div class="text-center md:text-left flex-1 mb-8">
        <p class="phome mt-3 text-gray-700 font-josefin">"Our Workshop is dedicated to helping you care for your plants, offering expert guidance and personalized advice to ensure they thrive.
         Whether you're a seasoned plant enthusiast or a beginner, we provide everything you need to nurture your green companions.
          With a wide variety of plant types available, from easy-to-care-for houseplants to more exotic species, you'll find the perfect additions to your collection.
         Let us help you create a flourishing, vibrant indoor garden that brings nature\u{2019}s beauty into your home."</p>
      </div>
      
      <!-- Grid of Plants -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Product 1: Aloe Vera -->
        <div class="plant-item shadow-lg rounded-lg p-4">
          <img src="https://i.pinimg.com/736x/04/f5/1a/04f51a26c0ce99f142d24e6fd0c6d192.jpg" alt="Aloe Vera" class="w-full h-80 object-cover rounded-lg mb-4">
          <h3 class="text-xl font-semibold text-center">Aloe Vera</h3>
        </div>

        <!-- Product 2: Cactus -->
        <div class="plant-item shadow-lg rounded-lg p-4">
          <img src="https://i.pinimg.com/736x/6a/5a/18/6a5a18c03d96f2ba160fe69e94bc86eb.jpg" alt="Cactus" class="w-full h-80 object-cover rounded-lg mb-4">
          <h3 class="text-xl font-semibold text-center">Cactus</h3>
        </div>

        <!-- Product 3: Snake Plant -->
        <div class="plant-item shadow-lg rounded-lg p-4">
          <img src="https://i.pinimg.com/736x/a9/eb/4e/a9eb4e5ad303de0fe57fbdfe002fed10.jpg" alt="Snake Plant" class="w-full h-80 object-cover rounded-lg mb-4">
          <h3 class="text-xl font-semibold text-center">Snake Plant</h3>
        </div>

        <!-- Product 4: Spider Plant -->
        <div class="plant-item shadow-lg rounded-lg p-4">
          <img src="https://i.pinimg.com/736x/ae/e1/21/aee121177d83c6d0bd1b74540fb1e0a6.jpg" alt="Spider Plant" class="w-full h-80 object-cover rounded-lg mb-4">
          <h3 class="text-xl font-semibold text-center">Spider Plant</h3>
        </div>

        <!-- Product 5: Peace Lily -->
        <div class="plant-item shadow-lg rounded-lg p-4">
          <img src="https://i.pinimg.com/736x/fb/5a/60/fb5a60a6f77563d11bce2103792d2f96.jpg" alt="Peace Lily" class="w-full h-80 object-cover rounded-lg mb-4">
          <h3 class="text-xl font-semibold text-center">Peace Lily</h3>
        </div>

        <!-- Product 6: Fiddle Leaf Fig -->
        <div class="plant-item shadow-lg rounded-lg p-4">
          <img src="https://i.pinimg.com/736x/d0/36/93/d036934b37bc492cb937be50ef8f9b8d.jpg" alt="Fiddle Leaf Fig" class="w-full h-80 object-cover rounded-lg mb-4">
          <h3 class="text-xl font-semibold text-center">Monstera Fig</h3>
        </div>
      </div>
    </div>



    <div class=" text-center md:text-left flex-1">
          <h2 class="hhome font-bold text-[#44542B]">The Importance of Caring for Our Plants</h2>
          <p class="phome mt-3 text-gray-700 font-josefin">"Plants bring life, beauty, and tranquility into our spaces, while also improving air quality and promoting well-being.
           Just as we nurture our own health, plants need regular care to thrive.
           Watering them appropriately, providing enough sunlight, and ensuring they have the right soil and nutrients are essential steps to keep them healthy and vibrant. 
           By taking care of our plants, we create a positive environment and a lasting connection with nature, reminding us of the beauty and calmness they bring to our lives."</p>
        </div>
        


    <section class="iconplants">
  <div class="containerp">
    <!-- Image 1 -->
    <div class="icon-containerp">
      <img src="https://icons.veryicon.com/png/o/nature/natural-environmental-protection-series/plant-32.png" alt="Image 1">
    </div>
    <!-- Image 2 -->
    <div class="icon-containerp">
      <img src="https://cdn-icons-png.flaticon.com/512/7963/7963836.png" alt="Image 2">
    </div>
    <!-- Image 3 -->
    <div class="icon-containerp">
      <img src="https://cdn-icons-png.flaticon.com/512/2514/2514558.png" alt="Image 3">
    </div>
    <!-- Image 4 -->
    <div class="icon-containerp">
      <img src="https://cdn0.iconfinder.com/data/icons/food-drink-set/177/basil-512.png" alt="Image 4">
    </div>
  </div>
</section>


  `}),s&&s.addEventListener("click",e=>{e.preventDefault(),document.getElementById("content").innerHTML=`
<section class="font-josefin p-8">
  <!-- Paragraph above the Image -->
  <div class="relative">
    <!-- Paragraph with better positioning -->
    <p class="about text-white lg:text-6xl absolute font-semibold inset-0 z-10 flex items-center justify-center p-4">
      This is Green Heaven - Your partner in plant care and greener spaces. <br>
      Proper plant care is essential for their health and growth.
    </p>
    <!-- Image -->
    <img src="https://lagreentouch.fr/cdn/shop/collections/plantes-dinterieur-102713.jpg?v=1718903870&width=1296" alt="About Image" class="w-full h-80 object-cover blur-image">
  </div>
</section>



<section class="py-4 custom-section">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <!-- Left side: Title and Description -->
        <div class="text-center md:text-left flex-1">
          <h2 class="hplant font-bold text-[#44542B]">Aloe Vera</h2>
          <p class="pplant mt-12 text-gray-700 font-josefin"> To care for an aloe vera plant, place it in a bright spot with indirect sunlight.
            Water it sparingly\u{2014}about every 2-3 weeks\u{2014}allowing the soil to dry out completely between waterings, 
            as aloe vera is drought-tolerant and overwatering can lead to root rot. 
            Use well-draining soil, like cactus or succulent mix, to prevent water buildup.
            Aloe vera thrives in temperatures between 55\xb0F and 80\xb0F (13\xb0C and 27\xb0C) and prefers low humidity.
            Avoid fertilizing frequently; once or twice a year during the spring or summer is enough for healthy growth.</p>
          
        </div>
        <!-- Right side: Image -->
        <div class="flex-shrink-0">
          <img src="https://i.pinimg.com/736x/5a/ff/e3/5affe3f5ccc74cad16a3d10897a391db.jpg" alt="Plants" class=" mt-12 object-cover rounded-lg shadow-lg">
        </div>
      </div>
    </section>



    <section class="py-4 custom-section">
    
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
      <!-- Right side: Image -->
        <div class="flex-shrink-0">
          <img src="https://i.pinimg.com/736x/2a/06/fa/2a06faff8243b7bb282266f4e12663b2.jpg" alt="Plants" class=" h-[600px] mt-12 object-cover rounded-lg shadow-lg">
        </div>
        <!-- Left side: Title and Description -->
        <div class="text-center md:text-left flex-1">
          <h2 class="hplant font-bold text-[#44542B]">Cactus</h2>
          <p class="pplant mt-12 text-gray-700 font-josefin"> "Caring for a cactus is simple, yet requires the right balance of sunlight and temperature to keep it healthy. 
          Cacti thrive in bright, direct sunlight, ideally placed near a sunny window where they can get at least 4-6 hours of light each day.
           Temperature-wise, they do well in warmer conditions, ideally between 18-26\xb0C (65-80\xb0F) during the day, and slightly cooler at night. 
           Avoid overwatering; cacti prefer to dry out completely between waterings.
           By providing plenty of sunlight and maintaining a warm environment, your cactus will stay healthy and continue to grow beautifully."</p>
        </div>
      </div>
    </section>



    <section class="py-4 custom-section">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <!-- Left side: Title and Description -->
        <div class="text-center md:text-left flex-1">
          <h2 class="hplant font-bold text-[#44542B]">Snake Plant</h2>
          <p class="pplant mt-12 text-gray-700 font-josefin"> "The Snake Plant is a resilient houseplant that thrives with minimal care. 
          To keep it healthy, place it in indirect sunlight, as it prefers bright but filtered light.
           It can also tolerate low light, making it versatile for various spots in your home. 
           Keep the temperature between 18-27\xb0C (65-80\xb0F) for optimal growth, and avoid letting it drop below 10\xb0C (50\xb0F).
           Water sparingly, allowing the soil to dry out between waterings, as this plant is drought-tolerant and sensitive to overwatering. 
          With just a little attention, your Snake Plant will flourish and add a touch of greenery to your space."</p>
          
        </div>
        <!-- Right side: Image -->
        <div class=" flex-shrink-0">
          <img src="https://i.pinimg.com/736x/9a/77/c0/9a77c0c156e338adce1bcdfc72abac39.jpg" alt="Plants" class=" mt-12 object-cover rounded-lg shadow-lg">
        </div>
      </div>
    </section>



       <section class="py-4 custom-section">
    
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
      <!-- Right side: Image -->
        <div class="flex-shrink-0">
          <img src="https://i.pinimg.com/736x/09/5f/4a/095f4a0a08820bbea6803338ee8aa33d.jpg" alt="Plants" class=" h-[600px] mt-12 object-cover rounded-lg shadow-lg">
        </div>
        <!-- Left side: Title and Description -->
        <div class="text-center md:text-left flex-1">
          <h2 class="hplant font-bold text-[#44542B]">Spider Plant</h2>
          <p class="pplant mt-12 text-gray-700 font-josefin"> "Spider plants are easy to care for and add vibrant greenery to any space. 
          They thrive best in bright, indirect sunlight but can also adapt to low light conditions. 
          Aim to keep them in temperatures between 18-24\xb0C (65-75\xb0F) during the day, with a slight drop at night.
          Avoid direct sunlight, as it can scorch their leaves. Water moderately, allowing the soil to dry slightly between waterings. 
          With the right balance of light and a comfortable room temperature, your spider plant will stay healthy and continue to produce its iconic arching leaves."</p>
        </div>
      </div>
    </section>




<section class="py-4 custom-section">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <!-- Left side: Title and Description -->
        <div class="text-center md:text-left flex-1">
          <h2 class="hplant font-bold text-[#44542B]">Peace Lily</h2>
          <p class="pplant mt-12 text-gray-700 font-josefin"> "To keep your peace lily thriving, place it in a spot with bright, indirect sunlight, as direct sun can scorch its leaves. 
          Peace lilies prefer a stable, warm environment with temperatures between 18-24\xb0C. 
          Avoid placing them in areas with cold drafts or sudden temperature changes.
           Water the plant when the top inch of soil feels dry, and mist its leaves occasionally to maintain humidity.
           With these simple steps, your peace lily will reward you with lush, green leaves and delicate white blooms."</p>
          
        </div>
        <!-- Right side: Image -->
        <div class="flex-shrink-0">
          <img src="https://i.pinimg.com/736x/f2/98/aa/f298aa77cf6ea04057e83df7138f84bb.jpg" alt="Plants" class=" mt-12 object-cover rounded-lg shadow-lg">
        </div>
      </div>
    </section>


           <section class="py-4 custom-section">
    
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
      <!-- Right side: Image -->
        <div class="flex-shrink-0">
          <img src="https://i.pinimg.com/736x/db/3b/9a/db3b9a2c30815ef7b9ad06fc77ee8630.jpg" alt="Plants" class=" h-[600px] mt-12 object-cover rounded-lg shadow-lg">
        </div>
        <!-- Left side: Title and Description -->
        <div class="text-center md:text-left flex-1">
          <h2 class="hplant font-bold text-[#44542B]">Monstera</h2>
          <p class="pplant mt-12 text-gray-700 font-josefin"> "To keep your Monstera deliciosa thriving, provide it with bright, 
          indirect sunlight to mimic its natural tropical habitat\u{2014}direct sunlight can scorch its beautiful leaves, so a spot near a window with filtered light is ideal. 
          Water your Monstera when the top inch of soil feels dry, typically every 1-2 weeks, adjusting for seasonal changes in temperature and humidity. 
          Adding a well-balanced, calcium-rich fertilizer during the growing season can support its growth and leaf health. 
          With proper care, your Monstera will develop its iconic split leaves and become a lush, eye-catching part of your indoor space.""</p>
        </div>
      </div>
    </section>


    <div class=" text-center md:text-left flex-1">
    <h2 class="h-about font-bold text-[#44542B]">Still have more questions?</h2>
    <p class="phome mt-3 text-gray-700 font-josefin">Check out our FAQs for answers to our most commonly asked questions, or email us at 
    <a href="mailto:greenheaven@gmail.com" class="email hover:underline">greenheaven@gmail.com</a>
    </p>
    </div>

    <section class="relative bg-cover bg-center bg-no-repeat py-16" style="background-image: url(''); background-size: cover; background-position: center center;">
    <div class="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

   <section class="hero-section py-16">
   <div class="overlay"></div>
   <div class="content-container">
   <div class="text-container">
      <h1 class="headline"> Let us find your
      <strong class="highlight">Forever Home.</strong>
      </h1>

      <p class="description font-josefin">Transform your living space with the perfect plants for your home. 
      Whether you\u{2019}re new to plants or a seasoned enthusiast, we offer expert guidance to help you find the ideal companion. 
      Let\u{2019}s create a lush, vibrant environment together.
      </p>

      <div class="button-group font-josefin">
        <a href="#" class="cta-button primary">Get Started</a>
        <a href="#" class="cta-button secondary">Learn More</a>
      </div>
    </div>
    </div>
    </section>
    </div>
    </div>
    </section>
    



        
    `}),i&&i.addEventListener("click",e=>{e.preventDefault(),document.getElementById("content").innerHTML=`
    <div class="contact-page p-4">
      <h2 class="title  font-bold font-josefin text-center mb-6">Contact Us</h2>
      <div class="container mx-auto px-4 flex flex-row gap-6 justify-center">
        <!-- Left Image Section -->
        <div class="lg:w-2/3 w-full">
          <img src="https://images.ctfassets.net/b85ozb2q358o/9f10d14f4d0dc2309dc7c321b80a28e863170dc97012c0f57dd3f7b6eae936eb/998209098cadcc6d5b25dfa18e7b3d98/plantes-ete_AdobeStock_631329688.jpg" alt="Contact Image" class="w-full h-full object-cover rounded-lg shadow-lg">
        </div>
        
        <!-- Right Contact Form Section with Border -->
        <div class="lg:w-2/3 w-full border-2 border-gray-300 p-6 rounded-lg bg-[#F0F4F1]">
          <form class="max-w-lg mx-auto">
            <div class="mb-4">
              <label for="name" class="block text-gray-700">Name:</label>
              <input type="text" id="name" class="w-full px-3 py-2 border rounded-lg" placeholder="Your Name">
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700">Email:</label>
              <input type="email" id="email" class="w-full px-3 py-2 border rounded-lg" placeholder="Your Email">
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700">Message:</label>
              <textarea id="message" class="w-full px-3 py-2 border rounded-lg" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" class="bg-[#44542B] text-white px-4 py-2 rounded-lg hover:bg-green-300">Send Message</button>
          </form>
        </div>
      </div>
    </div>


<div class="flex items-center space-x-2">
    <h2 class="follow font-josefin">Follow Us :</h2>
    <a class="follows font-josefin transition hover:text-teal-600/75" href="#">
        @Greenheaven
    </a>
</div>


<section class="imgcontact">
  <div class="container">
    <!-- Image 1 -->
    <div class="image-container">
      <img src="https://i.pinimg.com/736x/ff/51/c6/ff51c645a5e0976f5026515d614ad725.jpg" alt="Image 1">
    </div>
    <!-- Image 2 -->
    <div class="image-container">
      <img src="https://i.pinimg.com/736x/0f/99/ec/0f99ec67060deac77b94724ac01b8d99.jpg" alt="Image 2">
    </div>
    <!-- Image 3 -->
    <div class="image-container">
      <img src="https://i.pinimg.com/736x/2c/41/7c/2c417cff2703fe9d66d6fb47c8ae643f.jpg" alt="Image 3">
    </div>
    <!-- Image 4 -->
    <div class="image-container">
      <img src="https://i.pinimg.com/736x/24/0d/1f/240d1f8ad4b73447a5020a6e1897456d.jpg" alt="Image 4">
    </div>
  </div>
</section>

  `});let l=document.getElementById("menu-toggle");l&&l.addEventListener("click",()=>{let e=document.querySelector("nav ul");e&&e.classList.toggle("hidden")})}()};
//# sourceMappingURL=index.e505793f.js.map

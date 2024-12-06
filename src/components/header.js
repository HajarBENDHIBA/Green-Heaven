export function header() {
  return `
<header class="bg-[#F0F4F1] p-4 text-[#213121] fixed top-0 left-0 w-full z-50">
  <nav class="flex items-center justify-between">
    <div class="logo-container text-2xl font-bold flex-shrink-0 font-josefin">
      <a href="#" id="logoLink"> 
        <img src="img/logo.png" alt="Green Heaven Logo" class="logo-img"> 
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
  `;
}

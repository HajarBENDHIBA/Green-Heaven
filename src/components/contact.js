// src/components/contact.js
export function contactPage() {
  return `
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

  `;
}

export function plantList() {
  return `
    <div id="plant-list" class="p-4">
      <!-- Title Section -->
      <h2 class="title font-josefin font-bold text-center mb-6">Our Plants</h2>
      
      <!-- Description Section under the Title -->
      <div class="text-center md:text-left flex-1 mb-8">
        <p class="phome mt-3 text-gray-700 font-josefin">"Our Workshop is dedicated to helping you care for your plants, offering expert guidance and personalized advice to ensure they thrive.
         Whether you're a seasoned plant enthusiast or a beginner, we provide everything you need to nurture your green companions.
          With a wide variety of plant types available, from easy-to-care-for houseplants to more exotic species, you'll find the perfect additions to your collection.
         Let us help you create a flourishing, vibrant indoor garden that brings nature’s beauty into your home."</p>
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


  `;
}

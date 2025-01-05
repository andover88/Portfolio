<template>
  <div class="container mx-auto px-6 py-12">
    <!-- Features Section -->
    <div class="flex flex-col md:flex-row gap-10">
      <!-- Left Column -->
      <div class="flex-1">
        <div class="text-3xl font-bold mb-6 text-gray-900">Features</div>
        <div class="space-y-6">
          <div class="feature-item flex items-center">
            <!-- Icon -->
            <i class="fas fa-cogs text-2xl text-green-500 mr-4"></i>
            <div>
              <h3 class="font-semibold text-xl text-gray-800">Simple & Unique</h3>
              <p class="text-gray-600">Easy to use and designed to stand out.</p>
            </div>
          </div>
          <div class="feature-item flex items-center">
            <!-- Icon -->
            <i class="fas fa-layer-group text-2xl text-green-500 mr-4"></i>
            <div>
              <h3 class="font-semibold text-xl text-gray-800">Layered & Well Documented</h3>
              <p class="text-gray-600">Well-structured with clear documentation.</p>
            </div>
          </div>
          <div class="feature-item flex items-center">
            <!-- Icon -->
            <i class="fas fa-paint-brush text-2xl text-green-500 mr-4"></i>
            <div>
              <h3 class="font-semibold text-xl text-gray-800">World-Class UI Design</h3>
              <p class="text-gray-600">Designed with the latest trends and user experience in mind.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Middle Column (Image) -->
      <div class="flex-1">
        <img src="https://via.placeholder.com/400" alt="Feature Image" class="w-full rounded-lg shadow-lg">
      </div>

      <!-- Right Column -->
      <div class="flex-1">
        <div class="text-3xl font-bold mb-6 text-gray-900">More Features</div>
        <ul class="space-y-6">
          <li class="flex items-center">
            <!-- Icon -->
            <i class="fas fa-mobile-alt text-2xl text-green-500 mr-4"></i>
            <span class="font-semibold text-xl text-gray-800">Mobile Friendly</span> - Fully responsive design for all devices.
          </li>
          <li class="flex items-center">
            <!-- Icon -->
            <i class="fas fa-book text-2xl text-green-500 mr-4"></i>
            <span class="font-semibold text-xl text-gray-800">Complete Style Guide</span> - Easy customization with a complete guide.
          </li>
          <li class="flex items-center">
            <!-- Icon -->
            <i class="fas fa-headset text-2xl text-green-500 mr-4"></i>
            <span class="font-semibold text-xl text-gray-800">Unlimited Support</span> - We're here to help you anytime.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesPage',
};
</script>

<style scoped>
.feature-item {
  padding: 10px;
  border-left: 4px solid #4CAF50; /* Same color as icons */
  background-color: #f9fafb;
}
</style>

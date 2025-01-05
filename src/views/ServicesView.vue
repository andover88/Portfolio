<template>
  <NavBar />
  <div class="container mx-auto px-6 py-12">
    <!-- Features Section -->
    <div class="flex flex-col md:flex-row gap-10">
      <!-- Left Column -->
      <div class="flex-1">
        <div class="text-3xl font-semibold text-gray-800 mb-6">Features</div>
        <div class="space-y-6">
          <div class="feature-item">
            <h3 class="font-semibold text-xl text-gray-700">Simple & Unique</h3>
            <p class="text-gray-600">Easy to use and designed to stand out.</p>
          </div>
          <div class="feature-item">
            <h3 class="font-semibold text-xl text-gray-700">Layered & Well Documented</h3>
            <p class="text-gray-600">Well-structured with clear documentation.</p>
          </div>
          <div class="feature-item">
            <h3 class="font-semibold text-xl text-gray-700">World-Class UI Design</h3>
            <p class="text-gray-600">Designed with the latest trends and user experience in mind.</p>
          </div>
        </div>
      </div>

      <!-- Middle Column (Image) -->
      <div class="flex-1">
        <img src="../assets/re.png" alt="Feature Image" class="w-full rounded-lg shadow-md h-auto">
      </div>

      <!-- Right Column -->
      <div class="flex-1">
        <div class="text-3xl font-semibold text-gray-800 mb-6">More Features</div>
        <ul class="space-y-6 text-gray-600">
          <li>
            <span class="font-semibold text-blue-600">Mobile Friendly</span> - Fully responsive design for all devices.
          </li>
          <li>
            <span class="font-semibold text-blue-600">Complete Style Guide</span> - Easy customization with a complete guide.
          </li>
          <li>
            <span class="font-semibold text-blue-600">Unlimited Support</span> - We're here to help you anytime.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"; // Adjust the path as needed
import Footer from "../components/Footer.vue"; // Adjust the path as needed
import TimeLineComponent from "../components/TimeLineComponent.vue"; // Adjust the path as needed

export default {
  name: "ServicesView",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.feature-item {
  padding: 15px;
  border-left: 4px solid #4CAF50;
  background-color: #f9f9f9;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.feature-item:hover {
  transform: translateX(10px);
}

ul li {
  font-size: 1rem;
  line-height: 1.6;
}

.text-gray-600 {
  color: #4A5568;
}

.text-gray-800 {
  color: #2D3748;
}

.text-blue-600 {
  color: #3182CE;
}

.container {
  max-width: 1200px;
}

img {
  object-fit: cover;
  max-height: 500px;
}

@media (max-width: 768px) {
  .flex-1 {
    flex: 1 1 100%;
  }
}
</style>

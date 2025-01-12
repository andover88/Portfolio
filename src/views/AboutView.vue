<template>
    <OneNavBar />
    <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-8 py-10 px-4 max-w-4xl mx-auto z-0">
  
      <!-- Image Section -->
      <div class="relative w-full md:w-1/2">
        <img 
          src="/src/assets/ferns.jpg" 
          alt="About Me" 
          class="rounded-lg shadow-lg object-cover z-0"
        />
      </div>
  
      <!-- Text Section -->
      <div class="relative w-full md:w-1/2 -mt-8 md:mt-0 md:-ml-12 bg-white p-6 rounded-lg shadow-lg z-10">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p class="text-lg text-gray-600 mb-6">
          I am a passionate developer with a mission to create impactful and innovative solutions that make a difference. With a strong foundation in modern web technologies and a love for problem-solving, I strive to bring ideas to life through code.
        </p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-2">My Mission</h3>
        <p class="text-lg text-gray-600 mb-6">
          My mission is to empower individuals and businesses by delivering exceptional software that combines functionality, aesthetics, and user-centric design. I aim to continuously learn, grow, and contribute to meaningful projects.
        </p>
  
        <!-- Join My Team Button -->
        <div class="mt-6">
          <button 
            class="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            @click="joinTeam"
          >
            Join My Team
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script>
  import Footer from "../components/Footer.vue";
  import FiveFeaturesComponent from "../components/FiveFeaturesComponent.vue";
  import FourPricesComponen from "../components/FourPricesComponen.vue";
  import OneNavBar from "../components/OneNavBar.vue";
  import ThreeCreateSection from "../components/ThreeCreateSection.vue";
  import TwoHeroComponent from "../components/TwoHeroComponent.vue";
  
  export default {
    name: "AboutMe",
    components: {
      OneNavBar,
      TwoHeroComponent,
      ThreeCreateSection,
      FourPricesComponen,
      FiveFeaturesComponent,
      Footer
    },
    methods: {
      joinTeam() {
        alert("Thank you for your interest! Please reach out to us to join the team.");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add additional styles if needed */
  </style>
  
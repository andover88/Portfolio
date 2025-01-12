<template>
    <OneNavBar />
    <div class="relative min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 z-100">
      <!-- Upside-Down Background -->
      <!-- Abstract Curved Lines -->
      <svg
  class="absolute inset-0 w-full h-full transform rotate-180 -z-1"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
  viewBox="0 0 1440 320"
>
  <!-- Define Gradient -->
  <defs>
    <linearGradient id="darkToLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#333333; stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0f0f0; stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Paths with Gradient Fill -->
  <path
    fill="url(#darkToLight)"
    fill-opacity=".1"
    d="M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,90.7C672,107,768,181,864,202.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ></path>
  <path
    fill="url(#darkToLight)"
    fill-opacity=".1"
    d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,165.3C672,160,768,160,864,176C960,192,1056,224,1152,208C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ></path>
</svg>

      <h1 class="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
      <p class="text-lg text-gray-600 text-center">
        Feel free to reach out to me through any of the platforms below.
      </p>
  
      <!-- Contact Links -->
      <div class="flex flex-col space-y-4 w-full md:w-auto md:space-y-0 md:flex-row md:space-x-6">
        <!-- Email -->
        <a 
          href="mailto:andovercien@gmail.com" 
          class="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
        >
          Email Me
        </a>
        
        <!-- Phone -->
        <a 
          href="tel:+6264379698" 
          class="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
        >
          Call Me
        </a>
        
        <!-- LinkedIn -->
        <a 
          href="https://www.linkedin.com/in/fernando-vergara/" 
          target="_blank" 
          class="flex items-center justify-center px-6 py-3 bg-blue-800 text-white rounded-lg shadow-lg hover:bg-blue-900 transition duration-200"
        >
          LinkedIn
        </a>
        
        <!-- GitHub -->
        <a 
          href="https://github.com/andover88" 
          target="_blank" 
          class="flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 transition duration-200"
        >
          GitHub
        </a>
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
    name: "ContactPage",
    components: {
      OneNavBar,
      TwoHeroComponent,
      ThreeCreateSection,
      FourPricesComponen,
      FiveFeaturesComponent,
      Footer
    },
    data() {
      return {
        hideNav: false,
        lastScrollY: 0,
      };
    },
    methods: {
      handleScroll() {
        const currentScrollY = window.scrollY;
        this.hideNav = currentScrollY > this.lastScrollY; // Hide on scroll down, show on scroll up
        this.lastScrollY = currentScrollY;
      },
    },
    mounted() {
      this.lastScrollY = window.scrollY; // Initialize last scroll position
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  svg {
    pointer-events: none;
  }
  </style>
  
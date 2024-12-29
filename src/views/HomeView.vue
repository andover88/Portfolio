<template>
  <div id="app">
    
    
    <!-- <BackgroundSection /> -->
 <!-- Section with sticky background -->
 <div id="sticky-background-container" class="relative">
  
<MainContent />
<!-- <ProjectsComponent /> -->
  <!-- Scrolling content layer -->
  <div class="parallax_container">
<Background />
<CounterComponent />

<Gallary />
 
  </div>
</div>

   
    <!-- <CounterComponent /> -->
    <LoadingAnimation :isLoading="isLoading" />
    <div v-show="!isLoading" :class="{'content-loaded': !isLoading}" class="main-content">
      <!-- Main content of your app -->
    </div>

    <!-- Hero Content -->
<Footer />
    
  </div>
  <NavBar  />
  

</template>

<script>
import LoadingAnimation from "../components/LoadingAnimation.vue";
import Background from "../components/Background.vue";
import Gallary from "../components/Gallary.vue";
import GridComponent from "../components/GridComponent.vue";


import CounterComponent from "../components/CounterComponent.vue";
import Footer from "../components/Footer.vue";

import NavBar from "../components/NavBar.vue";

export default {
  components: {
    LoadingAnimation,
    Background,
    Gallary,
    NavBar,
    CounterComponent,
    GridComponent,
    Footer,
  },
  data() {
    return {
      isLoading: true, // Control visibility of the main content
      isSticky: false, // Control sticky navbar state
    };
  },
  mounted() {
    // Simulate loading time, hide after 2 seconds
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    // Listen to the scroll event to toggle sticky navbar
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Clean up event listener on component destroy
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Set sticky state when scrolled past 100px
      if (window.scrollY > 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
};
</script>

<style scoped>
/* Sticky Navbar Styling */
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Hero Content Animation */
.hero-appear {
  transform: translateY(100vh); /* Start from the bottom */
  opacity: 0;
  animation: hero-slide-up 1s forwards; /* Animation to slide up */
}

@keyframes hero-slide-up {
  to {
    transform: translateY(0); /* End at normal position */
    opacity: 1;
  }
}

/* Other styles... */

</style>

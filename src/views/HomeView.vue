<template>

        <OneNavBar />
        <TwoHeroComponent />
        <ThreeCreateSection />
        <!-- <FourPricesComponen /> -->
        <FiveFeaturesComponent />
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
  name: "ParallaxPage",
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
/* General Section Styling */
section {
  position: relative;
  overflow: hidden;
}

/* Parallax Effect for Sections */
section .absolute {
  transform: translateY(-30%);
}

section:nth-child(odd) .absolute {
  transform: translateY(30%);
}

/* Navbar Styles */
.sticky {
  position: sticky;
  top: 0;
  z-index: 50;
}

.-translate-y-full {
  transform: translateY(-100%);
}

.transition-transform {
  transition: transform 0.3s ease-in-out;
}
</style>

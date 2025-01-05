<template>
  <div class="relative bg-transparent">
    <!-- Parallax Background -->
    <div class="absolute top-0 left-0 w-full h-full bg-contain bg-fixed bg-center" style="background-image: url('../assets/face.jpg');"></div>

    <!-- Main Content Section -->
    <div class="relative z-10">
      <!-- Header -->
      <header class="bg-gray-800 text-white py-6 text-center">
        <NavBar />
      </header>

      <!-- First Component (with Parallax Effect) -->
      <section class="relative py-16 px-6 md:px-12 text-center">
        <div class="absolute inset-0 opacity-50"></div>
        <div class="relative z-10">
          <HeroSection />
        </div>
      </section>

      <!-- Second Component (with Parallax Effect) -->
      <section class="relative py-16 px-6 md:px-12 text-center">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        <div class="relative z-10">
          <AboutComponent />
          <!-- <CounterComponent /> -->
          <TimeLineComponent />
        </div>
      </section>

      <!-- Third Component (with Parallax Effect) -->
      <section class="relative py-16 px-6 md:px-12 text-center">
        <div class="absolute inset-0 opacity-50">
          
        </div>
        
        <div class="relative z-10">
          
          <div class="sticky top-0 bg-white z-20">
            <ProjectsComponent />
          </div>
          <Footer />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"; // Adjust the path as needed
import HeroSection from "../components/HeroSection.vue"; // Adjust the path as needed
import CounterComponent from "../components/CounterComponent.vue";
import TimeLineComponent from "../components/TimeLineComponent.vue";
import Footer from "../components/Footer.vue";
import ProjectsComponent from "../components/ProjectsComponent.vue"; // Gallery component
import AboutComponent from "../components/AboutComponent.vue";

export default {
  name: 'ParallaxPage',
  components: {
    NavBar,
    HeroSection,
    AboutComponent,
    CounterComponent,
    TimeLineComponent,
    ProjectsComponent,
    Footer,
  },
};
</script>

<style scoped>
/* Parallax effect styles */
section {
  position: relative;
  overflow: hidden;
}

section .absolute {
  transform: translateY(-30%); /* Adjust the parallax scroll effect */
}

section:nth-child(odd) .absolute {
  transform: translateY(30%); /* Adjust the parallax scroll effect */
}

/* Sticky styles for third component */

</style>

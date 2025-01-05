<template>
  <div>
   <NavBar />
   <!-- <CounterComponent /> -->
    <TimeLineComponent />
    <Footer />
  
   
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue"; // Adjust the path as needed
import Footer from "../components/Footer.vue"; // Adjust the path as needed
import TimeLineComponent from "../components/TimeLineComponent.vue"; // Adjust the path as needed
import CounterComponent from "../components/CounterComponent.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    Footer,
    TimeLineComponent,
    CounterComponent,
  },
};
</script>
<style scoped>


html body{
  scroll-behavior: smooth;
  min-height: 100vh; /* Ensures each component takes at least the viewport height */

  height: auto;
  width: 100%;
  overflow-x: hidden;

}
@media (max-width: 600px) {
    .container {
        padding: 0 10px; /* Prevents content from overflowing */
    }
}
</style>

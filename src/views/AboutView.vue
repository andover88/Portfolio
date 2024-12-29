<template>
  <div>
    <NavBar />
    <TimeLineComponent />
    <Footer />
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue"; // Adjust the path as needed
import Footer from "../components/Footer.vue"; // Adjust the path as needed
import TimeLineComponent from "../components/TimeLineComponent.vue"; // Adjust the path as needed

export default {
  name: "HomeView",
  components: {
    NavBar,
    Footer,
    TimeLineComponent,
  },
};
</script>
<style scoped>


html {
  scroll-behavior: smooth;
  background-color: black;
}
</style>

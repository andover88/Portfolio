<template>
  <NavBar />
 <ProjectsComponent />
</template>

<script>
import NavBar from "../components/NavBar.vue"; // Adjust the path as needed
import Footer from "../components/Footer.vue"; // Adjust the path as needed
import TimeLineComponent from "../components/TimeLineComponent.vue"; // Adjust the path as needed
import ProjectsComponent from "../components/ProjectsComponent.vue";

export default {
  name: "ServicesView",
  components: {
    NavBar,
    ProjectsComponent
 
  },
};
</script>

<style scoped>
.feature-item {
  padding: 10px;
  border-left: 4px solid #4CAF50;
  background-color: white;
}
</style>

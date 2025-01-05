<template>
  <div class="home-view">
    <NavBar />
    
    <!-- Wrapper for content with parallax effect -->
    <div class="content-wrapper">
      <Contact />
    </div>
    
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'; 
import Contact from '@/components/Contact.vue'; 
import Footer from '@/components/Footer.vue'; 

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Contact,
    Footer,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      
      // Apply parallax effect on individual components
      this.applyParallaxEffect(scrollPosition);
    },

    applyParallaxEffect(scrollPosition) {
      // Parallax effect for each component
      const grid = this.$refs.grid;
      const about = this.$refs.about;
      const timeline = this.$refs.timeline;

      // Apply parallax effect for GridComponent
      if (grid) {
        grid.style.transform = `translateY(${scrollPosition * 0.2}px)`;  // Adjust speed as needed
      }

      // Apply parallax effect for AboutComponent
      if (about) {
        about.style.transform = `translateY(${scrollPosition * 0.3}px)`;  // Adjust speed as needed
      }

      // Apply parallax effect for TimeLineComponent
      if (timeline) {
        timeline.style.transform = `translateY(${scrollPosition * 0.4}px)`;  // Adjust speed as needed
      }
    }
  },
};
</script>

<style scoped>
.home-view {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-wrapper {
  flex-grow: 1;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f1f1f1, #e2e2e2);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}



.NavBar {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.NavBar ul {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 0;
  list-style-type: none;
}

.NavBar li {
  font-size: 16px;
  font-weight: bold;
}

.NavBar a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.NavBar a:hover {
  color: #007BFF;
}

@media (max-width: 768px) {
  .NavBar ul {
    flex-direction: column;
    align-items: center;
  }

  .content-wrapper {
    padding: 20px;
  }
}


</style>

<template>
  <div class="background-container absolute inset-0">
    <!-- Scrolling Grid Background -->
    <div class="grid-container">
      <!-- First Column (Scroll Down) -->
      <div class="grid-item scroll-down">
        <div v-for="(item, index) in column1Items" :key="'col1-' + index" class="scroll-item">
          <i :class="['icon', item.icon]"></i>
          <span class="item-text animate-fade-up">{{ item.text }}</span>
        </div>
      </div>

      <!-- Static Column (No Scrolling) -->
      <div class="grid-item scroll-up">
        <div v-for="(item, index) in column2Items" :key="'col2-' + index" class="scroll-item">
          <i :class="['icon', item.icon]"></i>
          <span class="item-text animate-fade-up">{{ item.text }}</span>
        </div>
      </div>

      <!-- Third Column (Scroll Up) -->
      <div class="grid-item scroll-down">
        <div v-for="(item, index) in column3Items" :key="'col3-' + index" class="scroll-item">
          <i :class="['icon', item.icon]"></i>
          <span class="item-text animate-fade-up">{{ item.text }}</span>
        </div>
      </div>
    </div>

    <!-- Hero Section Overlay -->
    <div class="content-overlay">
      <!-- <HeroSection /> -->
    </div>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "ScrollingGrid",
  components: {
    HeroSection,
  },
  data() {
    return {
      column1Items: [
        { icon: "fab fa-vuejs" },
        { icon: "fab fa-react" },
        { icon: "fab fa-css3-alt" },
        { icon: "fab fa-laravel" },
        { icon: "fab fa-php" },
      ],
      column2Items: [
        { icon: "fab fa-html5" },
        { icon: "fab fa-css3-alt" },
        { icon: "fab fa-js" },
        { icon: "fab fa-git" },
        { icon: "fab fa-npm" },
      ],
      column3Items: [
        { icon: "fab fa-docker" },
        { icon: "fab fa-aws" },
        { icon: "fab fa-node" },
        { icon: "fab fa-python" },
        { icon: "fab fa-java" },
      ],
    };
  },
};
</script>

<style scoped>
/* Dark background and text for the overall layout */
.background-container {
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 60vh;
  overflow: hidden;
}

.grid-container {
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2; /* Behind the HeroSection */
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.scroll-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  animation: none; /* Animation only for scrolling columns */
}

.icon {
  font-size: 3rem;
  background-image: linear-gradient(45deg, #333, #444); /* Default dark gradient */
  -webkit-background-clip: text;
  color: transparent;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

.icon:hover {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.8); /* Glowing effect */
}

.item-text {
  color: #ffffff;
  font-size: 0.9rem;
  margin-top: 10px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.scroll-item:hover .item-text {
  opacity: 1;
}

/* Fade-up animation for item text */
@keyframes fade-up {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-fade-up {
  animation: fade-up 0.5s ease-out forwards;
}

/* Scrolling Animations */
.scroll-down .scroll-item {
  animation: scroll-down 10s linear infinite;
}

.scroll-up .scroll-item {
  animation: scroll-up 10s linear infinite;
}

/* Keyframes for Scrolling */
@keyframes scroll-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes scroll-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

.static {
  overflow: hidden; /* No animation for static column */
}

.content-overlay {
  position: relative;
  z-index: 2; /* Ensure it overlays the background */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content-overlay > * {
  text-align: center;
  color: #fff;
  font-family: "Julius Sans One", sans-serif;
  font-size: 1rem;
}
</style>

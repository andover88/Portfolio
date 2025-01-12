<template>
    <div class="relative min-h-screen bg-state-100 flex flex-col items-center py-10 px-4">
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

</svg>
    <div class="absolute inset-0 h-full w-full parallax-layer">
      <div class="hero"> 
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
</div>

    </div>

    <div class="relative flex flex-col items-center justify-center h-screen text-center">
    <!-- Main Heading -->
    <h1
      class="text-5xl sm:text-7xl font-extrabold text-gray-900 tracking-wider slide-in"
    >
      Fernando Vergara
    </h1>
    <!-- Subheading -->
    <p
      class="mt-4 text-2xl sm:text-3xl text-blue-900 font-light tracking-wide slide-in delay-1"
    >
      Web Developer
    </p>
    <!-- Tagline -->
    <p
      class="mt-6 text-xl sm:text-2xl text-blue-100 tracking-wide slide-in delay-2"
    >
      Discover the World of APIs
    </p>
    <!-- Buttons -->
    <div class="flex space-x-4 mt-24 slide-in delay-3">
      <!-- Portfolio Button -->
      <router-link
        to="/portfolio"
        class="px-6 py-3 text-lg font-medium text-gray-200 bg-gray-600 rounded-lg hover:bg-gray-500 focus:ring-4 focus:ring-blue-400 transition"
      >
        Portfolio
      </router-link>
      <!-- Contact Button -->
      <router-link
        to="/contact"
        class="px-6 py-3 text-lg font-medium text-gray-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-green-400 transition"
      >
        Contact
      </router-link>
    </div>
  </div>
  </div>
</template>

<style>
  h1{
    font-family: "MuseoModerno", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  }
  p{
    font-family: "Prompt", serif;
  font-weight: 600;
  font-style: normal;
    color: #000000;

  }
/* SVG Line Animation */
.animate-lines path {
  stroke-dasharray: 1000; /* Adjust based on the length of the path */
  stroke-dashoffset: 1000;
  animation: draw 4s linear infinite, fade 4s linear infinite;
}

/* Line Drawing Animation */
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

/* Line Fade Animation */
@keyframes fade {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.4;
  }
}

/* Parallax Effect */
.parallax-layer {
  transform: translateY(0);
  transition: transform 0.2s ease-out;
}
/* Slide-in Animation */
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 1s ease-out forwards;
}
/* Looping Line Animation */
@keyframes dash {
  to {
    stroke-dashoffset: -1000; /* Negative value to create the loop effect */
  }
}

.loop-line {
  stroke-dasharray: 1000; /* Length of the dash pattern */
  stroke-dashoffset: 0; /* Initial offset */
  animation: dash 3s linear infinite; /* Animation duration and infinite loop */
}
@import url("https://fonts.googleapis.com/css?family=Montserrat:700");
.hero {
  background-color: transparent;
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
}

.hero__title {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  z-index: 1;
}

.cube {
  position: absolute;
  top: 40vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #003298;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  -webkit-animation: cube 12s ease-in forwards infinite;
          animation: cube 12s ease-in forwards infinite;
}
.cube:nth-child(2n) {
  border-color: #0051f4;
}
.cube:nth-child(2) {
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  left: 25vw;
  top: 40vh;
}
.cube:nth-child(3) {
  -webkit-animation-delay: 4s;
          animation-delay: 4s;
  left: 75vw;
  top: 50vh;
}
.cube:nth-child(4) {
  -webkit-animation-delay: 6s;
          animation-delay: 6s;
  left: 90vw;
  top: 10vh;
}
.cube:nth-child(5) {
  -webkit-animation-delay: 8s;
          animation-delay: 8s;
  left: 10vw;
  top: 85vh;
}
.cube:nth-child(6) {
  -webkit-animation-delay: 10s;
          animation-delay: 10s;
  left: 50vw;
  top: 10vh;
}

@-webkit-keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}

@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}
</style>

<script>
export default {
  mounted() {
    const parallaxLayer = document.querySelector(".parallax-layer");

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const parallaxSpeed = 0.5; // Adjust the speed of the parallax effect
      parallaxLayer.style.transform = `translateY(${scrollTop * parallaxSpeed}px)`;
    });
  },
};
</script>
